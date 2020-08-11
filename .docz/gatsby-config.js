const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Reactsax',
    description: 'Vuesax For Reacters',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Volumes/MyStuffs/reactsax/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Reactsax',
        description: 'Vuesax For Reacters',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Volumes/MyStuffs/reactsax',
          templates:
            '/Volumes/MyStuffs/reactsax/node_modules/docz-core/dist/templates',
          docz: '/Volumes/MyStuffs/reactsax/.docz',
          cache: '/Volumes/MyStuffs/reactsax/.docz/.cache',
          app: '/Volumes/MyStuffs/reactsax/.docz/app',
          appPackageJson: '/Volumes/MyStuffs/reactsax/package.json',
          appTsConfig: '/Volumes/MyStuffs/reactsax/tsconfig.json',
          gatsbyConfig: '/Volumes/MyStuffs/reactsax/gatsby-config.js',
          gatsbyBrowser: '/Volumes/MyStuffs/reactsax/gatsby-browser.js',
          gatsbyNode: '/Volumes/MyStuffs/reactsax/gatsby-node.js',
          gatsbySSR: '/Volumes/MyStuffs/reactsax/gatsby-ssr.js',
          importsJs: '/Volumes/MyStuffs/reactsax/.docz/app/imports.js',
          rootJs: '/Volumes/MyStuffs/reactsax/.docz/app/root.jsx',
          indexJs: '/Volumes/MyStuffs/reactsax/.docz/app/index.jsx',
          indexHtml: '/Volumes/MyStuffs/reactsax/.docz/app/index.html',
          db: '/Volumes/MyStuffs/reactsax/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
