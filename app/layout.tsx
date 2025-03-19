import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "FOSO",
  description: "",
  icons: "/icons/logo-main.svg",
};

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} `}>
        <div className="flex justify-center ">
          <NavBar />
        </div>

        <div className="content ">{children}</div>
      </body>
    </html>
  );
}
