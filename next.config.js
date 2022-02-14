const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? "/dragongarden-nextjs/" : "",
};
