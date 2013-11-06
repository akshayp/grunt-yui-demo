'use strict';

module.exports = function (grunt) {
    // load configs
    grunt.loadTasks('conf');

    // load project tasks
    grunt.loadTasks('tasks');

    // load external tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // setup tasks
    grunt.registerTask('assets', ['clean', 'cssproc', 'concat', 'uglify']);
    grunt.registerTask('default', ['jshint']);
};