#!/usr/bin/env node

var fs = require('fs'),
    recursive = require('recursive-readdir'),
    path = './src',
    htmlIgnore = [
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
    tsIgnore = [
      '.DS_Store',
      '*.html',
      '*.scss',
      '*.ico',
      '*.ejs',
      '*.gitkeep',
      '*.npmignore',
      '*.svg',
      '*.css'
    ],
    results = [],
    resultsFile = './src/search-results.json';

function getSegmentFromUrl(segment) {
  switch (segment) {
    case 'ui-components':
      return 'ui';
  }
  return segment;
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.titleize = function() {
  var string_array = this.split(' ');
  string_array = string_array.map(function(str) {
    return str.capitalize();
  });
  return string_array.join(' ');
}

// HTML Files
recursive(path, htmlIgnore, function(err, files) {
  files.forEach(function(file) {
    var url = '',
        urlSegments = file.split('/'),
        component = urlSegments[urlSegments.length - 1].split('.')[0].replace(/\-/, ' ').titleize();
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
  fs.writeFile(resultsFile, JSON.stringify(results), function(err) {});
});

// Route Files
// recursive(path, tsIgnore, function(err, files) {
//   files.forEach(function(file) {
//     if (file.includes('routing.module.ts')) {
//       // console.log(file);
//       fs.readFile(file, 'utf8', function(err, data) {
//         // var content = data.match(/Routes[\ ]+?\=[\ ]+?\[(.*)\]\;/);
//         // var content = data.match(/Routes/);
//         var startChar = data.search(/Routes\ =\ \[/),
//             endChar = data.search(/\n\]\;/) + 3,
//             routes = data.substr(startChar, endChar - startChar);
//         console.log(eval(routes));
//       });
//     }
//   });
// });
