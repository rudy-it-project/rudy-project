
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/browser"
  },
  {
    "renderMode": 2,
    "route": "/browser/blog-details"
  },
  {
    "renderMode": 2,
    "route": "/browser/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 49680, hash: '21a9b2e05470a183a1b1e89ac75471dc99675ce6d97e44511191ebb15aced5fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15157, hash: '92b334ddae6d70cb7b3e22526ae082140b0e3b0edfeeef95bbdac9a6f6aa7425', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 135143, hash: '5f01f54b9669a78f0d45a2b0ce75c71298bd2d7fef69027a65527c0d0dd4b91b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-details/index.html': {size: 103636, hash: '96fa2f6f8947eadfe3ed3f9197d34dffcfb312305a524b61ac76352b336fdc7e', text: () => import('./assets-chunks/blog-details_index_html.mjs').then(m => m.default)},
    'styles-THLN4C73.css': {size: 385727, hash: 'YI7+dKPbHjM', text: () => import('./assets-chunks/styles-THLN4C73_css.mjs').then(m => m.default)}
  },
};
