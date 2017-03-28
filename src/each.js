export function each(node, {
  op = 'val'
}, ...args) {
  var each = node.map();
  return node[op].apply(each, ...args)
}

export function addEach({
  chain
}) {
  chain.each = function ({
    op
  }, ...args) {
    return each(this, {
      op
    }, ...args)
  }
  return chain
}