# scape4me
a html entity escaping module for npm registry providing utility methods to `escape` and `unescape` HTML entities

## Installation
``` shell
  npm install scape4me --save
```
## Usage

```js
  var scape4me = require('scape4me')
      escape = scape4me.escape,
      unescape = scape4me.unescape;

  var html = '<h1>Hello World</h1>',
      escaped = escape(html),
      unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);
```

## Tests

  npm test

## Contributing
	imranMH

## Release History

* 0.1.1 Initial release
