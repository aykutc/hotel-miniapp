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
  env: {
    /* host: "http://test:3000", */
    host: "https://neom-hotel.web.app",
    api: "https://neomapi.westerops.com",
    chatDeeplink:
      "https://share.neom.kobil.com/kobilservice?sID=0cab564a-c1a2-4452-abb2-0d80c4949ed2",
    openIdClient: "miniapp-hotel",
    openIdRequest: "https://neomapi.westerops.com/auth/login-hotel",
    openidHost: "https://idp.neom-poc.shift.kobil.com/auth/realms/kurtis/",
  },
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
          sizes: [360, 480, 600, 720],
          quality: 90,
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
