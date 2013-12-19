'use strict';
/*jshint asi: true */

var test = require('tape')
  , bestfit = require('../')

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

function check(t, fn, width, height, id) {
  var result = fn(width, height);
  t.equal(result.id, id, 'asking for best fit for ' + width + 'x' + height + ' returns rendition ' + result.width + 'x' + result.height)
}


test('\nsimple cases same aspect ratio', function (t) {
  
  var renditions = [
    { width: 2 ,height: 1, id: 0 }
  , { width: 3 ,height: 1.5, id: 1 }
  , { width: 1 ,height: 0.5, id: 2 }
  , { width: 4 ,height: 2, id: 3 }
  ];

  var fn = bestfit(renditions);

  [  { w: 2 ,  h: 1   ,  id: 0 }
  ,  { w: 1 ,  h: 1   ,  id: 0 }
  ,  { w: 3 ,  h: 1.4 ,  id: 1 }
  ,  { w: 3 ,  h: 1.6 ,  id: 3 }
  ,  { w: 3 ,  h: 2   ,  id: 3 }
  ,  { w: 4 ,  h: 2   ,  id: 3 }
  ,  { w: 5 ,  h: 3   ,  id: 3 }
  ].forEach(function (x) { check(t, fn, x.w, x.h, x.id) })

  t.end();
})

test('\ncloser cases same aspect ratio', function (t) {
  
  var renditions = [
    { width: 4 ,height: 2, id: 0 }
  , { width: 2.5 ,height: 1.25, id: 1 }
  , { width: 3 ,height: 1.5, id: 2 }
  , { width: 1 ,height: 0.5, id: 3 }
  , { width: 100, height: 50, id: 4 }
  ];

  var fn = bestfit(renditions);

  [  { w: 3 ,  h: 2.1 ,  id: 4 }
  ,  { w: 3 ,  h: 2   ,  id: 0 }
  ,  { w: 2.9, h: 1.6 ,  id: 0 }
  ,  { w: 2.9, h: 1.5 ,  id: 2 }
  ].forEach(function (x) { check(t, fn, x.w, x.h, x.id) })

  t.end();
})
