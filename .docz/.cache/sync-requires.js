const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---example-readme-md": hot(preferDefault(require("/Volumes/MyStuffs/reactsax/example/README.md"))),
  "component---readme-md": hot(preferDefault(require("/Volumes/MyStuffs/reactsax/README.md"))),
  "component---src-components-button-button-mdx": hot(preferDefault(require("/Volumes/MyStuffs/reactsax/src/components/Button/Button.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Volumes/MyStuffs/reactsax/.docz/src/pages/404.js")))
}

