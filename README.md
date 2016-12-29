# Browser.js

Browser.js Helps to write conditional CSS _and/or_ JavaScript based on web browsers.
[Check the Demo](http://juandresyn.com/apps/browser/)

### EXAMPLES

Browser.js inserts CSS classes into the `<html>` element.

#### Chrome

``` html
  <html class="chrome js-chrome"></html>
``` 

#### Safari


``` html
  <html class="safari js-safari"></html>
``` 

#### Firefox


``` html
  <html class="firefox js-firefox"></html>
``` 

#### Opera


``` html
  <html class="opera js-opera"></html>
``` 

#### IE


``` html
  <html class="ie js-ie"></html>
``` 

#### Edge


``` html
  <html class="edge js-edge"></html>
``` 

###  BROWSERS

* Safari
* Chrome
* Firefox
* Opera
* IE
* Edge

### USAGE

Just include the script. in window.load  the `<html>` tag will be updated with the corresponding browser classes

``` html
<script src="browser.js"></script>
```

By default js-classes are disable (it means the `<html>` wont display the js- class); to enable this, just change:

```js
  var js = false;
```
With
```js
  var js = true;
```

You can change the browsers classes as you want/need by modifing the classes obj.
```js
  var classes = {
        css: {
          opera: 'opera',
          chrome: 'chrome',
          safari: 'safari',
          firefox: 'firefox',
          ie: 'ie',
          edge: 'edge',
          unknown: 'unknown'
        },
        js: {
          opera: 'js-opera',
          chrome: 'js-chrome',
          safari: 'js-safari',
          firefox: 'js-firefox',
          ie: 'js-ie',
          edge: 'js-edge',
          unknown: 'js-unknown'
        }
      };
``` 
