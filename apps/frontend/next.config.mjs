/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freres.ar",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
