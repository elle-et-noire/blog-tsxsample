/** @type {import('next').NextConfig} */
module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? "/blog-tsxsample" : "",
  reactStrictMode: true,
  trailingSlash: true,
};
