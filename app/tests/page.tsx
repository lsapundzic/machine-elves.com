"use client";

import Link from "next/link";
import { name } from "ts-interface-checker";

const Test = () => {
  return (
    <div>
      <h1>You have reached the page for project testing</h1>
      <h2>Please return home immediately</h2>
      <Link href="./">Take me home</Link>
    </div>
  );
};

export default Test;
