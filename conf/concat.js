'use strict';

module.exports = function (grunt) {

    grunt.config.set('concat', {
        js: {
            src: ['public/vendor/rainbow/rainbow.js', 'public/vendor/**/*.js'],
            dest: 'build/js/vendor.js'
        },
        css: {
            src: ['public/vendor/**/*.css', 'build/css/*.css'],
            dest: 'build/css/main.css'
        }
    });

};