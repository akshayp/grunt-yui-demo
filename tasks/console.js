/*jslint node:true nomen:true */
'use strict';

var esprima = require('esprima');

// simple recursion
function traverse(object, callback) {
    var key,
        child;

    callback.call(null, object);
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            child = object[key];
            if (typeof child === 'object' && child !== null) {
                traverse(child, callback);
            }
        }
    }
}

function getValue(obj, path) {
    if (!obj) {
        return undefined;
    }

    var i,
        l = path.length;

    for (i = 0; obj !== undefined && i < l; i += 1) {
        obj = obj[path[i]];
    }

    return obj;
}

module.exports = function (grunt) {

    grunt.registerMultiTask('sniff:console', 'ensure console object is not used', function () {

        var files = this.files[0].src,
            results = {};

        files.forEach(function (file, index, list) {
            var content = grunt.file.read(file),
                // parse through esprima
                syntax = esprima.parse(content, { tolerant: true, loc: true, range: true, tokens: true });

            traverse(syntax, function parseNode(node) {
                if (node.type === 'ExpressionStatement') {
                    if (getValue(node, ['expression', 'callee', 'object', 'name']) === 'console') {
                        if (!results[file]) {
                            results[file] = [];
                        }

                        // extract code from file
                        var code = content.substring(node.range[0], node.range[1]);

                        results[file].push({ node: node, code: code});
                    }
                }
            });
        });

        // output results
        Object.keys(results).forEach(function (item) {
            grunt.log.writeln();
            grunt.log.writeln(item);
            results[item].forEach(function (meta, index) {
                grunt.log.writeln('  #' + (index + 1) + ' ' + meta.code + ' // Line ' + meta.node.loc.start.line + ', Pos ' + meta.node.loc.start.column);
            });
        });
    });
};
