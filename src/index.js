'use strict';

var donaldTrump = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var answer, access_token, T, covfefedText, result, userInfo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        log(_chalk2.default.cyan(_figlet2.default.textSync('covfefe', { horizontalLayout: 'full' })));
                        _context.next = 3;
                        return isNewLogin();

                    case 3:
                        if (!_context.sent) {
                            _context.next = 9;
                            break;
                        }

                        _context.next = 6;
                        return (0, _tokenExist2.default)();

                    case 6:
                        _context.t0 = _context.sent;
                        _context.next = 12;
                        break;

                    case 9:
                        _context.next = 11;
                        return (0, _newtoken2.default)();

                    case 11:
                        _context.t0 = _context.sent;

                    case 12:
                        answer = _context.t0;
                        _context.next = 15;
                        return _fsExtra2.default.readJson('./data.json');

                    case 15:
                        access_token = _context.sent;
                        _context.prev = 16;
                        _context.next = 19;
                        return (0, _twit2.default)(access_token);

                    case 19:
                        T = _context.sent;
                        covfefedText = (0, _covfefe2.default)(answer.status);
                        _context.next = 23;
                        return T.post('statuses/update', { status: covfefedText });

                    case 23:
                        result = _context.sent;
                        userInfo = result.data.user;


                        log(_chalk2.default.bold("\nJust sent the tweet!  ") + _chalk2.default.cyan(userInfo.name + ': "' + result.data.text + '"'));
                        log(_chalk2.default.gray('https://twitter.com/' + userInfo.screen_name + '/status/' + result.data.id_str));
                        process.exit(0);
                        _context.next = 34;
                        break;

                    case 30:
                        _context.prev = 30;
                        _context.t1 = _context['catch'](16);

                        console.error("Failed to update your status: ", _context.t1);
                        process.exit(0);

                    case 34:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[16, 30]]);
    }));

    return function donaldTrump() {
        return _ref.apply(this, arguments);
    };
}();

var _covfefe = require('covfefe');

var _covfefe2 = _interopRequireDefault(_covfefe);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _tokenExist = require('./lib/tokenExist');

var _tokenExist2 = _interopRequireDefault(_tokenExist);

var _newtoken = require('./lib/newtoken');

var _newtoken2 = _interopRequireDefault(_newtoken);

var _twit = require('./lib/twit');

var _twit2 = _interopRequireDefault(_twit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var log = console.log;
var isNewLogin = function isNewLogin() {
    return _fsExtra2.default.pathExists('./data.json');
};

donaldTrump();