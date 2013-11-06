'use strict';

module.exports = function (grunt) {

    grunt.config.set('imagemin', {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'public/img',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'build/img/'
            }]
        }
    });

};