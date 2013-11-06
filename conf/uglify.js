'use strict';

module.exports = function (grunt) {

    grunt.config.set('uglify', {
        uglify: {
            js: {
                files: {
                    'build/js/vendor.js': ['public/js/vendor.js']
                }
            }
        }
    });

};