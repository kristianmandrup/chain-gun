# Chaingun

![Chaingun](https://github.com/kristianmandrup/gun-edge/tree/master/chaingun.png)

Common [Gun.js](http://gun.js.org/) chain extensions and utility functions.

## Install

`npm i -S chaingun`

## Use

Assuming Babel or similar transpiler setup (2017)

To add all chain methods:

```js
import Gun from 'gun/gun'
import chain from 'chaingun'
chain(Gun)
```

To control which chain methods to add:

```js
import {
  add
} from 'chaingun'
add(Gun, 'date', 'fields')
```

Import individual chain modules

```js
import {
  print,
  addPrint
} from 'watergun/dist/print'
addInspect(Gun.chain)
```

### Require (Node.js)

Using `require`

```js
const Gun = require('gun/gun')
require('watergun')(Gun)
```

## API extensions

- `each`
- `count`


### each

Map and iterate over every value (`val`) of a node.
Second argument `op` is optional but can be used to override the default map operation `val`

`each(node, {op}, ...args)` or `node.each({op}, ...args)`

Examples:

```js
node.each({op: 'value'})
```

```js
node.each({op: 'value'}, (data) => console.log(data))
```

### count

Create a [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) counter

`count(numFun)` or `node.count(numFun)`

### date

Add a date field to a Gun node

`date(dateValue)` or `node.date(dateValue)`

```js
node.date(new Date())
```

### local

Store locally only (ie. no peer sync)

`local(data, cb, opt)`

### no

`no(cb)`

### value

Retrieve the node value (without `_` metadata)

`value(cb, opt)` or `node.value()`

### valueAt

Retrieve value at the given `path` (no metadata)
Shorthand for `node.path('my/path').value(cb)`

`valueAt(node, path, cb, opt)` or `node.valueAt(path, cb)`

### valAt

Retrieve value at the given `path` (including `_` metadata).
Shorthand for `node.path('my/path').val(cb)`

`valAt(node, path, cb, opt)` or `node.valAt(path, cb)`

### setAt

`set` value at the given `path`. Shorthand for `node.path('my/path').set(value)`

`setAt(node, path, cb, opt)` or `node.setAt(path, cb, opt)`

### putAt

`put` value at the given `path`, shorthand for `node.path('my/path').set(value)`

`.putAt(path, cb, opt)`

###
`localFields()` - get list of *local* field names (keys) in the bucket

### fields

Retrieve the names of all fields of the node value (ie. Object keys)

`node.fields(cb)` or `fields(node, cb)`

### soul

`soul()` retrieve the soul (ID) of the node

### print

`print(label)` - print value to console (no meta). Note: You can set `Gun.log`, by default: `console.log`

### Useful internal Gun functions

`Gun.obj.copy(val)` - copy a value
`Gun.obj.map(data, function(val, field){ ... }` - map over a node
`Gun.fn.is` - check if something is a function
`Gun.text.random()` - generate random text
`Gun.is.node.soul(data)` - test if data has a soul (ie. is a Gun node)
`Gun.node.soul(data)` - return id of Gun node

Please add more internal Gun functions to this list for reference ;)

## Useful chain methods

`node.back()` - go one level back/up in the graph

## Contributing

Install dependency modules/packages

`npm i`

### Compile/Build

The project includes a `gulpfile` configured to use Babel 6.
All `/src` files are compiled to `/dist` including source maps.

Scripts:

- start: `npm start`
- build: `npm run build` (ie. compile)
- watch and start: `npm run watch`
- watch and build: `npm run watch:b`

### Run Tests

`npm test` or simply `ava test`

## License

MIT Kristian Mandrup