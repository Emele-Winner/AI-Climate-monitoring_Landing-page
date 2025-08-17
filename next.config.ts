// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  images: {
    unoptimized: true, // disables Image Optimization (not supported on GH Pages)
  },
}
