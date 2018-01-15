module.exports = {
  description () {
    return 'generates a dumb component, --topic=`subfolder`'
  },

  fileMapTokens: function () {
    // Return custom tokens to be replaced in your files
    return {
      __topic__: function (options) {
        // logic to determine value goes here
        return options.entity.options.topic || 'common'
      },
    }
  },
}
