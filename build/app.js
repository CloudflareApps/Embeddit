"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {
  var CONTAINER_CLASS = "eager-embeddit";
  var CONFIG = {
    element: "." + CONTAINER_CLASS,
    dark: false,
    both: false,
    service: "reddit",
    loadMore: true,
    infiniteScroll: true,
    limit: 5,
    debug: "development" === "development"
  };

  var element = void 0;
  var options = INSTALL_OPTIONS;

  function updateElement() {
    element = Eager.createElement(options.location, element);
    element.classList.add(CONTAINER_CLASS);

    var pathname = window.location.pathname;
    var href = window.location.href;


    if (Eager.siteId === "preview") {
      var _href$split = href.split(".p.eager.works");

      var _href$split2 = _slicedToArray(_href$split, 1);

      var encodedDomain = _href$split2[0];


      var decodedDomain = encodedDomain.replace(/(s_www|h_www)/, "www").replace(/_/g, ".");

      href = decodedDomain + pathname;
      console.log(href);
    }

    Embedd.init(_extends({}, CONFIG, {
      url: href
    }));
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