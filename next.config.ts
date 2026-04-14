import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/claudeskills",
  images: { unoptimized: true },
};

export default nextConfig;
