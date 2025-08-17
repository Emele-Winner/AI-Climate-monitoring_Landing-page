// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/<AI-Climate-monitoring_Landing-page>' : '',
  assetPrefix: isProd ? '/<AI-Climate-monitoring_Landing-page>/' : '',
  images: {
    unoptimized: true, // disables Image Optimization (not supported on GH Pages)
  },
}
