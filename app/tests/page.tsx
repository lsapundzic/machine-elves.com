"use client";

import Link from "next/link";
import { name } from "ts-interface-checker";
import { useState } from "react";

const Test = () => {
  const [value, setVale] = useState(0);

  const increase = () => {
    setVale(value + 5);
  };

  return (
    <div>
      <h1>You have reached the page for project testing</h1>
      <h2>Please return home immediately</h2>
      <Link href="./">Take me home</Link>
      <div>
        <button className="btn" onClick={increase}>
          {value}
        </button>
      </div>
    </div>
  );
};

export default Test;
