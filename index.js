const standard = require('standard')
const loaderUtils = require('loader-utils')

module.exports = function (source, map) {
  this.cacheable()

  const options = loaderUtils.getOptions(this)
  const standardOptions = Object.assign({}, options, {fix: true})
  const done = this.async()

  standard.lintText(source, standardOptions, (_, response) => {
    done(null, response.results[0].output, map)
  })
}
