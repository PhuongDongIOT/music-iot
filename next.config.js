/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  }
}

module.exports = nextConfig
