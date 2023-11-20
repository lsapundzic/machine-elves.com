"use client";

import Image from "next/image";
import { useState } from "react";
import { log } from "util";

export default function Home() {
  const [path, setPath] = useState(0);

  const imagePath = "/images/";

  let images = [
    `${imagePath}judge.jpg`,
    `${imagePath}god.jpg`,
    `${imagePath}witness.jpg`,
  ];

  const changeImage = () => {
    let randomNumber = Math.floor(Math.random() * images.length);

    setPath(randomNumber);
  };

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        onClick={changeImage}
      >
        <Image
          width={460}
          height={460}
          className="mb-4"
          src={`${images[path]}`}
          alt="An art deco style head statue"
        />
        <p className="text-5xl">Machine Elves</p>
        <p>
          Number:
          {path}
        </p>
      </div>
    </div>
  );
}
