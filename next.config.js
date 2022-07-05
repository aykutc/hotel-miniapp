const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withPreact = require("next-plugin-preact");
/* module.exports = withPlugins([
  [
    withOptimizedImages,
    {
      optimizeImagesInDev: true,
      responsive: {
        adapter: require("responsive-loader/sharp"),
      },
    },
  ],
]); */

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: false,
};
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        inlineImageLimit: 8192,
        handleImages: ["jpeg", "png", "webp", "gif"],
        optimizeImages: true,
        optimizeImagesInDev: true,
        defaultImageLoader: "responsive-loader",
        responsive: {
          test: /\.(jpe?g|png|webp)$/i,
          adapter: require("responsive-loader/sharp"),
          sizes: [360, 720, 1080],
          quality: 85,
        },
        mozjpeg: {
          quality: 75,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3,
        },
        svgo: {
          // enable/disable svgo plugins here
        },
        webp: {
          preset: "default",
          quality: 70,
        },
      },
    ],
    withPreact,
  ],
  nextConfig
);
