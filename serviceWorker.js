const staticDevAthena = "Escaping from athena"
const assets = [
  "index.html",
  "/img/cactus1.png",
  "/img/cactus2.png",
  "/img/dino.png",
  "/img/fondo.png",
  "/img/mete.png",
  "/img/nube.png",
  "/img/suelo.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevAthena).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })