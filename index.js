const standard = require('standard')
const loaderUtils = require('loader-utils')

module.exports = function (source, map) {
  this.cacheable()

  const done = this.async()
  const options = loaderUtils.getOptions(this)
  const standardOptions = Object.assign({}, options, {fix: true})

  standard.lintText(source, standardOptions, (error, response) => {
    const {messages, output} = response.results[0]

    messages.forEach(message => console.log(message))

    done(error, output, map)
  })
}
