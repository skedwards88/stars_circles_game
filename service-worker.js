if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-3b5792f5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"345a85dfd31620e323c7.svg",revision:null},{url:"69010f9f29894d19927a.svg",revision:null},{url:"71dbfe0987f50db736a7.svg",revision:null},{url:"8bac3771337425c029ff.svg",revision:null},{url:"8c893bd3565e628d95eb.svg",revision:null},{url:"8d493986635cb1fa19c1.svg",revision:null},{url:"assets/android-chrome-144x144.png",revision:"ec43b71364a65532749fc4003d37d8bc"},{url:"assets/android-chrome-192x192.png",revision:"9bdde6281938c0744425793e9c9537c6"},{url:"assets/android-chrome-256x256.png",revision:"7a2d0bd5b3c2b9d7c23537b29d0b7932"},{url:"assets/android-chrome-36x36.png",revision:"ef10f34fa4040f4344cfc67b97879e4a"},{url:"assets/android-chrome-384x384.png",revision:"6c8fce62fad7e4ef9cbdd726af5d4421"},{url:"assets/android-chrome-48x48.png",revision:"80362c19b636f2975b6b1274d4ba3ef9"},{url:"assets/android-chrome-512x512.png",revision:"f29e6243216ca3e403f30cd69327a603"},{url:"assets/android-chrome-72x72.png",revision:"ace450378f6e78eed51f8e3ec42d19e5"},{url:"assets/android-chrome-96x96.png",revision:"e59cca3fd72304c5508d73f19b25f742"},{url:"assets/apple-touch-icon-1024x1024.png",revision:"2225ad5b7045ae3b1791fd99ec1a1571"},{url:"assets/apple-touch-icon-114x114.png",revision:"e0b6a0966827b04fad4e349149649aa7"},{url:"assets/apple-touch-icon-120x120.png",revision:"08f97702d77f2dbc80af528d1a4cbe4e"},{url:"assets/apple-touch-icon-144x144.png",revision:"76accbdd39e4e475bf6bbed392a861e4"},{url:"assets/apple-touch-icon-152x152.png",revision:"131ee2114d3ebc8eb2385f6fbcdede60"},{url:"assets/apple-touch-icon-167x167.png",revision:"e110732761a3b7b8ef24fb034d1c6b30"},{url:"assets/apple-touch-icon-180x180.png",revision:"80451266eb77484b6ffdeee1cbdcaaba"},{url:"assets/apple-touch-icon-57x57.png",revision:"83b23f8c3db67a48a2468cfb025e2194"},{url:"assets/apple-touch-icon-60x60.png",revision:"2fea7da3f7bec4acce9d150ad2f53d0b"},{url:"assets/apple-touch-icon-72x72.png",revision:"c126cf9a13c2d467cc0656030ec58c4c"},{url:"assets/apple-touch-icon-76x76.png",revision:"448fb2bd20436d4199ab3388624d47d5"},{url:"assets/apple-touch-icon-precomposed.png",revision:"80451266eb77484b6ffdeee1cbdcaaba"},{url:"assets/apple-touch-icon.png",revision:"80451266eb77484b6ffdeee1cbdcaaba"},{url:"assets/apple-touch-startup-image-1125x2436.png",revision:"7a21ac99cda94258e7b719c0ab995878"},{url:"assets/apple-touch-startup-image-1136x640.png",revision:"0a037d02aad1be1b0e328d363611c22c"},{url:"assets/apple-touch-startup-image-1242x2208.png",revision:"dc8d1e00e90aa4c0faafb167e6f3e68d"},{url:"assets/apple-touch-startup-image-1242x2688.png",revision:"abb04002bbfc2b22aa5056e001c930f0"},{url:"assets/apple-touch-startup-image-1334x750.png",revision:"17a9384e6c245bbefe577493b000e872"},{url:"assets/apple-touch-startup-image-1536x2048.png",revision:"5442619f638d0c4245cf8a9ba1e4e1e8"},{url:"assets/apple-touch-startup-image-1620x2160.png",revision:"5b6682d62b441bf2cd8db46e1261ea61"},{url:"assets/apple-touch-startup-image-1668x2224.png",revision:"ac09f20a9432f9ebbd38661d31ada525"},{url:"assets/apple-touch-startup-image-1668x2388.png",revision:"83fa7580143ef94edcd666f02758c731"},{url:"assets/apple-touch-startup-image-1792x828.png",revision:"966c36094423388763425e67b8ae9805"},{url:"assets/apple-touch-startup-image-2048x1536.png",revision:"1e9a1e31d46d6bd38a61354e78589ee4"},{url:"assets/apple-touch-startup-image-2048x2732.png",revision:"f3d1b8681703fd47b7020f5b079ca791"},{url:"assets/apple-touch-startup-image-2160x1620.png",revision:"7045feb7577d31fed53fb05c7d2e7502"},{url:"assets/apple-touch-startup-image-2208x1242.png",revision:"5a248c72f2a6d3b8319f304d8b301238"},{url:"assets/apple-touch-startup-image-2224x1668.png",revision:"f272aa7e52b14448923b20faadef47c0"},{url:"assets/apple-touch-startup-image-2388x1668.png",revision:"d1bfbceb806727df65dc7045e346e143"},{url:"assets/apple-touch-startup-image-2436x1125.png",revision:"ba6bb9b04699145d499915d79c4f6759"},{url:"assets/apple-touch-startup-image-2688x1242.png",revision:"3c8e6bada13318202239a95e1b61254e"},{url:"assets/apple-touch-startup-image-2732x2048.png",revision:"5bcedb9ce84035a54c380e61008f9c1e"},{url:"assets/apple-touch-startup-image-640x1136.png",revision:"02a1d37b7d945725924c8c5d479dddbc"},{url:"assets/apple-touch-startup-image-750x1334.png",revision:"3d81ca85dbc01b6aa837b6174bcefb77"},{url:"assets/apple-touch-startup-image-828x1792.png",revision:"f2d4e1b30c8460a0960d56771195fcfd"},{url:"assets/browserconfig.xml",revision:"cebee394103c4733809e536444a970eb"},{url:"assets/favicon-16x16.png",revision:"63569870e18a72addbe3842681575255"},{url:"assets/favicon-32x32.png",revision:"cb97d6d5b0e0adcc8216dce673249736"},{url:"assets/favicon-48x48.png",revision:"80362c19b636f2975b6b1274d4ba3ef9"},{url:"assets/favicon.ico",revision:"3c5fbf77a825e0e463bb5962624bfb5f"},{url:"assets/firefox_app_128x128.png",revision:"8ce68fa92463131db7381285cf420d1f"},{url:"assets/firefox_app_512x512.png",revision:"2697cf1c4c5b1bb4b7e8ba02e6bd706a"},{url:"assets/firefox_app_60x60.png",revision:"b28b93af3014aa656e0825dba7194279"},{url:"assets/manifest.json",revision:"67bb2ad220b8c7d05e160e6698e74f06"},{url:"assets/manifest.webapp",revision:"f1e70fe4c8d0d8a99c01c152e4a3a8d8"},{url:"assets/mstile-144x144.png",revision:"ec43b71364a65532749fc4003d37d8bc"},{url:"assets/mstile-150x150.png",revision:"29cde0a57386f26e93b1201d01a26296"},{url:"assets/mstile-310x150.png",revision:"7e89ea1125d13013caaf6b09b2c42394"},{url:"assets/mstile-310x310.png",revision:"5b1e554b4f86864d50dc47d458557582"},{url:"assets/mstile-70x70.png",revision:"bec18be9c5809613a9c0289ecc7d7241"},{url:"bundle.js",revision:"0c0f14eac86738ec5f1de5b0ad8a7adb"},{url:"bundle.js.LICENSE.txt",revision:"11b0d9515e4a912bb0402744ccc3898e"},{url:"eadbd03fbe502e575298.svg",revision:null},{url:"index.html",revision:"1e0c02886d196f466be0e5e1fbdc4790"}],{})}));
