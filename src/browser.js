(function(){

  'use strict'
  
  var js = false;
  var classes = {
        css: {
          opera: 'opera',
          chrome: 'chrome',
          safari: 'safari',
          firefox: 'firefox',
          ie: 'ie',
          unknown: 'unknown'
        },
        js: {
          opera: 'js-opera',
          chrome: 'js-chrome',
          safari: 'js-safari',
          firefox: 'js-firefox',
          ie: 'js-ie',
          unknown: 'js-unknown'
        }
      };

  function detectBrowser() {
    var is;
    var jsIs;

    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
      jsIs = ((js) ? classes.js.opera : "");
      is = classes.css.opera + " " + jsIs;
    }else if(navigator.userAgent.indexOf("Chrome") != -1 ){
      jsIs = ((js) ? classes.js.chrome : "");
      is = classes.css.chrome + " " + jsIs;
    }else if(navigator.userAgent.indexOf("Safari") != -1){
      jsIs = ((js) ? classes.js.safari : "");
      is = classes.css.safari + " " + jsIs;
    }else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
      jsIs = ((js) ? classes.js.firefox : "");
      is = classes.css.firefox + " " + jsIs;
    }else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
      // If IE > 10
      jsIs = ((js) ? classes.js.ie : "");
      is = classes.css.ie + " " + jsIs;
    }else {
      jsIs = ((js) ? classes.js.unknown : "");
      is = classes.css.unknown + " " + jsIs;
    }

    return is;
  }

  function browser() {
    var el = window.document.documentElement;
    var classString = el.className;
    var newClass = classString.concat(" " + detectBrowser());
    el.className = newClass;
  }

  window.onload = setTimeout(browser, 1000);
})();
