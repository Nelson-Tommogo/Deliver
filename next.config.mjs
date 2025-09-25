/** @type {import('next').NextConfig} */
const nextConfig = {
  // Change build output directory (instead of .next)
  distDir: 'build',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // Enable static export (optional)
  output: 'export', // This makes `next build && next export` produce an /out folder
};

export default nextConfig;
