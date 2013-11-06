module.exports = function () {
    'use strict';

    var nav = [
        {
            'key': 'home',
            'description': 'Home',
            'url': '/'
        },
        {
            'key': 'about',
            'description': 'About',
            'url': '/about/'
        },
        {
            'key': 'archives',
            'description': 'Archives',
            'url': '/archives/'
        }
    ];

    console.log(nav);

    return nav;
};