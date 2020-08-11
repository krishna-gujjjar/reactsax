// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---example-readme-md": () => import("./../../../example/README.md" /* webpackChunkName: "component---example-readme-md" */),
  "component---readme-md": () => import("./../../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-components-button-button-mdx": () => import("./../../../src/components/Button/Button.mdx" /* webpackChunkName: "component---src-components-button-button-mdx" */),
  "component---src-pages-404-js": () => import("./../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

