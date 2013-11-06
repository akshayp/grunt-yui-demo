'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', '{conf,public}/**/*.js', '!public/vendor/**/*.js', '!public/js/**/*.js']
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'public/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img/'
                }]
            }
        },
        concat: {
            js: {
                src: ['public/vendor/rainbow/rainbow.js', 'public/vendor/**/*.js'],
                dest: 'build/js/vendor.js'
            },
            css: {
                src: ['public/vendor/**/*.css', 'build/css/*.css'],
                dest: 'build/css/main.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'build/js/vendor.js': ['public/js/vendor.js']
                }
            }
        },
        cssproc: {
            default_options: {
                options: {
                    root: __dirname,
                    base: 'http://mycdn.com/'
                },
                files: {
                    'build/css/main.css': ['public/css/main.css'],
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: 'JST'
                },
                files: {
                    'public/js/templates.js': ['templates/*.hbs']
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'public/scss',
                    cssDir: 'public/css',
                    environment: 'production'
                }
            }
        },
        watch: {
            compass: {
                files: ['public/scss/**/*.scss'],
                tasks: ['compass']
            }
        },
        clean: ['build']
    });

    // load project tasks
    grunt.loadTasks('tasks');

    // load external tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // setup tasks
    grunt.registerTask('assets', ['clean', 'cssproc', 'concat', 'uglify']);
    grunt.registerTask('default', ['jshint']);
};