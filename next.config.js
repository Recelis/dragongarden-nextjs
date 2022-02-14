const debug = process.env.NODE_ENV !== "production";
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      reactStrictMode: true,
      assetPrefix: !debug ? "/dragongarden-nextjs/" : "",
    },
  ],
]);
