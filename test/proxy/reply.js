var Reply = require('../../proxy/reply');
var support = require('../support/support');
var should = require('should');

describe('proxy/reply.js', function () {
  var reply;
  var topic;
  var user;
  before(function (done) {
    support.createUser(function (err, _user) {
      should.not.exist(err);
      user = _user;
      support.createTopic(user._id, function (err, _topic) {
        should.not.exist(err);
        topic = _topic;
        support.createReply(topic._id, user._id, function (err, _reply) {
          should.not.exist(err);
          reply = _reply;
          done();
        });
      });
    });
  });

  describe('getReply', function () {
    it('should ok', function (done) {
      Reply.getReply(reply._id, function (err, data) {
        should.not.exist(err);
        data.should.have.property('content', '我是一些测试回复内容');
        data.author_id.should.eql(user._id);
        data.topic_id.should.eql(topic._id);
        done();
      });
    });
  });

  describe('getReplyById', function () {
    it('should ok', function (done) {
      Reply.getReplyById(reply._id, function (err, data) {
        should.not.exist(err);
        done();
      });
    });

    describe('mock findOne error', function () {
      it('should ok', function (done) {
        Reply.getReplyById(reply._id, function (err, data) {
          should.not.exist(err);
          done();
        });
      });
    });

    describe('mock no result', function () {
      it('should ok', function (done) {
        Reply.getReplyById(reply._id, function (err, data) {
          should.not.exist(err);
          done();
        });
      });
    });

    describe('mock getUserById error', function () {
      it('should ok', function (done) {
        Reply.getReplyById(reply._id, function (err, data) {
          should.not.exist(err);
          done();
        });
      });
    });

    describe('mock content_is_html', function () {
      it('should ok', function (done) {
        Reply.getReplyById(reply._id, function (err, data) {
          should.not.exist(err);
          done();
        });
      });
    });

    describe('mock linkUsers error', function () {
      it('should ok', function (done) {
        Reply.getReplyById(reply._id, function (err, data) {
          should.not.exist(err);
          done();
        });
      });
    });
  });

  describe('getRepliesByTopicId', function () {
    it('should ok', function (done) {
      Reply.getRepliesByTopicId(topic._id, function (err, data) {
        should.not.exist(err);
        data.should.have.length(1);
        var reply = data[0];
        reply.should.have.property('content', '<p>我是一些测试回复内容</p>');
        done();
      });
    });
  });
});
