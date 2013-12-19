
var bestfit = require('../');

var renditions = [
  { width: 2 ,height: 1, id: 0 }
, { width: 3 ,height: 1.5, id: 1 }
, { width: 1 ,height: 0.5, id: 2 }
, { width: 4 ,height: 2, id: 3 }
];

var fn = bestfit(renditions);
console.log(fn(2, 1.5));
