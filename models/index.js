var mongoose = require('mongoose');
var config = require('../config').config;

mongoose.connect(config.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

// models
exports.Tag = require('./tag');
exports.User = require('./user');
exports.Topic = require('./topic');
exports.TopicTag = require('./topic_tag');
exports.Reply = require('./reply');
exports.TopicCollect = require('./topic_collect');
exports.TagCollect = require('./tag_collect');
exports.Relation = require('./relation');
exports.Message = require('./message');
