'use strict';

var xtend = require('xtend');

function closest(xs, betterFn) {
  var best = null;
  var prod;

  for (var i = 0; i < xs.length; i++) {
    var rend = xs[i];
    prod = rend.widthPercentage * rend.heightPercentage;
    if (!best) { 
      best = { rendition: rend, prod: prod };
    } else {
      if (betterFn(best.prod, prod)) best = { rendition: rend, prod: prod };
    }
  }
  return best.rendition;
}
function closestLarger(xs) { 
  return closest(xs, function (a, b) { return a > b } );
}

function closestSmaller(xs) { 
  return closest(xs, function (a, b) { return a < b } );
}

function percentage(required, available) {
  return (available >= required) ? available/required : available/required;
}

var go = module.exports = 

/**
 * Finds image rendition that best fits a given container preferring images that are too large 
 * over images that are too small.
 *
 * ##### Note: all renditions are assumed to have the same aspect ratio
 *
 * @name bestfit
 * @function
 * @param {Array.<Object>} renditions available image renditions each having a width and height property
 * @return {Function(Number, Number)} when called with available width and height it returns the best fitting rendition
 */
function bestfit(renditions) {
  return function (width, height) {

    function attachPercent(r) {
      var wp = percentage(width, r.width); 
      var hp = percentage(height, r.height);
      return xtend(r, { widthPercentage: wp, heightPercentage: hp });
    }

    var perc = renditions.map(attachPercent);
    var larger = perc.filter(function (x) { return x.widthPercentage >= 1 && x.heightPercentage >= 1 });
    var smaller = perc.filter(function (x) { return x.widthPercentage < 1 || x.heightPercentage < 1 });

    return larger.length ? closestLarger(larger) : closestSmaller(smaller);
  }
};
