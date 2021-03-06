/*jshint node:true*/
/* global require, module */
const fs = require('fs');

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  if (app.env === 'test') {
    // Load ember-template-compiler for testing with Ember version <= 1.12;
    const compilerPath = app.bowerDirectory + '/ember/ember-template-compiler.js';

    if (fs.statSync(compilerPath).isFile()) {
      app.import(compilerPath);
    }
  }

  return app.toTree();
};
