module.exports = function (grunt) {

    grunt.config.set('jshint', {
        options: {
            jshintrc: '.jshintrc'
        },
        all: ['Gruntfile.js', '{lib,public}/**/*.js', '!public/vendor/**/*.js', '!public/js/**/*.js']
    });

};