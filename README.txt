Trimline 1.1.0 — STEP / IGES viewer (C++ core in WebAssembly)

Serve this folder from any static web server and open index.html, e.g.
  npx serve .            or   python3 -m http.server 8080
It must be served over http(s): browsers do not run module workers or load wasm from file://.

Server notes
- .wasm should be served as application/wasm (faster streaming compile; it works either way).
- No special headers (COOP/COEP) are required.
- Uploaded models are kept in the browser (IndexedDB) per origin when "Keep uploads" is on.

Files
  index.html, css/app.css            page
  app/main.js                        viewer
  worker/coordinator.worker.js       model session (loads worker/trimline-core.wasm)
  worker/tess.worker.js              tessellation workers (each runs its own instance of the core)
  worker/trimline-core.wasm          C++ core (STEP / IGES reader, B-rep, tessellator, model blobs)
  samples/                           sample models for the Sample menu
