import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="../locals/home">Home</Link>
      <Link href="../locals/blog">Blog</Link>
      <Link href="../locals/art">Art</Link>
      <Link href="../locals/about">About</Link>
    </div>
  );
}
