var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({
  entryPatterns: [
    'spec-bundle.js',
    'src/**/*spec.js'
  ],

  module: {
    loaders: [
      {test: /\.css$/, loader: 'raw-loader'},
      {test: /\.html$/, loader: 'raw-loader'}
    ]
  }
});

module.exports = function (w) {

  return {
    files: [
      {pattern: 'spec-bundle.js', load: false},
      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'src/**/*.css', load: false},
      {pattern: 'src/**/*.html', load: false},
      {pattern: 'src/**/*spec.ts', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*spec.ts', load: false},
      {pattern: 'test/**/*spec.ts', load: false}
    ],

    testFramework: "jasmine",

    compilers: {
      '**/*.ts': w.compilers.typeScript({
        emitDecoratorMetadata: true,
        experimentalDecorators: true
      })
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};