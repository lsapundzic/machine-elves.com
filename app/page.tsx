import Link from "next/link";
// import Navigation from "@/app/components/Navigation";

export default function Home() {
  return (
    <div>
      {/*<Navigation />*/}
      <h1>Cover Page</h1>
      <div>
        <Link href="locals/home">Advance</Link>
      </div>
    </div>
  );
}
