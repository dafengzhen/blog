import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: { unoptimized: true },
  output: 'export',
  poweredByHeader: false,
};

export default nextConfig;
