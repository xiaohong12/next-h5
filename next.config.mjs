/** @type {import('next').NextConfig} */
import path from "node:path";
import { fileURLToPath } from "node:url";
import NextTranspileModules from "next-transpile-modules";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const withTM = NextTranspileModules(["react-vant"]);

const nextConfig = withTM({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});

export default nextConfig;
