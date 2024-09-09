import Image from "next/image";
import localFont from "next/font/local";
import variables from "./variables.module.scss";
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

export default function Home() {
  return (
    <>
      <div className={variables.test} style={{ color: variables.primaryColor }}>
        小洪
      </div>
    </>
  );
}
