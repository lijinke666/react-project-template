/* eslint-disable global-require */
module.exports = {
  plugins: () => [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      browsers: ['last 2 versions'],
      flexbox: 'no-2009',
      grid: true
    }),
  ],
}
