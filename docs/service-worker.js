"use strict";var precacheConfig=[["/404.html","3520b949037d0dd1851b7a96b1416841"],["/about/index.html","32ee88ff72750bf60fcef6cc526d1946"],["/apple-touch-icon.png","5d189b047161fee5f4c8c9f9cbf5b829"],["/configuration.html","6532af70af547574452d41fbaafd70a5"],["/creating-themes.html","6bf6ed9920ac4adea8d2a12e041d88c2"],["/custom-color-scheme.html","236d29ce17a71dba01e86a00e2ee0c76"],["/custom-css.html","e2208f153fbe59797053fdcd0115bc65"],["/custom-heading-background.html","9f18206ce6904edbe188fcfc603638a0"],["/custom-heading-image.html","1a379ae13d80cd8bd15ce771a81f6d07"],["/custom-html-markups.html","e0298d860c3677d12042e2a82257126e"],["/customizing-styles.html","04d615dfe58e18650661250f25188b6c"],["/deployment-methods.html","2118819d6f84083740d262922702d964"],["/external-link-post.html","c6b0296d4e9126a21b1b080d874ff830"],["/favicon.png","3d05f8132d73390b349cae0ce8c016d2"],["/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/getting-started.html","de63359196620d5ec8935f9c7967280a"],["/github-pages-setup.html","3066edfbed9a005dd785da818c370f9d"],["/index.html","49ffe55ec04ea62ed2022d9c53e0bccd"],["/jekyll-theme-compatibility.html","280be92efe0eff5b1b2175b9209f346b"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/markdown-features-test.html","70217d6df7cc097d3b70aadd7b1a153a"],["/markup-example.html","58ff9f14dc5e9598055b7fbab9ff131b"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/multiple-themes-support.html","7a660fae51306f0724388638380d1a16"],["/news/index.html","c943a6f30483df49ef6d11bf48ddd785"],["/open-graph.html","49986ac7fe1e9d98e692677addf1f6fb"],["/svg-post-title.html","34bf4e336a7f1891d647fbc8ed0dd978"],["/syntax-highlighting.html","a00649e557c36f245127e0085fc8f354"],["/theme-curtana.html","3cefc6185f6937d8bace16688993eff8"],["/themes.html","f789bb4e0fc1544bba8b24da6358f0b5"],["/upgrading-from-v1-to-v2.html","4bb50c677fb2c7ee77f6f507aa21955c"],["/upgrading-guide-v1.1.0.html","6087d0cde46802fee1753540b905d0e9"],["/welcome.html","5b8e336b1f108f6118302dd853392713"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return fetch(e.request)}))}});