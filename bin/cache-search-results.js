#!/usr/bin/env node

var fs = require('fs'),
    recursive = require('recursive-readdir'),
    path = './src',
    ignoredFiles = [
      '.DS_Store',
      'index.html',
      '*.scss',
      '*.ts',
      '*.ico',
      '*.ejs',
      '.gitkeep',
      '.npmignore',
      '*.svg',
      '*.css',
      'src/app/app.component.html',
      'src/app/dashboard/dashboard.component.html',
      'src/app/assets/assets.component.html',
      'src/app/assets/logo/logo.component.html',
      'src/app/developers/intro/intro.component.html',
      'src/app/developers/ng2-components/ng2-components.component.html',
      'src/app/layout/header/header.component.html',
      'src/app/layout/footer/footer.component.html',
      'src/app/shared/search/search.component.html'
    ],
    ignoredDirs = [
      'layout',
      'shared'
    ],
    results = [],
    resultsFile = './src/app/shared/search/search-results.ts';

function getSegmentFromUrl(segment) {
  switch (segment) {
    case 'ui-components':
      return 'ui';
  }
  return segment;
}

function sortByName(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.titleize = function() {
  var string_array = this.split(' ');
  string_array = string_array.map(function(str) {
    return str.capitalize();
  });
  return string_array.join(' ');
};

// HTML Files
recursive(path, ignoredFiles, function(err, files) {
  files.forEach(function(file) {
    var validComponent = true,
        url = '/',
        urlSegments = file.split('/'),
        component = urlSegments[urlSegments.length - 1].split('.')[0].replace(/\-/g, ' ').titleize();
    urlSegments.forEach(function(segment, idx) {
      if (idx > 1 && idx + 1 != urlSegments.length) {
        url += getSegmentFromUrl(segment) + '/';
      }
    });
    results.push({
      url: url,
      name: component
    });
  });
  results = results.sort(sortByName);
  var content = 'export const SEARCH_RESULTS = ' + JSON.stringify(results);
  fs.writeFile(resultsFile, content, function(err) {});
});
