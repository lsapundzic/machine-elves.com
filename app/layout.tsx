import "./globals.css";
import Navigation from "@/app/components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navigation />
        </div>
        {children}
      </body>
    </html>
  );
}
