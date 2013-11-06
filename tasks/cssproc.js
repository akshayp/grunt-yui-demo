/*
 * grunt-cssproc
 *
 *
 * Copyright (c) 2013 Yahoo!
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function (grunt) {
  var cssproc = require('cssproc'),
      path = require('path');

  grunt.registerMultiTask('cssproc', 'Replace asset paths in CSS using cssproc.', function () {
    var options = this.options({
      root: process.cwd(),
      base: 'http://l.yimg.com/os/mit/'
    });

    this.files.forEach(function (file) {
      var source = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      })
      .map(grunt.file.read)
      .join(grunt.util.normalizelf(grunt.util.linefeed));

      var proc = procCSS(source, {
        root: options.root,
        path: file,
        base: options.base
      });

      if (proc && proc.length < 1) {
        grunt.log.warn('Destination not written because CSS was empty.');
        return;
      }

      // Write the destination file.
      grunt.file.write(file.dest, proc);
      grunt.log.writeln('File ' + file.dest + ' created.');
    });
  });

  var procCSS = function (source, options) {

    try {
      cssproc.parse(options, source, function (err, data) {
        if (err) {
          throw err;
        } else if (source !== data) {
          source = data;
        }
      });
    } catch (e) {
      grunt.log.error(e);
      grunt.fail.warn('cssproc failed.');
    }

    return source;

  };
};