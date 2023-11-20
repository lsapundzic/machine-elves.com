"use client";

import Image from "next/image";

export default function Home() {
  const path = "/images/";
  let images = [`${path}judge.jpg`, `${path}god.jpg`, `${path}witness.jpg`];

  const catchClick = () => {
    alert("You clicked me");
  };

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        onClick={catchClick}
      >
        <Image
          width={460}
          height={460}
          className="mb-4"
          src={images[2]}
          alt="An art deco style head statue"
        />
        <p className="text-5xl">Machine Elves</p>
      </div>
    </div>
  );
}
