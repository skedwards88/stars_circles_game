if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-3b5792f5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"69ca61273ffa52d3389b.svg",revision:null},{url:"71dbfe0987f50db736a7.svg",revision:null},{url:"8bac3771337425c029ff.svg",revision:null},{url:"8c0f376f0aacbb6fe742.svg",revision:null},{url:"8c893bd3565e628d95eb.svg",revision:null},{url:"assets/android-chrome-144x144.png",revision:"ec43b71364a65532749fc4003d37d8bc"},{url:"assets/android-chrome-192x192.png",revision:"9bdde6281938c0744425793e9c9537c6"},{url:"assets/android-chrome-256x256.png",revision:"7a2d0bd5b3c2b9d7c23537b29d0b7932"},{url:"assets/android-chrome-36x36.png",revision:"ef10f34fa4040f4344cfc67b97879e4a"},{url:"assets/android-chrome-384x384.png",revision:"6c8fce62fad7e4ef9cbdd726af5d4421"},{url:"assets/android-chrome-48x48.png",revision:"80362c19b636f2975b6b1274d4ba3ef9"},{url:"assets/android-chrome-512x512.png",revision:"f29e6243216ca3e403f30cd69327a603"},{url:"assets/android-chrome-72x72.png",revision:"ace450378f6e78eed51f8e3ec42d19e5"},{url:"assets/android-chrome-96x96.png",revision:"e59cca3fd72304c5508d73f19b25f742"},{url:"assets/apple-touch-icon-1024x1024.png",revision:"b85308da05209950b2d9881d5e1d852a"},{url:"assets/apple-touch-icon-114x114.png",revision:"01e5a21f05d18f7e04e537e3fa905e69"},{url:"assets/apple-touch-icon-120x120.png",revision:"711c12b3f7c1d7be4f96aa73f2ac4a5e"},{url:"assets/apple-touch-icon-144x144.png",revision:"dee22e804203ccb1c64d53d86c8a3d58"},{url:"assets/apple-touch-icon-152x152.png",revision:"2839be850aaf5f2dda5deccbc51709bf"},{url:"assets/apple-touch-icon-167x167.png",revision:"bcc34a20446f59f78c360acb5a990c4b"},{url:"assets/apple-touch-icon-180x180.png",revision:"99448ac8f91d876d5b1cf971cc7067d2"},{url:"assets/apple-touch-icon-57x57.png",revision:"ae9eed4c52e4a9ecef3849b464dfd37e"},{url:"assets/apple-touch-icon-60x60.png",revision:"c40ecba5ff0d5e95dead343689c3e258"},{url:"assets/apple-touch-icon-72x72.png",revision:"c43c0f98cc09645da42a38e480a525e2"},{url:"assets/apple-touch-icon-76x76.png",revision:"29eba0a87342d4e73150b78b165b6392"},{url:"assets/apple-touch-icon-precomposed.png",revision:"99448ac8f91d876d5b1cf971cc7067d2"},{url:"assets/apple-touch-icon.png",revision:"99448ac8f91d876d5b1cf971cc7067d2"},{url:"assets/apple-touch-startup-image-1125x2436.png",revision:"d8ecc19fd28f0750c62f2b0300d89ab3"},{url:"assets/apple-touch-startup-image-1136x640.png",revision:"33cc5bbb1374568bf2b3415f9eeb8b0f"},{url:"assets/apple-touch-startup-image-1242x2208.png",revision:"319b48bf24ab338b831b8f1c729455ad"},{url:"assets/apple-touch-startup-image-1242x2688.png",revision:"4fca0a301a6007aac798483b2a9e90d9"},{url:"assets/apple-touch-startup-image-1334x750.png",revision:"ce2b78a2396c0bf7370544b878a294ad"},{url:"assets/apple-touch-startup-image-1536x2048.png",revision:"06e25a2905dd850fea65c1c91b452efe"},{url:"assets/apple-touch-startup-image-1620x2160.png",revision:"a91963613cdc907de6d9029f780d1bfc"},{url:"assets/apple-touch-startup-image-1668x2224.png",revision:"8878f5a8f220868fadeb4e07a894005d"},{url:"assets/apple-touch-startup-image-1668x2388.png",revision:"73aaa5596e1d422309d6f786119a839a"},{url:"assets/apple-touch-startup-image-1792x828.png",revision:"cb1e030350054d653493a68a0f08f463"},{url:"assets/apple-touch-startup-image-2048x1536.png",revision:"e9af5e9be1f81e5e03e38f86bad46792"},{url:"assets/apple-touch-startup-image-2048x2732.png",revision:"da261e28ef0fcba8b15c2031fa44e4f6"},{url:"assets/apple-touch-startup-image-2160x1620.png",revision:"80c8897e0b21a401385db9490befe898"},{url:"assets/apple-touch-startup-image-2208x1242.png",revision:"fdc3bd61c45cca97216b7ba23ca0b1af"},{url:"assets/apple-touch-startup-image-2224x1668.png",revision:"2b24aced9f3b3bd98556314abe4485cd"},{url:"assets/apple-touch-startup-image-2388x1668.png",revision:"8e767fb3e036de2020f16517e3d9dd71"},{url:"assets/apple-touch-startup-image-2436x1125.png",revision:"f0d198325da97028d8d4e88902fc57a2"},{url:"assets/apple-touch-startup-image-2688x1242.png",revision:"08484241eb99ac8808f761c4c848d67b"},{url:"assets/apple-touch-startup-image-2732x2048.png",revision:"be5492e8b159d9903a28825fa3acf31a"},{url:"assets/apple-touch-startup-image-640x1136.png",revision:"cfae8e23a79b2309f4d1c59d43a8cf6f"},{url:"assets/apple-touch-startup-image-750x1334.png",revision:"c9bce73aaaffbd5501fc30bce2afc9dc"},{url:"assets/apple-touch-startup-image-828x1792.png",revision:"0bae5bb1bda419a2968204e7e6baa950"},{url:"assets/browserconfig.xml",revision:"8d54d01da1f7aa5221a17a77c9263723"},{url:"assets/favicon-16x16.png",revision:"63569870e18a72addbe3842681575255"},{url:"assets/favicon-32x32.png",revision:"cb97d6d5b0e0adcc8216dce673249736"},{url:"assets/favicon-48x48.png",revision:"80362c19b636f2975b6b1274d4ba3ef9"},{url:"assets/favicon.ico",revision:"3c5fbf77a825e0e463bb5962624bfb5f"},{url:"assets/firefox_app_128x128.png",revision:"3f50a1593c780cb8bcdb2d60d9dea3d4"},{url:"assets/firefox_app_512x512.png",revision:"476884e21654691d773c1df856cc826a"},{url:"assets/firefox_app_60x60.png",revision:"ea753891833ef7105a90b151c2847e3a"},{url:"assets/manifest.json",revision:"218e2a6fd53044a4870adab5d7c81372"},{url:"assets/manifest.webapp",revision:"f1e70fe4c8d0d8a99c01c152e4a3a8d8"},{url:"assets/mstile-144x144.png",revision:"ec43b71364a65532749fc4003d37d8bc"},{url:"assets/mstile-150x150.png",revision:"29cde0a57386f26e93b1201d01a26296"},{url:"assets/mstile-310x150.png",revision:"7e89ea1125d13013caaf6b09b2c42394"},{url:"assets/mstile-310x310.png",revision:"5b1e554b4f86864d50dc47d458557582"},{url:"assets/mstile-70x70.png",revision:"bec18be9c5809613a9c0289ecc7d7241"},{url:"bundle.js",revision:"c0a1ec42fa9e2811e19366d6621f487a"},{url:"bundle.js.LICENSE.txt",revision:"11b0d9515e4a912bb0402744ccc3898e"},{url:"df4d3322e4e28a1fa457.svg",revision:null},{url:"index.html",revision:"5167a973e600ed9baca18827bd826799"}],{})}));
