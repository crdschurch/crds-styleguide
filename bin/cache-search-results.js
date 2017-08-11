#!/usr/bin/env node

var fs = require('fs');
var recursive = require('recursive-readdir');
var $ = require('cheerio');

// ------------------------------------------------- | Setup

var CRDS = {};

CRDS.SearchResults = function() {
  this.path = './src';
  this.ignoredFiles = [
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
    'src/examples/*',
    'src/app/app.component.html',
    'src/app/dashboard/dashboard.component.html',
    'src/app/assets/assets.component.html',
    'src/app/assets/logo/logo.component.html',
    'src/app/developers/intro/intro.component.html',
    'src/app/developers/ng2-components/ng2-components.component.html',
    'src/app/layout/header/header.component.html',
    'src/app/layout/footer/footer.component.html',
    'src/app/shared/search/search.component.html'
  ];
  this.ignoredDirs = [
    'layout',
    'shared',
    'jumbotron'
  ];
  this.results = [];
  this.resultsFile = './src/app/shared/search/search-results.ts';
  this.filesToRead = [];
  this.filesRead = [];

  this.init();
  return;
}

// ------------------------------------------------- |

CRDS.SearchResults.prototype.init = function() {
  recursive(this.path, this.ignoredFiles, (err, files) => {
    this.fileLoop(files);
  });
}

CRDS.SearchResults.prototype.fileLoop = function(files) {
  files.forEach((file) => {
    var url = new URL(file);
    if (url.ignored(this.ignoredDirs)) { return; }
    this.filesToRead.push(file);
    this.readFile(file, (err, data) => {
      this.results.push({
        path: url.toFriendlyDDK(),
        name: url.componentName(),
        headings: this.headings(data)
      });
      this.doneReading(file);
    });
  });
}

CRDS.SearchResults.prototype.readFile = function(file, callback) {
  fs.readFile(file, 'utf8', callback);
}

CRDS.SearchResults.prototype.headings = function(text) {
  var headingsList = 'h1, h2, h3, h4, h5, h6';
  var headings = [];
  $(text).find(headingsList).each(function(idx, el) {
    if ($(this).parents('ddk-example').length > 0) { return; }
    headings.push($(this).text().trim());
  });
  return headings;
}

CRDS.SearchResults.prototype.doneReading = function(file) {
  this.filesRead.push(file);
  if (this.filesRead.length == this.filesToRead.length) { this.writeFile() }
}

CRDS.SearchResults.prototype.writeFile = function() {
  var results = this.results.sort(this.sortByName);
  var results = JSON.stringify(results, null, 2).replace(/\"/g, "'");
  var content = 'export const SEARCH_RESULTS = ' + results + ';\n';
  fs.writeFile(this.resultsFile, content, function(err) {});
}

// ------------------------------------------------- | Helpers

// CRDS.SearchResults.prototype.getSegmentFromUrl = function(segment) {
//   switch (segment) {
//     case 'ui-components':
//       return 'ui';
//   }
//   return segment;
// }

CRDS.SearchResults.prototype.sortByName = function(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

// ------------------------------------------------- | URLs

URL = function(url) {
  this.url = url;
  return;
}

URL.prototype.segments = function() {
  return this.url.split('/');
}

URL.prototype.componentName = function() {
  return this.filename().split('.')[0].replace(/\-/g, ' ').titleize();
}

URL.prototype.filename = function() {
  return this.segments()[this.segments().length - 1];
}

URL.prototype.ignored = function(ignoredDirs) {
  var ignored = false
  this.segments().filter((n) => {
    if (ignoredDirs.indexOf(n) !== -1) { ignored = true; }
  });
  return ignored;
}

URL.prototype.toFriendlyDDK = function() {
  return this.segments().slice(2, this.segments().length - 1).join('/');
}

// ------------------------------------------------- | Monkeypatches

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

new CRDS.SearchResults();
