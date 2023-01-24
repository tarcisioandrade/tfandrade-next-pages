const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cdn.sanity.io", "8bymgq7k.cdn.imgeng.in"],
  },
  i18n,
};

module.exports = nextConfig;
