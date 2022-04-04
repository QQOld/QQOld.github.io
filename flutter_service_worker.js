'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e133556165e4b0986fa5ea516ef80a11",
"manifest.json": "8122f5e2fb5a20afe847ebf7e74b9839",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/img/5.png": "7329b427d09d639d0a66980f30ff2804",
"assets/assets/img/13.png": "311a0128c4d0c2672b0686538dc39126",
"assets/assets/img/6.png": "6a2a1d4cd6a3bc76154d69c799b41bc6",
"assets/assets/img/1.png": "c0c1306b93f1049588b721a9b6e926c2",
"assets/assets/img/2.png": "d0d20174f412cbf6e078a5f425d98dfa",
"assets/assets/img/19.png": "caedf4f9ee7d625d01ad8eb388dcd24a",
"assets/assets/img/18.png": "c47d7f2714bdd4cee1720d54661c0e29",
"assets/assets/img/22.png": "9772af54abb5493935c24a10ec0165e0",
"assets/assets/img/11.png": "5cadd8e713a8d1990a7e8724db31dc00",
"assets/assets/img/14.png": "ba8b3181ab6b0a5ecbae9ffef87a8353",
"assets/assets/img/20.png": "5e3a14e4f810edca149157099ed957d4",
"assets/assets/img/17.png": "69c42baa16ef26ea969d66882584f344",
"assets/assets/img/21.png": "4ffc9fbd93d9ff7e853e8c2aee63556d",
"assets/assets/img/15.png": "666dbbd9f0aee4552cf80f029455b8e9",
"assets/assets/img/9.png": "a39f310e1d7d645ee0396f213ad454c9",
"assets/assets/img/7.png": "d44f01ef13fb80fd572a144bd8c01967",
"assets/assets/img/4.png": "0027f72dd3c84280e5c6f2722dfba3f0",
"assets/assets/img/16.png": "a1961820ffc9a9cc3f6a26d611d34dce",
"assets/assets/img/12.png": "b06eed61567d8fbd49863cad61144e43",
"assets/assets/img/3.png": "e6aa65a023dd0fe60a0093b96a9afbd8",
"assets/assets/img/10.png": "62d20abfc8dbf830728f6b7afb318b0c",
"assets/assets/img/8.png": "ed351f2894823ab3894402f8df44e1bd",
"assets/assets/finger.png": "eb8e09119229793b10685010a8a50eec",
"assets/NOTICES": "5e7feb15b4ea57eab8ff9bc6da0322de",
"assets/FontManifest.json": "2c5e365582319af000b94eb19f442bcb",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Comic-Sans-MS.ttf": "a50f9c96a76356e3d01013e0b042989f",
"assets/AssetManifest.json": "bcdd275a4b0b482e2e589383e08422d1",
".git/logs/HEAD": "698ffa3bd5a1fc7584a2605dd13a8fc5",
".git/logs/refs/remotes/origin/master": "79fc6dfc2b2b0b5fd9dcf5e2792b28fb",
".git/logs/refs/heads/master": "698ffa3bd5a1fc7584a2605dd13a8fc5",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "5bc1539500fba409e9dcdd712b738740",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/2c/718ec70fbfcd07cc0a05d57a5e8e08c269ed94": "0234a4a22a8d1337260aa4acb5b04f94",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/2d/22030423651a25ae253e09ee177e24f8c4cf4e": "f6f439433f8497192ca3396363eebe68",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/95/60c72940951e7032fee3bc3095fa8f8ebfab30": "d99fab1259baa211dcfec1999665418a",
".git/objects/3c/a19e67e3a3c474d50e43b6756b6354c710f64f": "2ada125796efb5b31751d7cf6d544d6c",
".git/objects/25/74e21cb997b15cc8cd794c9417a0ac6cb334a9": "39e479eb434bb1f2410431981958df2d",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b6/db1a979327ba9caa5d213730891ab7b028fdfc": "649613c7245ea5f3d87c79125201f0ac",
".git/objects/b6/ff2d16571709266ae765bd0dae2d0904cbbfd4": "8dfc4722f17e9ec599b345db6680a090",
".git/objects/9f/8bb594fb53c5cf29409eae51089081a8de7ad7": "bec0672ed3eb41620f409b2c49a00c57",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/8d/39f3f11f2be753c186e19c2afd6d3ecd1864a5": "1f08f998e3a7a812b05e6b86ef5f46e0",
".git/objects/c6/26be00036e1f1ca7d2bd85fe7e433605db8d46": "cef1dff584777fba2221b8ca7312345d",
".git/objects/4f/2b52af58ba66b73d4f3c877efd042c331e7ef0": "50a8a18f20cdaff57bb37285f584c823",
".git/objects/5d/0c51cfeb99aaaac5213f4dcdd08fe621b02f5e": "616443794457f505fb5d7a987474682e",
".git/objects/5d/989dc4b83800ad835e8e73c864789558b3cec8": "82dd062370d41b8f8024fe7a7b161108",
".git/objects/92/a2f717e05eb4890c29b7191f098ce9eca88eef": "01e9a6db14ef914ef2d317bf7d483f9d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1e/1a212def0b4cd4d6335617185046e6e6081ac9": "a81bf15041a3d467db0a50bb3ec4f42f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/a1/10c4aab9d4d9a43f49686fa753cafdb320999e": "86e851bd93872909cf1427a00591acec",
".git/objects/a1/000a118d0b3c987f454c5374220bee8fac3f4a": "86dde25c8ae3093999f1c5bc4c5b3ce9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ad/9fc4bbdc2dd3896283225f2231d682c8e90815": "f9310cd1f4474c4c64621c985bdf8b51",
".git/objects/9a/be77bf5db250cb707adcfce0835a7d66aa9a72": "b7d35a414efa746328e60860383f1f0b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c8/345d6a5b68de3abd3d67453950627a64c97f30": "2d886007b4f3485021b401a1b26e92cf",
".git/objects/62/9f4c1e6b56a49f6ceb0d396190a6a180e5bb0c": "7e1976be176c4ae14d71a0223eae66f5",
".git/objects/35/0c4a588d74aee4fdae89b368fadf794935ffb0": "f7235d3c30761b5f008cda4c13d85fbf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/c9/723a8743ccf2dbd8f10e7ec7fa0edcaa31cdce": "32d5ec460b4491bc828f5d7053606c28",
".git/objects/bc/88d43464f8fc12eca3524bfabe3e897a8763e1": "ec1dd74b06b8486acd733b936f98e28f",
".git/objects/19/1fc2c51d559d9f1151f0a4be15dcd70c243013": "b27c6573c82bcaf2a24c0dd36e768c74",
".git/objects/b4/b427b54152a93cb63b61fc8f8c4fdcf75e9166": "882a4859169322e8ff72d29551b3a3ab",
".git/objects/c5/7d61a7a8250437d9a24629937c944585791bcb": "48ea7365836670dced22f8fc431f62ca",
".git/objects/f1/830d4565972f289956dc3edea53ef4cf0938f3": "693c615cba5329aa09c6253158b3dd7d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5e/08b2d1f0fb09c796f2fa11065f7c214d52ebe0": "1a09f94fda67400354fa9c5d5db745df",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/06/1f4a957227894348830ba414263ddf3bfe33b9": "f1edd797ece1711e8c0b42c1817be852",
".git/objects/17/75e61d20c35aed5437af788a9e49d8119a3f06": "ec0e24bd0600b82d4c7a3cedf2c6d0f5",
".git/objects/a6/71a98254a5bca5b7698e0e5cd66a759b2f7ccf": "424ddc401b46fee8c9bfa458f224d907",
".git/objects/d1/7e1be6c4e3848b0c172e4558b521ea6b1994b3": "6f0345ee45d63d62692aa9e0ad6b747c",
".git/objects/b0/ab865268bc9ca8d96da455eac3464b43aa1783": "0ad85733f6ad5f9f59b2d61012c7739e",
".git/objects/5a/b0de32db5566a48ce73000ac3428185421e673": "e4a02dbb6929137bed3c45debb120d9a",
".git/objects/f3/e432af1476de1dcef8feaf7b5e4b8c155bec0a": "d7f3e2baf2510acaca4ec18ebaf81ce4",
".git/objects/bb/5cf7ac1f8b34fd41679986a93b9d973bea2d90": "600e9b642f000c5950a3277611bfafbc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/master": "f1dbc65d7a7c02b642c6a4b9473de42a",
".git/refs/heads/master": "f1dbc65d7a7c02b642c6a4b9473de42a",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/config": "1450bae7ebf0def2f711b614eb658d16",
"index.html": "a5b6bcf72eb2f9190e06f9a565a78772",
"/": "a5b6bcf72eb2f9190e06f9a565a78772",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "dcf6544e994b3f544ae54a07c31564a2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
