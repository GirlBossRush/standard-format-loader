# Standard.js format loader

Converts Webpack JavaScript output to Standard.js format!

# Usage

```javascript
module.exports = {
  rules: [
    // Use the latest JavaScript with Babel.
    { test: /\.js$/, exclude: modulePattern, loader: 'babel-loader' },
    // Catch errors as you develop.
    {
      test: /\.js?$/,
      enforce: 'pre',
      exclude: modulePattern,
      loader: 'standard-loader',
      options: {
        error: false,
        snazzy: true,
        parser: 'babel-eslint'
      }
    },
    // Format the final compiled output.
    {
      test: /\.js$/,
      enforce: 'post',
      exclude: modulePattern,
      loader: 'standard-format-loader',
      options: standardOptions
    }
  ]
}
