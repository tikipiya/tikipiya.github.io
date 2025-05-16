/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/tikipiya.github.io' : '',
  assetPrefix: isGithubPages ? '/tikipiya.github.io/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 