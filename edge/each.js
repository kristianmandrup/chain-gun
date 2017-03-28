'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.each = each;
exports.addEach = addEach;
function each(node, _ref) {
  var _node$op;

  var _ref$op = _ref.op,
      op = _ref$op === undefined ? 'val' : _ref$op;

  var each = node.map();

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return (_node$op = node[op]).apply.apply(_node$op, [each].concat(args));
}

function addEach(_ref2) {
  var chain = _ref2.chain;

  chain.each = function (_ref3) {
    var op = _ref3.op;

    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return each.apply(undefined, [this, {
      op: op
    }].concat(args));
  };
  return chain;
}
//# sourceMappingURL=each.js.map
