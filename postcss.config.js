const path = require('path')

module.exports = {
  plugins: {
    'postcss-import': {
      path: [path.resolve(__dirname, 'src/assets/css')]
    },
    'postcss-for': {},
    'postcss-each': {},
    'postcss-conditionals': {},
    'postcss-cssnext': {
      autoprefixer: false,
      warnForDuplicates: false
    },
    autoprefixer: {
      browsers: [
        '>1%',
        'last 4 versions',
        'ie > 10'
      ]
    }
  }
}
