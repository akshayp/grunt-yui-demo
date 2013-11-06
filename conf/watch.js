module.exports = function (grunt) {

    grunt.config.set('watch', {
        watch: {
            compass: {
                files: ['public/scss/**/*.scss'],
                tasks: ['compass']
            }
        }
    });

};