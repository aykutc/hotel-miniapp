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
  reactStrictMode: true,
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
          sizes: [512, 720, 1024, 1440],
        },
      },
    ],
    withPreact,
  ],
  nextConfig
);
