var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', //Regular script pack: not regular package for webpack, so we need to use script
    //loader npm module to properly handle it.
    'script!foundation-sites/dist/foundation.min.js', // this is loaded first before the app.jsx is loaded
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery' // key is the module name, and value is the variable name that we want it to be available in our externals script file
  },
  plugins:[ // give us a shortcut
    new webpack.ProvidePlugin({
      // object specify key: var name to watch for, val: module to replace it with
      '$': 'jquery', // when we see dollar sign we want to use the jQuery module
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main:'app/components/Main.jsx',
      Nav:'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Example: 'app/components/Example.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage:'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles:'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
