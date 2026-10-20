/** @type {import('next').NextConfig} */
const nextConfig = {
  // Separate output folders so `next dev` and `next build` can run at the same time
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
}

export default nextConfig
