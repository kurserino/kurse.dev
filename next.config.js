/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");
const urlRewrites = require("./next.url-rewrites.config");

module.exports = {
  reactStrictMode: true,
  i18n,
  async rewrites() {
    return urlRewrites;
  },
};
