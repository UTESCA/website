/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};

module.exporots = {
  images: {
    domains: ["flowbite.s3.amazonaws.com"],
  },
};
// module.exports = nextConfig;
