'use strict';

module.exports = function (grunt) {

    grunt.config.set('sniff:console', {
        files: {
            src: ['public/js/*.js', 'lib/nav.js']
        }
    });

};