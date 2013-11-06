'use strict';

// Basic template description.
exports.description = 'Create an NPM module.';

// Template-specific notes to be displayed after question prompts.
//exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({type: 'npm'}, [
        // Prompt for these values.
        {
            name: 'name',
            message: 'Name'
        },
        init.prompt('description', 'An awesome module.'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('git_org'),
        init.prompt('git_repo')
    ], function(err, props) {

        // capitalize naem
        props.name_cap = grunt.util._.capitalize(props.name);

        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // Generate package.json file.
        init.writePackageJSON('package.json', {
            name: props.name,
            version: '0.1.0',
            description: props.description,
            main: 'index.js',
            keywords: ['awesome'],
            repository: {
                type: 'git',
                url: 'https://github.com/'+props.git_org+'/'+props.git_repo
            },
            readmeFilename: 'README.md',
            npm_test: './node_modules/.bin/mocha test/ --recursive --reporter spec',
            devDependencies: {
                'chai': '~1.6',
                'mocha': '~1.9'
            },
            author: props.author_name,
            license: 'MIT'
        }, function(pkg, props) {

            // grunt needs custom properties added manually
            pkg.repository = props.repository;

            return pkg;
        });

        // All done!
        done();
    });

};
