'use strict';

module.exports = function (grunt) {

    grunt.config.set('compass', {
        compass: {
            dist: {
                options: {
                    sassDir: 'public/scss',
                    cssDir: 'public/css',
                    environment: 'production'
                }
            }
        }
    });

};