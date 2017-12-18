System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  //map tells the System loader where to look for things
  map: {

    'app': '.',

    '@angular/core': 'npm:@angular/core@4.4.5/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common@4.4.5/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@4.4.5/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@4.4.5/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.4.5/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http@4.4.5/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router@4.4.5/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms@4.4.5/bundles/forms.umd.js',

    '@angular/core/testing': 'npm:@angular/core@4.4.5/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common@4.4.5/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler@4.4.5/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser@4.4.5/bundles/platform-browser-testing.umd.js',
    '@angular/animations': 'npm:@angular/animations@4.4.5/bundles/animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations@4.4.5/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser@4.4.5/bundles/platform-browser-animations.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic@4.4.5/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http@4.4.5/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router@4.4.5/bundles/router-testing.umd.js',

    'rxjs': 'npm:rxjs',
    'typescript': 'npm:typescript@2.0.2/lib/typescript.js',
    // '@swimlane/ngx-charts': 'npm:@swimlane/ngx-charts@7.0.1',
    '@swimlane/ngx-charts': 'npm:@swimlane/ngx-charts@5.3.1',

    'd3-array': 'npm:d3-array',
    'd3-brush': 'npm:d3-brush',
    'd3-shape': 'npm:d3-shape',
    'd3-selection': 'npm:d3-selection',
    'd3-color': 'npm:d3-color',
    'd3-drag': 'npm:d3-drag',
    'd3-transition': 'npm:d3-transition',
    'd3-format': 'npm:d3-format',
    'd3-force': 'npm:d3-force',
    'd3-dispatch': 'npm:d3-dispatch',
    'd3-path': 'npm:d3-path',
    'd3-ease': 'npm:d3-ease',
    'd3-timer': 'npm:d3-timer',
    'd3-quadtree': 'npm:d3-quadtree',
    'd3-interpolate': 'npm:d3-interpolate',
    'd3-scale': 'npm:d3-scale',
    'd3-time': 'npm:d3-time',
    'd3-collection': 'npm:d3-collection',
    'd3-time-format': 'npm:d3-time-format',
    'd3-hierarchy': 'npm:d3-hierarchy'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});