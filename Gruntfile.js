'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', '{conf,public}/**/*.js', '!public/vendor/**/*.js', '!public/js/vendor.js']
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'public/img/upload',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/img/upload'
                }]
            }
        },
        concat: {
            js: {
                src: ['public/vendor/rainbow/rainbow.js', 'public/vendor/**/*.js'],
                dest: 'public/js/vendor.js'
            },
            css: {
                src: ['public/vendor/**/*.css'],
                dest: 'public/css/vendor.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'public/js/vendor.js': ['public/js/vendor.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('assets', ['concat', 'uglify']);
    grunt.registerTask('default', ['jshint']);
};