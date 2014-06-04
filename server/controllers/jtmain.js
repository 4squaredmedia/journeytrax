'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Journey = mongoose.model('Journey'),
    _ = require('lodash');


/**
 * Find article by id
 */
exports.journey= function(req, res, next, id) {
    Journey.load(id, function(err, article) {
        if (err) return next(err);
        if (!journey) return next(new Error('Failed to load journey plan ' + id));
        req.journey = journey;
        next();
    });
};

/**
 * Create an article
 */
exports.create = function(req, res) {
    var journey = new Journey(req.body);
    journey.user = req.user;

    journey.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: journey
            });
        } else {
            res.jsonp(journey);
        }
    });
};

/**
 * Update an article
 */
exports.update = function(req, res) {
    var article = req.article;

    article = _.extend(article, req.body);

    article.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var article = req.article;

    article.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.article);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Article.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(articles);
        }
    });
};
