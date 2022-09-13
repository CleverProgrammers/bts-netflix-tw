/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'pbs.twimg.com', 'avatars.dicebear.com'],
  },
}

module.exports = nextConfig
