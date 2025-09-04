/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
            {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'bento.engage-dev.com',
      },
      {
        protocol: 'https',
        hostname: 'bento.engage-dev.comcrypto',
      },
      {
        protocol: 'https',
        hostname: 'akm-img-a-in.tosshub.com',
      },
    ],
  },
};

export default nextConfig;
