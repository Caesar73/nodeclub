var message = require('../../services/message');

describe('services/message.js', function () {

  before(function (done) {
    done();
  });

  xdescribe('sendReplyMessage', function () {
    it('should ok', function () {
      message.sendReplyMessage('shyvo1987@gmail.com', 'token', 'jacksontian');
    });
  });

  xdescribe('sendReply2Message', function () {
    it('should ok', function () {
      message.sendReply2Message('shyvo1987@gmail.com', 'token', 'jacksontian');
    });
  });

  xdescribe('sendAtMessage', function () {
    it('should ok', function () {
      message.sendAtMessage();
    });
  });

  xdescribe('sendFollowMessage', function () {
    it('should ok', function () {
      message.sendFollowMessage();
    });
  });
});
