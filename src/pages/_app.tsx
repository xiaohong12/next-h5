import "@/styles/globals.css";
import type { AppProps } from "next/app";
// normalize.css
import "normalize.css/normalize.css";
import Head from "next/head";
//@ts-ignore

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值  */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
