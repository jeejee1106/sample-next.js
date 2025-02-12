import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, //TypeScript 타입 오류 무시
  }
};

export default nextConfig;
