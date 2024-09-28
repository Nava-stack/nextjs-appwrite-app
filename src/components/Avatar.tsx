import React from "react";
import Image from "next/image";

type Props = {
  img: string;
  alt?: string;
};

export default function Avatar({ img, alt }: Props) {
  return (
    <div className="rounded-full overflow-hidden w-full pt-[100%] relative">
      <div className="absolute inset-0">
        <Image src={img} alt={alt || img} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
