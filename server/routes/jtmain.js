'use strict';

// The Package is past automatically as first parameter
module.exports = function(Jtmain, app, auth, database) {

    app.get('/jtmain/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/jtmain/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/jtmain/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/jtmain/example/render', function(req, res, next) {
        Jtmain.render('index', {
            package: 'jtmain'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
