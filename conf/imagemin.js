'use strict';

module.exports = function (grunt) {

    grunt.config.set('imagemin', {
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'public/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img/'
                }]
            }
        }
    });

};