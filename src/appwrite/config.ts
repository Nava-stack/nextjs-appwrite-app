import conf from "@/config/config";
import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
  // * Create a new record of user inside appwrite
  async createUser({ email, password, name }: CreateUserAccount) {
    try {
      const user = await account.create(ID.unique(), email, password, name);
      if (user) {
        return this.login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {
      throw error;
    }
    return false;
  }

  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.log("Get current user error: ", error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("User logout error: ", error);
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
