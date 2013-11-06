'use strict';

module.exports = function (grunt) {

    grunt.config.set('watch', {
        compass: {
            files: ['public/scss/**/*.scss'],
            tasks: ['compass']
        }
    });

};