const serve = require('webpack-serve');
const config = require('./webpack.config.js');
const argv = {}
const options = { host:'0.0.0.0', config }

serve(argv, options);
