"use strict";var precacheConfig=[["./cn.html","c7edf0fb8ef337c6393902ec5b13792f"],["./index.html","657bf67c776de3f8b4b7f607e5b365ed"],["./static/css/cn.0726442c.css","10d0b9d602b3b657c55a1385c1844c28"],["./static/css/index.0726442c.css","2767bdf2b32295812e42d9d1a0293da3"],["./static/js/0.8ded4b84.chunk.js","73aeeb82b5db411a0940bc501c662da9"],["./static/js/1.4ef4fead.chunk.js","ea4ee4326299f07330091dc8a7a477ea"],["./static/js/10.15b058db.chunk.js","254b66efd27b31d177d8537fa0fcba30"],["./static/js/11.3e836fe2.chunk.js","b451c82ad562b1ca4243d058362c6650"],["./static/js/12.0c15475d.chunk.js","5a194522a82d1b1e2f874e0555a3e29c"],["./static/js/13.4e185864.chunk.js","cd91d913d1e9e0e2afb57b5d8d0e7614"],["./static/js/14.4953400a.chunk.js","8caf3eb6fe87dd1c1aad2503562477b7"],["./static/js/15.1c4d6a11.chunk.js","c6e6f808f372ef550f456d64489c3e5c"],["./static/js/16.eea35c51.chunk.js","a88c12590920df5c7b4d8aa2d9e7befb"],["./static/js/17.e31cbc90.chunk.js","19e3b5ad3432960c317db7aab7b2eed8"],["./static/js/18.ac6907c6.chunk.js","d1bb415cf749669f46aa7b147f9ecb97"],["./static/js/19.ba30d47b.chunk.js","3852098f7b7393df8a79009bfc84ab3a"],["./static/js/2.8eaa8a8d.chunk.js","bc8255dfabd91d627ae8ef3a00e8d417"],["./static/js/20.99097880.chunk.js","4bd6cbcc8217ac7c7713e0a1322b8a73"],["./static/js/21.16b38fa7.chunk.js","035d48a5ae17960b9107800d9598ac94"],["./static/js/22.9c3076b0.chunk.js","6a6272107a7f2f36d68d8d32a41ada9c"],["./static/js/23.48cc77a0.chunk.js","4e863e7b2c0a09b030ce8af882deae0c"],["./static/js/24.0f7a8423.chunk.js","4825acd5c028af4d7803cfabc7714acc"],["./static/js/25.1166af01.chunk.js","822925e9d1e31da608cd78a5d3fb5deb"],["./static/js/26.cca3f14c.chunk.js","7d47301355d3a2a57b4078958bbe570d"],["./static/js/27.b73f2c62.chunk.js","861e754dc349f5b4d7e544ac8a0da9ac"],["./static/js/3.c214c24b.chunk.js","776588eebaf3927c7dd701ea655be57d"],["./static/js/4.5beed898.chunk.js","12ac51780c1066fc5a2e131db4cc5370"],["./static/js/5.db502b16.chunk.js","3bbfafe618339c11c19925ed99935ec7"],["./static/js/6.4a872116.chunk.js","cf21857c107caab18821f84a63f94de6"],["./static/js/7.3424dd87.chunk.js","83ee5bc51ce75fbf3e2d45549c55b752"],["./static/js/8.b2900e7e.chunk.js","80b940cbd510aeb2994e6faf6d34cb64"],["./static/js/9.67cbc734.chunk.js","d62d80393642359d126e2003f4443eb6"],["./static/js/cn.fc84133f.js","0a08b243010b3d261344194c1390fd61"],["./static/js/index.a817a79a.js","0fb805b8ace19881cbc94a52276a9deb"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],t=new URL(c,self.location),s=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){if("GET"===c.request.method){var e,a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var s="./index.html";!e&&"navigate"===c.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],c.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)}))}});