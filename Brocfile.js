var merge = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');

var appCss = compileSass(['styles', 'bower_components'], 'style.scss', 'style.css');

module.exports = merge(['public', 'bower_components', appCss]);
