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
      '*.css'
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
    var url = '/',
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
  var content = 'export const SEARCH_RESULTS = ' + JSON.stringify(results);
  fs.writeFile(resultsFile, content, function(err) {});
});
