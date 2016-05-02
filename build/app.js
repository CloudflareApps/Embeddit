"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var CONTAINER_CLASS = "eager-embeddit";
  var CONFIG = {
    element: "." + CONTAINER_CLASS,
    dark: false,
    both: false,
    service: "reddit",
    loadMore: true,
    limit: 5,
    debug: "production" === "development"
  };

  var element = void 0;
  var options = INSTALL_OPTIONS;

  function updateElement() {
    var _Eager$proxy$original = Eager.proxy.originalURL.parsed;
    var host = _Eager$proxy$original.host;
    var path = _Eager$proxy$original.path;
    var scheme = _Eager$proxy$original.scheme;


    element = Eager.createElement(options.location, element);
    element.classList.add(CONTAINER_CLASS);

    var url = INSTALL_ID === "preview" ? scheme + "://" + host + path : window.location;

    Embedd.init(_extends({}, CONFIG, { url: url }));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement();
  }

  INSTALL_SCOPE = {
    setOptions: function setOptions(nextOptions) {
      options = nextOptions;

      updateElement();
    }
  };
})();