# bestfit [![build status](https://secure.travis-ci.org/CondeNast/bestfit.png)](http://travis-ci.org/CondeNast/bestfit)

[![testling badge](https://ci.testling.com/CondeNast/bestfit.png)](https://ci.testling.com/CondeNast/bestfit)

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

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="bestfit"><span class="type-signature"></span>bestfit<span class="signature">(renditions)</span><span class="type-signature"> &rarr; {function}</span></h4>
</dt>
<dd>
<div class="description">
<p>Finds image rendition that best fits a given container preferring images that are too large
over images that are too small.</p>
<h5>Note: all renditions are assumed to have the same aspect ratio</h5>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>renditions</code></td>
<td class="type">
<span class="param-type">Array.&lt;Object></span>
</td>
<td class="description last"><p>available image renditions each having a width and height property</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/CondeNast/bestfit/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/CondeNast/bestfit/blob/master/index.js#L34">lineno 34</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>when called with available width and height it returns the best fitting rendition</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">function</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT
