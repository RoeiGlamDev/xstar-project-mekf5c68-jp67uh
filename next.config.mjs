import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  i18n: {
    locales: ['en-US', 'fr'], // Add your supported locales here
    defaultLocale: 'en-US',
  },
  webpack: (config) => {
    // Custom webpack configurations can go here
    return config;
  },
  experimental: {
    // Enable experimental features if needed
    optimizeCss: true,
  },
};

export default nextConfig;