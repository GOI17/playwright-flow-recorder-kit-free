import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/playwright-flow-recorder-kit-free",
  assetPrefix: "/playwright-flow-recorder-kit-free",
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
