
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
    'index.csr.html': {size: 49672, hash: '4f38e62304ea91c427c7d6bdac9f665c976ebe26427f57d955236e891e047f56', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15149, hash: '5aef31cee9c1051f32f6c1daad931e979c28df0a88ef810f335320f49bde8697', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'blog-details/index.html': {size: 103524, hash: '6c5413fa0ff9fc28074fa1e200056ee091f17135100bd942d87ff4ce43da05e1', text: () => import('./assets-chunks/blog-details_index_html.mjs').then(m => m.default)},
    'index.html': {size: 135132, hash: '63a6ba53c8730b677633a3d41a1ea143bf9027e5ceb3f858f0a93a11f4628642', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-THLN4C73.css': {size: 385727, hash: 'YI7+dKPbHjM', text: () => import('./assets-chunks/styles-THLN4C73_css.mjs').then(m => m.default)}
  },
};
