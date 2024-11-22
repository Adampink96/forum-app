import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" text-white bg-black">
        {/* <Image src="/public/finallogo.png" alt="logo" width={}/> */}
        <h1>Pop Culture corner</h1>
        <Link className="text-white p-5px " href="/">
          Home
        </Link>
        &nbsp;
        <Link href="/posts">post</Link>&nbsp;
        <Link href="/comments">comments</Link> &nbsp;
        <Link href="/about">About us</Link> &nbsp;
        <Link href="/login">Login</Link>
        {children}
      </body>
    </html>
  );
}
