import Image from "next/image";
import localFont from "next/font/local";
import variables from "./variables.module.scss";
import { Button, Cell, Space, Toast } from "react-vant";
import { Notify } from "react-vant";
import { useEffect } from "react";
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
  useEffect(() => {
    setTimeout(() => {
      Notify.show("通知内容");
    }, 1000);
  });
  return (
    <>
      <Space align="center">
        <Button type="primary">Button</Button>
        <Button>Confirm</Button>
      </Space>
      <>
        <Cell title="文字提示" isLink onClick={() => Toast.info("提示内容")} />
        <Cell
          title="加载提示"
          isLink
          onClick={() => {
            Toast.loading({
              message: "加载中...",
              forbidClick: true,
            });
          }}
        />
        <Cell
          title="成功提示"
          isLink
          onClick={() => Toast.success("成功文案")}
        />
        <Cell title="失败提示" isLink onClick={() => Toast.fail("失败文案")} />
      </>
    </>
  );
}
