# bestfit [![build status](https://secure.travis-ci.org/thlorenz/bestfit.png)](http://travis-ci.org/thlorenz/bestfit)

Finds image rendition that best fits a given container.

```js
var bestfit = require('bestfit');

var renditions = [
  { width: 2 ,height: 1, id: 0 }
, { width: 3 ,height: 1.5, id: 1 }
, { width: 1 ,height: 0.5, id: 2 }
, { width: 4 ,height: 2, id: 3 }
];

var fn = bestfit(renditions);
fn(2, 1.5);
```

#### Output

```
{ width: 3,
  height: 1.5,
  id: 1,
  widthPercentage: 1.5,
  heightPercentage: 1 }
```

## Installation

    npm install bestfit

## API


## License

MIT
