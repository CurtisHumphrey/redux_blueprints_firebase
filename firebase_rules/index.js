const path = require('path')

module.exports = {
  description () {
    return 'generates files for a new set of firebase rules'
  },
  locals: function (options) {
    // Return custom template variables here.
    return {}
  },

  fileMapTokens: function () {
    // Return custom tokens to be replaced in your files
    return {
      __rules__: function (options) {
        // logic to determine value goes here
        return options.settings.getSetting('firebaseRulesPath')
      },
    }
  },

  // Should probably never need to be overriden

  filesPath: function () {
    return path.join(this.path, 'files')
  },

  beforeInstall: function (options) {},
  afterInstall: function (options) {},
}
