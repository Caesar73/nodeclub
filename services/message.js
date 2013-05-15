var User = require('../proxy').User;
var Message = require('../proxy/message');
var mail = require('./mail');

exports.sendReplyMessage = function (master_id, author_id, topic_id) {
  Message.newAndSave('reply', master_id, author_id, topic_id, function (err, message) {
    // TODO: 异常处理
    User.getUserById(master_id, function (err, master) {
      // TODO: 异常处理
      if (master && master.receive_reply_mail) {
        message.has_read = true;
        message.save();
        Message.getMessageById(message._id, function (err, msg) {
          // TODO: 异常处理
          mail.sendReplyMail(master.email, msg);
        });
      }
    });
  });
};

exports.sendReply2Message = function (master_id, author_id, topic_id) {
  Message.newAndSave('reply2', master_id, author_id, topic_id, function (err, message) {
    // TODO: 异常处理
    User.getUserById(master_id, function (err, master) {
      // TODO: 异常处理
      if (master && master.receive_reply_mail) {
        message.has_read = true;
        message.save();
        Message.getMessageById(message._id, function (err, msg) {
          // TODO: 异常处理
          mail.sendReplyMail(master.email, msg);
        });
      }
    });
  });
};

exports.sendAtMessage = function (master_id, author_id, topic_id, callback) {
  Message.newAndSave('at', master_id, author_id, topic_id, function (err, message) {
    // TODO: 异常处理
    User.getUserById(master_id, function (err, master) {
      // TODO: 异常处理
      if (master && master.receive_at_mail) {
        message.has_read = true;
        message.save();
        Message.getMessageById(message._id, function (err, msg) {
          // TODO: 异常处理
          mail.sendAtMail(master.email, msg);
        });
      }
    });
    callback(err);
  });
};

exports.sendFollowMessage = function (follow_id, author_id, callback) {
  Message.newAndSave('follow', follow_id, author_id, null, callback);
};
