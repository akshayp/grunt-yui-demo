module.exports = function (grunt) {

    grunt.config.set('cssproc', {
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
        }
    });

};