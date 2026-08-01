import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: { unoptimized: true },
  output: 'export',
  poweredByHeader: false,
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    loadPaths: ['./node_modules/bootstrap/scss/'],
    quietDeps: true,
    silenceDeprecations: ['global-builtin', 'import'],
  },
};

export default nextConfig;
