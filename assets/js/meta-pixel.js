(function (window, document, tagName, scriptSource, pixelId) {
  if (!pixelId || window.fbq) {
    return;
  }

  var fbq = (window.fbq = function () {
    if (fbq.callMethod) {
      fbq.callMethod.apply(fbq, arguments);
    } else {
      fbq.queue.push(arguments);
    }
  });

  if (!window._fbq) {
    window._fbq = fbq;
  }

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  var script = document.createElement(tagName);
  script.async = true;
  script.src = scriptSource;

  var firstScript = document.getElementsByTagName(tagName)[0];
  firstScript.parentNode.insertBefore(script, firstScript);

  fbq('init', pixelId);
  fbq('track', 'PageView');
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', '');
