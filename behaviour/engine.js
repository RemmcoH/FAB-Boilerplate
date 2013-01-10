/**
 * Authors (i.e. Large Egos ;):
 *  - Your name
*/

(function ($) {
  "use strict";


  function Application() {}
  Application.prototype = {
    init: function () {
      showAllContentWhenLoaded();
    }
  };

  var showAllContentWhenLoaded = function () {
    //show content when javascript is executed
    //classname set in head.js
    $('html').removeClass('visuallyhidden');
  },
  app = new Application();
  $(document).ready(function () {
    app.init();
  });// end document.ready

}(jQuery));