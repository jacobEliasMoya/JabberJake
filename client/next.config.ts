import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [{ source: "/users", destination: "http://localhost:1337/users" }];
  },
};

export default nextConfig;
