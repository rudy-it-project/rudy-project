
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/rudy-project',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rudy-project"
  },
  {
    "renderMode": 2,
    "route": "/rudy-project/blog-details"
  },
  {
    "renderMode": 2,
    "route": "/rudy-project/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 49684, hash: 'e35e609ab030353a01f45301a52d1c01f3dd0a1328b5e8fa22a7f650b314ea47', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15161, hash: '9549ad2404f2aff341c5ac0f9d314e03490f80b09260d78d6ea95b7bb0c8f955', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 135157, hash: 'd1803b3f72c7ea3f8923658207a7125bd0a98b420d13d31f05562a0e5eb3967e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-details/index.html': {size: 103705, hash: 'acfb383fc9dd0e5eacbea557a3e3a5f2b71110c1d9584faca3ac9e8b7697f9ea', text: () => import('./assets-chunks/blog-details_index_html.mjs').then(m => m.default)},
    'styles-THLN4C73.css': {size: 385727, hash: 'YI7+dKPbHjM', text: () => import('./assets-chunks/styles-THLN4C73_css.mjs').then(m => m.default)}
  },
};
