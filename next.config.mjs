import { withAuth } from "next-auth/middleware";

const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

export default config;
