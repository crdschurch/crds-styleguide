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

    'rxjs': 'npm:rxjs@5.0.3',
    'typescript': 'npm:typescript@2.0.2/lib/typescript.js',

    // 'kute': 'npm:kute.js@1.6.5/kute.js'
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