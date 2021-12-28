console.log('DEQ event booklet loaded in : ' + window.document.title);
const urlParams = new URLSearchParams(queryString);
var version = urlParams.get('version');

function importJS(src, look_for, onload) {
  var s = window.document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', src);
  if (onload) wait_for_script_load(look_for, onload);
  var head = window.document.getElementsByTagName('head')[0];
  if (head) {
    head.appendChild(s);
  } else {
    window.document.body.appendChild(s);
  }
}

function importCSS(href, look_for, onload) {
  var s = window.document.createElement('link');
  s.setAttribute('rel', 'stylesheet');
  s.setAttribute('type', 'text/css');
  s.setAttribute('media', 'screen');
  s.setAttribute('href', href);
  if (onload) wait_for_script_load(look_for, onload);
  var head = window.document.getElementsByTagName('head')[0];
  if (head) {
    head.appendChild(s);
  } else {
    window.document.body.appendChild(s);
  }
}

function wait_for_script_load(look_for, callback) {
  var interval = setInterval(function() {
    if (eval("typeof " + look_for) != 'undefined') {
      clearInterval(interval);
      callback();
    }
  }, 50);
}

(function(){
  importCSS('https://cdn.jsdelivr.net/gh/marcvdbergh/deqevents@'+version+'/style.css?d='+Date.now() );
  importJS('https://ajax.googleapis.com/ajax/libs/jquery/1.3.1/jquery.min.js', 'jQuery', function() { // Load everything else when it is done.
    jQuery.noConflict();
    importJS('https://cdn.jsdelivr.net/gh/marcvdbergh/deqevents@'+version+'/interface.js?d='+Date.now());
  });
})();
