'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"index.html": "c66d176908eb2965ac0487b59d1b2776",
"/": "c66d176908eb2965ac0487b59d1b2776",
"flutter_bootstrap.js": "afe76f4666334e4782c34169c9d1c7b8",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"assets/fonts/MaterialIcons-Regular.otf": "b29202085dc696da2c45cdf342a69958",
"assets/AssetManifest.bin": "b94e0103b3f7e9ff323cef84e83fb466",
"assets/NOTICES": "85cc6f86fe97d579573016124d877779",
"assets/assets/images/traveller_logo.png": "7613946b6be8da8e1762744c588f82c9",
"assets/assets/images/upi_forward.svg": "4249fb202e6d84c9fa0acfea97277023",
"assets/assets/images/check_circle.svg": "e5cae00ca438dd71cb512db582dfa564",
"assets/assets/images/lari1.svg": "291d5a70fb79cbcf22a14ab5f368ad8d",
"assets/assets/images/route_arrow.svg": "9de41ad90848519589813fe8162586dd",
"assets/assets/images/serach_icon_vector.svg": "0b5de9325f2008edcfed65c8bb488b7d",
"assets/assets/images/paytm.png": "f7a0f2496f28a7e9e2e5bfea19ba40b1",
"assets/assets/images/fork.png": "686a59ef6a30fcc5b37b12a8b18381f1",
"assets/assets/images/best_seller.svg": "bed6f05768cb93d1b16a5faa8c75fb61",
"assets/assets/images/lari.png": "be9e07a83172e00989dfede2991627f4",
"assets/assets/images/udipis.png": "f5044321bf285643ca4a5ef0ef11afd1",
"assets/assets/images/cross_icon.svg": "856d76df66e2399e890712c4ba20dac8",
"assets/assets/images/restroom3.png": "e7d18f9da37c40fbb7e395b9f4646eb6",
"assets/assets/images/down_arrow.svg": "af1123e3d8a462afbe63ec1fce69773d",
"assets/assets/images/chevron_forward.svg": "6f6dd6a122365c707d0fa00229ffe318",
"assets/assets/images/restroom1.png": "1c9282f65719af0fd01d0dbaf331f12f",
"assets/assets/images/up_arrows.svg": "bf02633c7d53f6c0da03166901e38081",
"assets/assets/images/upi.png": "cc7d35e256e78a62c1dc3910caa381d0",
"assets/assets/images/restaurant6.png": "1e680d266c935e78e0450ad10d4f6371",
"assets/assets/images/restaurant4.png": "60f225e23b8927714d4e72f0e6b1cc74",
"assets/assets/images/paytm.svg": "0029aaa75835aea84d775917117fffab",
"assets/assets/images/food_photo.png": "5ac331fc63a6e67b497c5c7bd274af93",
"assets/assets/images/close_icon.svg": "d95d3e009ee85e8bc7b9df6f1d878331",
"assets/assets/images/substract.svg": "9bf06a61a363fb306669bc1f927b308b",
"assets/assets/images/gPay.png": "67ebc01cf98952792b1f620655ec071d",
"assets/assets/images/delete_icon.svg": "2cbd78c1782734dba3bd2f7fc033da19",
"assets/assets/images/step1.png": "ef2b5a04134203132a4be74a21b0fdfb",
"assets/assets/images/verified.svg": "da42ce6b1e696fa34c91f74d6ecab998",
"assets/assets/images/restroom5.png": "6db03fa9a0175a8e0bc358103a97e05d",
"assets/assets/images/add.svg": "4d39fbe5c9d9da581ed7060ab0477081",
"assets/assets/images/net_banking.svg": "871d6403d6a41bf5fd910c6c76f13963",
"assets/assets/images/star_icon.svg": "3466b381de40a98a77959e34fa803787",
"assets/assets/images/restroom2.png": "74f9b5001967d6a584eda4507c644445",
"assets/assets/images/debit_cr.svg": "6c00e88f2a7c252dc2a5d41c98a55db7",
"assets/assets/images/whatsapp.png": "86052cacc6f119b86975680a37e97e52",
"assets/assets/images/qr.svg": "91e50e4517e4c36603c8976ff349f2f4",
"assets/assets/images/download.svg": "58513c31bcf914c5d9ebaaefcb809000",
"assets/assets/images/home.png": "a0647c78c2b4f4733c3cbec0f14fdfb9",
"assets/assets/images/order_fork_icon.svg": "4fb224292313190c49626f99be6071f8",
"assets/assets/images/order.svg": "339947e256a17f0d6654aa63f0c11f6d",
"assets/assets/images/food2.png": "ce5052e1bb1f010f16b3bd422e4f1238",
"assets/assets/images/food_photo.svg": "61ccd632b91af5302b6301b359dd22a8",
"assets/assets/images/nonveg_frame.svg": "504ffb2b3ee8e30de91bbccdbd579441",
"assets/assets/images/step2.png": "94f2bdad13eac91567aa89ca5a1e8f4e",
"assets/assets/images/white_back_button.svg": "d3d4bc8d6759d230500c8763fab0ca88",
"assets/assets/images/g_Pay.svg": "374d7a73cb2eeb5d69d58125ed7b023f",
"assets/assets/images/veg_food_icon.png": "a787fe5b8d5da94dba228353e5fb0476",
"assets/assets/images/circle_cross.svg": "78c44cd1642a7aebc7e7148ad17b97c6",
"assets/assets/images/phone_pay.png": "f65a6aa62e4670948abc0f0a23a679a3",
"assets/assets/images/upi.svg": "16e895a249b7cd9f5a4c03039186ddb5",
"assets/assets/images/step3.png": "25cefc0a47ffe2b7fa0ef4d77cce7e37",
"assets/assets/images/forward_icon.svg": "6de6cd0d4b1bd2b8fca4aa5ae1b0ebe9",
"assets/assets/images/blue_forward.svg": "8b0abb81e76cbf0b0644911af830d5a3",
"assets/assets/images/phone_pay.svg": "c84876f02b26787d4700355170abe086",
"assets/assets/images/reedem.svg": "c18211a12acb8243ba08c8c9b79b2bba",
"assets/assets/images/restaurant3.png": "af8b4a8f5b03e60142c1bea2778dfafb",
"assets/assets/images/restaurant2.png": "32d2b5ada8691bc79b316a449edd4b06",
"assets/assets/images/restroom4.png": "e45d1b4f23080369b2d54f417db4b805",
"assets/assets/images/check_tag.svg": "69062b45096d9cd9f2e7cc68f85d281b",
"assets/assets/images/wallets.svg": "9e7f09d4e31eef966ca8e3c87f7a16a3",
"assets/assets/images/add_icon.svg": "b6b7ddc2aaa69bce5db5386c72287a27",
"assets/assets/images/add_circle.svg": "e753197807198d6e7a558ec829a0c997",
"assets/assets/images/restaurant.svg": "4d597bcae13a91c1d651c3d82a70822c",
"assets/assets/images/bag.svg": "115e93b2ceecbc807f293cd1e02c41f5",
"assets/assets/images/bus.png": "0fef9e078a4b4acb55ff8193fa90c617",
"assets/assets/images/veg_symbol.svg": "43fbc6fe3552829d153cec6b8bfaead7",
"assets/assets/images/menu_list_icon.svg": "17d579c4544ded9006834032d3b06f8f",
"assets/assets/images/back_arrow.svg": "ca66a84a1a0c3ad5b7cf35dea9cdb86a",
"assets/assets/images/veg_frame.svg": "39f734f4225004920b0ff10f77ffb12d",
"assets/assets/images/restaurant5.png": "9ff809a13e61c41683ff23d21c9adc58",
"assets/assets/images/top_rated.svg": "ff2fedb69ae9cd7dc0bd28e10b807760",
"assets/assets/images/restaurant1.png": "66d9ac2b97ccbd2921fbc76be82ed961",
"assets/assets/images/best_star.svg": "02d0890de8042a6d5df5c4e7b072ed17",
"assets/assets/images/vector.svg": "8605ac4d26089c059ca4be7bc2844028",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin.json": "5777ea4bcc0cb8f7f3e91e7aebd659cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"manifest.json": "b6e884c2aada6f3b1ddde31d53f7ae9e",
"version.json": "b64ed79850ff1b838810558fb8c60216",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "fd7adca28472e4a2333cb73bdca163dc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
