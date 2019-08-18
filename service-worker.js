/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "52ca491670afaa2a5309aabcd38fbc8b"
  },
  {
    "url": "assets/css/0.styles.5a5b4bf9.css",
    "revision": "084cdbea22e6c39d062e3f06f43d6791"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/contact-bg.jpg",
    "revision": "90b89018c57623f25ff271dda0b322e8"
  },
  {
    "url": "assets/img/home-qr.png",
    "revision": "31d3d9708f749dc52e00747325742189"
  },
  {
    "url": "assets/img/learning/js/jq_alert.gif",
    "revision": "416ecb5db668548248b5cc674e84925f"
  },
  {
    "url": "assets/img/learning/js/jq_load.gif",
    "revision": "45aac69758e883c23dc4166645e4b7e2"
  },
  {
    "url": "assets/img/learning/vue/vp_github_create.png",
    "revision": "0d274699d76afc231f6e5cc7cf7dcc1a"
  },
  {
    "url": "assets/img/learning/vue/vp_github_home.png",
    "revision": "b32048747ab1f894d7da9df726219ae1"
  },
  {
    "url": "assets/img/learning/vue/vp_vuepress_demo1.png",
    "revision": "5c10c78614a35761b02720d1f499a9a2"
  },
  {
    "url": "assets/img/learning/vue/vp_vuepress_demo2.png",
    "revision": "71c182dfc43d201099de56fb576dab02"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/services-bg.jpg",
    "revision": "5222d76c2ce8a32d587fc6fc8e5f4da4"
  },
  {
    "url": "assets/img/skills-bg.jpg",
    "revision": "ac55424d4f2e9cb3691f5eb9a4b65bf6"
  },
  {
    "url": "assets/js/1.ed08d72e.js",
    "revision": "962646d7e58bc0a6b31095a360b03daf"
  },
  {
    "url": "assets/js/10.d1f5e796.js",
    "revision": "f098e578450a37819e11b15ac380ccd0"
  },
  {
    "url": "assets/js/11.eef83efc.js",
    "revision": "d7b6ee63b26c0ddad281b0d64a394389"
  },
  {
    "url": "assets/js/12.499fc7e6.js",
    "revision": "50917721e7a52f8031d809f781024e1e"
  },
  {
    "url": "assets/js/13.09bd8568.js",
    "revision": "90d4eac6354b76877cc970f223e378a2"
  },
  {
    "url": "assets/js/14.ab98d42a.js",
    "revision": "3eb4dbb1e7fb433b7cd51acc980e9354"
  },
  {
    "url": "assets/js/15.a1eadf2a.js",
    "revision": "7cf717037811b84f333564e3a9287bc6"
  },
  {
    "url": "assets/js/16.9afdb1ca.js",
    "revision": "897ab8f62983be688fbe991e4f53d99f"
  },
  {
    "url": "assets/js/17.21c8fcc7.js",
    "revision": "5dbdf83ff92a5e1c1ffd6e2c5bdaf2ec"
  },
  {
    "url": "assets/js/18.6486cbac.js",
    "revision": "43d1df87f7d04cea2a4327048f143f97"
  },
  {
    "url": "assets/js/19.05c41371.js",
    "revision": "307a794d7e50f3d9e128e70f24537d51"
  },
  {
    "url": "assets/js/20.d57f5c12.js",
    "revision": "4cd5313a51a8f00c83b8fb26091c6ba5"
  },
  {
    "url": "assets/js/21.95213b4b.js",
    "revision": "1409813659a2d6dd7557894298ab9e16"
  },
  {
    "url": "assets/js/22.fe902164.js",
    "revision": "4a460c319588767c0ea3c8998710621a"
  },
  {
    "url": "assets/js/23.c8c1babf.js",
    "revision": "e53262f1fa90487d9461585e99be0163"
  },
  {
    "url": "assets/js/24.f7f4f4b1.js",
    "revision": "844b4f1a409ad884d7848d58b3f11712"
  },
  {
    "url": "assets/js/3.9793400d.js",
    "revision": "36fe8d25efc9ad52eafae52aed5a7a38"
  },
  {
    "url": "assets/js/4.615874cf.js",
    "revision": "a8b6771b284866a457231c2467b41ef3"
  },
  {
    "url": "assets/js/5.03ea8fd0.js",
    "revision": "22013e7a03a758cc901eefa00a6d8300"
  },
  {
    "url": "assets/js/6.954e6320.js",
    "revision": "cc50c2348691d42d21a72bf9bfc0a031"
  },
  {
    "url": "assets/js/7.580f295f.js",
    "revision": "8bc8191d466b3abbc84fcdbe1e9dacf2"
  },
  {
    "url": "assets/js/8.06959a65.js",
    "revision": "0750b1f34b4166d3343c500058e49a0c"
  },
  {
    "url": "assets/js/9.62a40464.js",
    "revision": "b27b9c106022d6c2bcbff1d9e543803f"
  },
  {
    "url": "assets/js/app.6684e293.js",
    "revision": "5e2b94f95c9a5ac493454d5e58ca4369"
  },
  {
    "url": "assets/js/article.js",
    "revision": "c19215afc01a7c22a5e5e097b184f058"
  },
  {
    "url": "gerrit/config.html",
    "revision": "1ec953fc249602202408d320a9f01cc2"
  },
  {
    "url": "gerrit/deploy.html",
    "revision": "5b571e7c35b709b5f5e4ebb99de860bd"
  },
  {
    "url": "gerrit/develop.html",
    "revision": "1297bf7018c688f8fe0acef835f7876b"
  },
  {
    "url": "gerrit/distribute-config/index.html",
    "revision": "49a5eb50dc2ff1ab1570f593a22b2e7c"
  },
  {
    "url": "gerrit/distribute.html",
    "revision": "e6d6ddc0905c164b4181eab2c752aab0"
  },
  {
    "url": "gerrit/extend-hooks/index.html",
    "revision": "aededaa8fe74c14f173801d929c94292"
  },
  {
    "url": "gerrit/extend-pygerrit/index.html",
    "revision": "00573cbd4c4ea6d73da90ec30ee49c50"
  },
  {
    "url": "gerrit/extend.html",
    "revision": "7fcf513bdc96e7c2f35d30d908156a00"
  },
  {
    "url": "gerrit/index.html",
    "revision": "c63ddf94d6bd37a59157e72619727f82"
  },
  {
    "url": "gerrit/question.html",
    "revision": "13eabf29954d1e2d417f6f198eadf42c"
  },
  {
    "url": "gerrit/upgrade.html",
    "revision": "2f3823b841d7fb308b0c8d2b900a6635"
  },
  {
    "url": "hero.png",
    "revision": "387b01ef6157e9f2b6105d5acba8df3d"
  },
  {
    "url": "hero2.png",
    "revision": "dc0d02e5bb5e153694968c1e7cf37b7a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "94e8daa2a75d5a5537fc55a821982f3a"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "3a84c5b537770d8c815c7bad4fe100b7"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "0a6d5bc3dcd763811f022d11d3e077f7"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "031789396f61a9357165f295b92ee551"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "10e4e66c40c5a10e025f5e44705611e1"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "380b51600fbef021559e5270bb6706af"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "5985f88d2878db56fb1d7636effc9ae0"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "fbb52c4099204bd5feb115166a520320"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "30c71a88c7ec06facbb3aacb84396a00"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "c5e560fa9f21ac66c06b56206f28ad4f"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "f015136a035b918c01e5bf918d5a8e4c"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "ab806382dd3df9c39027f94c99d9b400"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "ef19eb35f29c4f2035b9b841db4e89f9"
  },
  {
    "url": "index.html",
    "revision": "65bf5a08e94110be8799b3df16d84e9f"
  },
  {
    "url": "learning/index.html",
    "revision": "3c89271cecfb7f97c51d635644389451"
  },
  {
    "url": "learning/javascript/index.html",
    "revision": "4e532585f0f702accc2af2baadfaa6e2"
  },
  {
    "url": "learning/javascript/jquery.html",
    "revision": "7b5f8c5fb733397c13b3072e343cfa52"
  },
  {
    "url": "learning/vue/index.html",
    "revision": "119d3e86c4f43a32f07927dd136d391b"
  },
  {
    "url": "learning/vue/optimize.html",
    "revision": "86a121877fdd293b3790c69aedad915c"
  },
  {
    "url": "learning/vue/technology.html",
    "revision": "b973894ae66c371b781048b1ddcd4ca7"
  },
  {
    "url": "learning/vue/vuepress.html",
    "revision": "888210ed0971e09333312aa560d47c50"
  },
  {
    "url": "logo.png",
    "revision": "28f9f8d35c40de0134474574484d7312"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
