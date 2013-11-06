module.exports = function (grunt) {

    grunt.config.set('handlebars', {
        handlebars: {
            compile: {
                options: {
                    namespace: 'JST'
                },
                files: {
                    'public/js/templates.js': ['templates/*.hbs']
                }
            }
        }
    });

};