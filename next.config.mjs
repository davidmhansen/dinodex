/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dinosaurpictures.org",
        port: "",
      },
    ],
  },
};

export default nextConfig;
