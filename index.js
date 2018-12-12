const fs = require('fs')
const postcss = require('postcss')
const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')


const post = postcss([
  postcssPresetEnv({
    autoprefixer: { flexbox: 'no-2009' },
  }),
  cssnano(),
])

async function build() {
  const css = fs.readFileSync('tachyons-extra.css', 'utf8')
  const result = await post.process(css)
  fs.writeFileSync('tachyons-extra.min.css', result.css)
}

build()
