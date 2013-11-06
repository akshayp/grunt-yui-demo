'use strict';

module.exports = function (grunt) {

    grunt.config.set('handlebars', {
        compile: {
            options: {
                namespace: 'JST'
            },
            files: {
                'public/js/templates.js': ['templates/*.hbs']
            }
        }
    });

};