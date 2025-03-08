
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/blog-details"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 49672, hash: 'a34338f9b400f912a91be1a85fb2c1b1e7804589c16429ed0edf052a69f17974', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15149, hash: '10a29bb0bc0a9efe7a03b1bfc608df8aaa9f9a2b79a3849e7398059ec276a0be', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'blog-details/index.html': {size: 103524, hash: '6dcbeda2d1b5222a672cf877ae6d98138dfa22191f91b360fdf9148ff5a2d683', text: () => import('./assets-chunks/blog-details_index_html.mjs').then(m => m.default)},
    'index.html': {size: 133698, hash: '32380445616247bd13dca61846835a971791d9d129e1c8814c83e4aed3f57fb8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-THLN4C73.css': {size: 385727, hash: 'YI7+dKPbHjM', text: () => import('./assets-chunks/styles-THLN4C73_css.mjs').then(m => m.default)}
  },
};
