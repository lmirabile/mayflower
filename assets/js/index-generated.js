(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = (function (window, document, undefined) {
  "use strict";

  function setCookie(name, value, expires) {
    if (typeof expires === 'number') {
      var d = new Date();
      d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + "; " + expires + "; path=/";
    } else {
      document.cookie = name + "=" + value + "; path=/";
    }
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  return {
    setCookie: setCookie,
    getCookie: getCookie
  };
})(window, document);

},{}],2:[function(require,module,exports){
// check the value of the css :before psuedo element
// values look for "true" or "false"

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function ($el) {
  var value = "true";
  try {
    value = window.getComputedStyle($el[0], ':before').getPropertyValue('content').replace(/\"/g, '');
  } catch (err) {}
  return value === "false" ? false : true;
};

module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

module.exports = function (name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        jQuery.ajax({
            url: themePath + '/js/templates/' + name + '.html',
            success: function success(data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async: false
        });
    }
    return Handlebars.templates[name];
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports['default'] = (function (window, document, $, undefined) {
  var $el = undefined,
      $elParent = undefined,
      elHeight = undefined,
      elWidth = undefined,
      lowerLimit = undefined,
      upperLimit = undefined,
      debounceTimer = undefined,
      runCode = false;

  function init(element) {
    $el = element;
    $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    updateData();

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      updateData();
    }, 1000);

    $(window).resize(function () {
      updateData();
      setPosition();
    });

    // toggle the sticky positioning
    $(window).scroll(function () {
      setPosition();
    });
  }

  function updateData() {
    var newRunCode = (0, _helpersCssControlCodeJs2['default'])($el);

    if (runCode && !newRunCode) {
      $el.removeAttr('style');
    }

    runCode = newRunCode;

    if (!runCode) {
      return;
    }

    runCode = newRunCode;
    elHeight = $el.height();
    elWidth = $elParent.width();
    upperLimit = $elParent.offset().top;
    lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

    $el.width(elWidth);
  }

  function setPosition() {
    if (!runCode) {
      $el.attr('data-sticky', 'top');
      return false;
    }

    var windowTop = $(window).scrollTop(),
        attr = $el.attr('data-sticky'),
        top = attr !== 'top' && windowTop <= upperLimit,
        middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
        bottom = attr !== 'bottom' && windowTop >= lowerLimit;

    if (top) {
      $el.attr('data-sticky', 'top');
    } else if (middle) {
      $el.attr('data-sticky', 'middle');
    } else if (bottom) {
      $el.attr('data-sticky', 'bottom');
    }
  }

  return { init: init };
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cssControlCode.js":2}],5:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _modulesAccordionsJs = require("./modules/accordions.js");

var _modulesAccordionsJs2 = _interopRequireDefault(_modulesAccordionsJs);

var _modulesGoogleMapJs = require("./modules/googleMap.js");

var _modulesGoogleMapJs2 = _interopRequireDefault(_modulesGoogleMapJs);

var _modulesBack2topJs = require("./modules/back2top.js");

var _modulesBack2topJs2 = _interopRequireDefault(_modulesBack2topJs);

var _modulesBannerCarouselJs = require("./modules/bannerCarousel.js");

var _modulesBannerCarouselJs2 = _interopRequireDefault(_modulesBannerCarouselJs);

var _modulesClickableJs = require("./modules/clickable.js");

var _modulesClickableJs2 = _interopRequireDefault(_modulesClickableJs);

var _modulesDropdownJs = require("./modules/dropdown.js");

var _modulesDropdownJs2 = _interopRequireDefault(_modulesDropdownJs);

var _modulesEmergencyAlertsJs = require("./modules/emergencyAlerts.js");

var _modulesEmergencyAlertsJs2 = _interopRequireDefault(_modulesEmergencyAlertsJs);

var _modulesFormValidationJs = require("./modules/formValidation.js");

var _modulesFormValidationJs2 = _interopRequireDefault(_modulesFormValidationJs);

var _modulesHideAlertJs = require("./modules/hideAlert.js");

var _modulesHideAlertJs2 = _interopRequireDefault(_modulesHideAlertJs);

var _modulesKeywordSearchJs = require("./modules/keywordSearch.js");

var _modulesKeywordSearchJs2 = _interopRequireDefault(_modulesKeywordSearchJs);

var _modulesLocationListingJs = require("./modules/locationListing.js");

var _modulesLocationListingJs2 = _interopRequireDefault(_modulesLocationListingJs);

var _modulesMainNavJs = require("./modules/mainNav.js");

var _modulesMainNavJs2 = _interopRequireDefault(_modulesMainNavJs);

var _modulesMainNavPilotJs = require("./modules/mainNavPilot.js");

var _modulesMainNavPilotJs2 = _interopRequireDefault(_modulesMainNavPilotJs);

var _modulesMobileNavJs = require("./modules/mobileNav.js");

var _modulesMobileNavJs2 = _interopRequireDefault(_modulesMobileNavJs);

var _modulesResponsiveVideoJs = require("./modules/responsiveVideo.js");

var _modulesResponsiveVideoJs2 = _interopRequireDefault(_modulesResponsiveVideoJs);

var _modulesRichTextJs = require("./modules/richText.js");

var _modulesRichTextJs2 = _interopRequireDefault(_modulesRichTextJs);

var _modulesScrollAnchorsJs = require("./modules/scrollAnchors.js");

var _modulesScrollAnchorsJs2 = _interopRequireDefault(_modulesScrollAnchorsJs);

var _modulesUtilNavJs = require("./modules/utilNav.js");

var _modulesUtilNavJs2 = _interopRequireDefault(_modulesUtilNavJs);

},{"./modules/accordions.js":6,"./modules/back2top.js":7,"./modules/bannerCarousel.js":8,"./modules/clickable.js":9,"./modules/dropdown.js":10,"./modules/emergencyAlerts.js":11,"./modules/formValidation.js":12,"./modules/googleMap.js":13,"./modules/hideAlert.js":14,"./modules/keywordSearch.js":15,"./modules/locationListing.js":16,"./modules/mainNav.js":17,"./modules/mainNavPilot.js":18,"./modules/mobileNav.js":19,"./modules/responsiveVideo.js":20,"./modules/richText.js":21,"./modules/scrollAnchors.js":22,"./modules/utilNav.js":23}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-accordion').each(function () {
    var $el = $(this),
        $link = $el.find('.js-accordion-link'),
        $content = $el.find('.js-accordion-content'),
        active = (0, _helpersCssControlCodeJs2['default'])($el),
        open = $el.hasClass('is-open');

    $el.attr('aria-expanded', open);

    if (open) {
      // setup the inline display block
      $content.stop(true, true).slideDown();
    }

    $link.on('click', function (e) {
      if (active) {
        e.preventDefault();
        open = $el.hasClass('is-open');
        if (open) {
          $content.stop(true, true).slideUp();
        } else {
          $content.stop(true, true).slideDown();
        }
        $el.attr('aria-expanded', !open).toggleClass('is-open');
      }
    });

    $(window).resize(function () {
      var temp = (0, _helpersCssControlCodeJs2['default'])($el);

      if (temp !== active && !temp) {
        $content.removeAttr('style');
        $el.removeClass('is-open');
        $el.attr('aria-expanded', 'false');
      }

      active = temp;
    }).resize();
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cssControlCode.js":2}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  var $footer = $('.js-footer'),
      visibleThreshold = 250,
      staticThreshold = 50;

  $(".js-back2top").each(function () {
    var $el = $(this);

    $el.on('click', function (e) {
      e.preventDefault();
      try {
        $("html, body").stop(true, true).animate({ scrollTop: 0 }, '750');
      } catch (e) {
        $('body').scrollTop(0);
      }
      // Bring keyboard focus back to top as well.
      $("#main-content").focus();
      return false;
    });

    $(window).on('scroll', function () {
      // if we've exceeded the threshold of scrolling
      // from the top, show control
      var scrollTop = $(window).scrollTop();

      if (scrollTop > visibleThreshold) {
        $el.removeClass('is-hidden');
      } else {
        $el.addClass('is-hidden');
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-banner-carousel').each(function () {
    var $el = $(this);

    if ($el.children().length <= 1) {
      return;
    }

    var slider = $el.slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $('.js-clickable').each(function () {
    // if the this is clicked
    $(this).click(function (event) {
      event.preventDefault();

      var $el = $(this).find('.js-clickable-link').first();
      // find the destination
      var dest = $el.attr("href");
      // if the target attribute exists
      if ("_blank" === $el.attr("target")) {
        // launch new tab/window
        window.open(dest);
      } else {
        // otherwise redirect to a new page
        window.location = dest;
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
// ****** basic custom select that uses mobile select keyboard ******
"use strict";

var dropdownMenu = document.querySelectorAll(".js-dropdown");

if (null !== dropdownMenu) {

  var _length = dropdownMenu.length;

  var _loop = function (i) {
    var parentEl = dropdownMenu[i],
        selectEl = parentEl.querySelector(".js-dropdown-select"),
        link = parentEl.querySelector(".js-dropdown-link");

    if (null === selectEl || null === link) {
      return "break";
    }

    selectEl.onchange = function () {
      var elem = typeof this.selectedIndex === "undefined" ? window.event.srcElement : this;
      link.innerText = elem.text || elem.options[elem.selectedIndex].text;
    };
  };

  for (var i = 0; i < _length; i++) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }
}

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {
  // Emergency Alerts start close on page load
  // the default behavior is to expand the alerts
  // Emergency Alerts should stay closed if the cookie is set to false

  /* ********* NOTE: 
    This component is dependent on the 
    accordion.js component runing before it. 
  ********* */

  $('.js-emergency-alerts').each(function () {
    var $el = $(this),
        open = true,
        id = $el.data('id'),
        cookieName = 'emergency-alerts' + id,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName),
        $button = $el.find('.js-accordion-link button');

    $button.on('click', function () {
      // clicking this link also triggers the accordion click
      // toggle the current state
      open = !open;
      // update open/close state cookie
      // leave off third argument to make it expire on session
      _helpersCookiesJs2['default'].setCookie(cookieName, open);
    });

    // if the user has closed the alerts on a previous page
    if (typeof cookieValue !== 'undefined' && cookieValue === 'false') {
      open = false;
      // set the state of aria-expanded
      $button.attr('aria-expanded', open);
    }

    // Emergency Alerts loads closed so expand it.
    if (open) {
      open = false; // clicking the link swaps the value
      $button.first().trigger('click');
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('form').each(function () {
    var $form = $(this),
        requiredFields = [];

    // find all required fields
    $('.js-is-required').each(function () {
      var $field = $(this),
          type = $field.data('type'),
          value = $field.val(),
          valid = validate(value, type);

      requiredFields.push({ type: type, valid: valid, $el: $field });

      $(this).data('index', requiredFields.length);
    });

    // if there aren't any required fields, don't do anything
    if (requiredFields.length === 0) {
      return;
    }

    $form.on('submit', function (e) {
      var submitForm = true;

      // validate each required field
      requiredFields.forEach(function (item) {
        var value = item.$el.val();

        item.valid = validate(value, item.type);

        if (item.valid) {
          item.$el.attr('data-valid', 'is-valid');
        } else {
          submitForm = false;
          item.$el.attr('data-valid', 'is-invalid');
        }
      });

      if (!submitForm) {
        // prevent the form from submitting
        e.preventDefault();
        // show the form error message
        // or blink the message if it is already visible
        $form.find('.js-error-msg').attr('hidden', true);
        setTimeout(function () {
          $form.find('.js-error-msg').removeAttr('hidden');
        }, 100);
      }
    });
  });

  function validate(value) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? 'text' : arguments[1];

    var valid = false;

    switch (type) {
      case 'email':
        valid = !!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+/i);
        break;
      default:
        valid = value.length !== 0;
    }

    return valid;
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {

  // only run this code if there is a google map component on the page
  if (!$('.js-google-map').length || typeof googleMapData === 'undefined') {
    return;
  }

  var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('googleMapInfo');

  // after the api is loaded this function is called
  window.initMap = function () {

    $(".js-google-map").each(function (i) {
      var $el = $(this);

      // get the maps data
      // this could be replaced with an api
      var rawData = googleMapData[i];

      // *** Create the Map *** //
      // map defaults
      var initMapData = {
        scrollwheel: false
      };
      // create map Data by combining the rawData with the defaults
      var mapData = Object.assign({}, rawData.map, initMapData);

      var map = new google.maps.Map(this, mapData);

      var markers = [];

      // *** Add Markers with popups *** //
      rawData.markers.forEach(function (d, i) {
        var markerData = Object.assign({ map: map }, d);

        var marker = new google.maps.Marker(markerData);

        var infoData = infoTransform(markerData.infoWindow);
        var template = compiledTemplate(infoData);
        var infoWindow = new google.maps.InfoWindow({
          content: template
        });

        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });

        marker.showInfo = function () {
          infoWindow.open(map, marker);
        };

        markers.push(marker);
      });

      // listen for recenter command
      $el.on("recenter", function (event, markerIndex) {
        if (typeof markers[markerIndex] === "undefined") {
          return false;
        }
        map.setCenter(markers[markerIndex].getPosition());
        markers[markerIndex].showInfo();
      });
    });
  };

  function infoTransform(data) {
    var infoData = {
      phoneFormatted: formatPhone(data.phone),
      faxFormatted: formatPhone(data.fax)
    };
    return Object.assign({}, data, infoData);
  }

  function formatPhone(phone) {
    var phoneTemp = phone[0] === '1' ? phone.substring(1) : phone;
    return phoneTemp.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  // load Google's api
  var script = document.createElement('script');
  script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyC-WIoNfS6fh7TOtOqpDEgKST-W_NBebTk&callback=initMap";
  document.getElementsByTagName('head')[0].appendChild(script);
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-header-alert').each(function () {
    var $el = $(this),
        $link = $el.find('.js-header-alert-link'),
        id = $el.data('id'),
        cookieName = "Alert" + id,
        cookieExpires = 365,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName);

    // show alert if cookie doesn't exist
    if (cookieValue !== "hide") {
      $el.fadeIn().fadeOut('fast').fadeIn('slow');
    }

    // hide the alert
    $link.on('click', function () {
      _helpersCookiesJs2['default'].setCookie(cookieName, "hide", cookieExpires);
      $el.stop(true, true).fadeOut();
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-keyword-search').each(function () {
    var $el = $(this),
        $form = $el.find('form');

    $form.on('submit', function (e) {
      e.preventDefault();
      $el.addClass('is-dirty');
    });

    $form.on('reset', function () {
      $el.removeClass('is-dirty');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersStickyJs = require("../helpers/sticky.js");

var _helpersStickyJs2 = _interopRequireDefault(_helpersStickyJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-location-listing').each(function () {
    var $el = $(this),
        $map = $el.find('.js-location-listing-map');

    _helpersStickyJs2['default'].init($map);

    // find the location link
    $el.find('.js-location-listing-link').each(function (index) {
      var $link = $(this);

      $link.on('click', function (e) {
        e.preventDefault();
        // when link is clicked
        // trigger map to recenter on this item based on it's index.
        var $map = $el.find('.js-google-map'),
            position = $map.offset().top;

        $map.trigger('recenter', index);
        // focus on the map
        $("html,body").stop(true, true).animate({ scrollTop: position }, '750');
      });
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/sticky.js":4}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  var windowWidth = window.innerWidth;

  $(window).resize(function () {
    windowWidth = window.innerWidth;
  });

  $('.js-main-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-submenu",
        $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle'),
        $mainNavItems = $parent.find('.js-main-nav-toggle, .js-main-nav-top-link'),
        previousKey = null,
        breakpoint = 800; // matches CSS breakpoint for Main Nav

    $mainNavItems.on('keydown', function (e) {
      if (windowWidth <= breakpoint) {
        // only for desktop
        return;
      }

      // Grab all the DOM info we need...
      var $link = $(this),
          $topLevelLinks = $parent.find('.ma__main-nav__top-link'),
          open = $link.hasClass(openClass),
          $openContent = $parent.find('.js-main-nav-content.' + openClass),
          $focusedElement = $(document.activeElement),

      // relevant if open..
      $topLevelItem = $focusedElement.parents('.ma__main-nav__item'),
          $topLevelLink = $topLevelItem.find('.ma__main-nav__top-link'),
          $dropdownLinks = $link.find('.ma__main-nav__subitem .ma__main-nav__link'),
          focusIndexInDropdown = $dropdownLinks.index($focusedElement),
          isShift = !!e.shiftKey; // typecast to boolean

      // down arrow or tab key
      if (e.keyCode === 40 || e.keyCode === 9 && !isShift) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select next menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown === $dropdownLinks.length - 1) {
            return;
          } else {
            if (focusIndexInDropdown === -1) {
              $dropdownLinks[1].focus();
            } else {
              $dropdownLinks[focusIndexInDropdown + 1].focus();
            }
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $topLevelLink.attr('aria-expanded', 'true');
          $link.addClass(openClass);
          if ($dropdownLinks[1]) {
            $dropdownLinks[1].focus();
          }
          return;
        }
      }

      // up arrow or shift+tab keys
      if (e.keyCode === 38 || e.keyCode === 9 && isShift) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select previous menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown <= 1) {
            // not 0 bc of hidden first link
            hide($openContent);
            $topLevelLink.focus().attr('aria-expanded', 'false');
            return;
          } else {
            $dropdownLinks[focusIndexInDropdown - 1].focus();
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $topLevelLink.focus().attr('aria-expanded', 'true');
          $link.addClass(openClass);
          return;
        }
      }

      // esc key
      if (e.keyCode === 27) {
        // Close menu and return focus to menubar
        e.preventDefault();
        hide($openContent);
        $link.removeClass(openClass);
        $topLevelLink.focus().attr('aria-expanded', 'false');
        return;
      }

      // left arrow key
      if (e.keyCode === 37) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Previous menubar item
        //
        // If dropdown focus
        //  - Open previous pull down menu and select first item
        hide($openContent);
        $topLevelLink.attr('aria-expanded', 'false');
        var index = $topLevelLinks.index($topLevelLink) - 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }
      // right arrow key
      if (e.keyCode === 39) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Next menubar item
        //
        // If dropdown focus
        //  - Open next pull menu and select first item
        hide($openContent);
        $topLevelLink.attr('aria-expanded', 'false');
        var index = $topLevelLinks.index($topLevelLink) + 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }

      // key code 9 is the tab key
      if (open || typeof e.keycode !== "undefined" && e.keycode !== 9) {
        return;
      }
    });
    $mainNavItems.on('mouseenter', function (e) {
      $(this).children('button').attr("aria-expanded", "true");

      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        show($openContent);
      }
    });
    $mainNavItems.on('mouseleave', function (e) {
      $(this).children('button').attr("aria-expanded", "false");

      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        hide($openContent);
      }
    });
    $mainNavToggle.children('button, a').on('click', function (e) {
      var $el = $(this);
      var $elParent = $(this).parent();
      var $content = $elParent.find('.js-main-nav-content');
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      var isOpen = $content.hasClass(openClass);

      // mobile
      if (windowWidth <= breakpoint) {
        e.preventDefault();
        // add open class to this item
        $elParent.addClass(openClass);
        show($content);
        $el.attr('aria-expanded', 'true');
      } else {
        hide($openContent);
        $el.attr('aria-expanded', 'false');

        if (!isOpen) {
          show($content);
          $el.attr('aria-expanded', 'true');
        }
      }
    });
    $mainNavToggle.last().find('.js-main-nav-content li').last().find('a').on('keydown', function (e) {
      e.stopPropagation();
      // previous key was not a shift
      if (e.keyCode === 9 && previousKey !== 16) {
        // tab arrow\
        var $openContent = $parent.find('.js-main-nav-content.' + openClass);
        hide($openContent);
      }
      previousKey = e.keyCode;
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    // Hide any open submenu content when the sidebar menu is closed
    $('.js-header-menu-button').click(function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);

      if (windowWidth <= breakpoint) {
        $content.addClass(closeClass);
      } else {
        $content.stop(true, true).slideUp('fast', function () {
          $content.addClass(closeClass).slideDown(0);
        });
      }
    }

    function show($content) {
      $('body').addClass(submenuClass);
      if (windowWidth <= breakpoint) {
        $content.addClass(openClass).removeClass(closeClass);
      } else {
        $content.stop(true, true).delay(200).slideUp(0, function () {
          $content.addClass(openClass).removeClass(closeClass).slideDown('fast');
        });
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-main-nav').each(function () {
    var $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle');

    // make root top-level links inert for pilot
    $mainNavToggle.children('a').on('click', function (e) {
      e.preventDefault();
    });

    // Ensure top-level links that are potential anchor links close the sidebar on mobile
    $parent.find('.js-main-nav-top-link').find('a').on('click', function () {
      $('.js-header-menu-button').trigger('click');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
// ****** Menu button ******
"use strict";

var menuButton = document.querySelector(".js-header-menu-button");

if (null !== menuButton) {
  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

// ****** Main Header Search button on mobile should open the mobile menu  ******
var searchForm = document.querySelector(".js-header-search-menu .js-header-search-form");

if (null !== searchForm) {
  searchForm.addEventListener("submit", function (event) {
    if (window.innerWidth > 620) {
      return;
    }
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-ma-responsive-video').fitVids();
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  $('.js-ma-rich-text table').wrap("<div class='ma__rich-text__table-wrapper'></div>");
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports["default"] = (function (window, document, $, undefined) {

  $(".js-scroll-anchors").each(function () {
    var $el = $(this),
        $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent(),
        $links = $el.find('.js-scroll-anchors-link'),
        elHeight = undefined,
        headerBuffer = 0,
        lowerLimit = undefined,
        upperLimit = undefined,
        debounceTimer = undefined,
        activeClass = "is-active",
        activeAnchorIndex = 0,
        anchors = [],
        numAnchors = 0,
        isMobile = false,
        linkScrolling = false;

    setVariables();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      setVariables();
    }, 1000);

    $links.on('click', function (e) {
      e.preventDefault();

      // is the menu closed on mobile
      if (!$el.hasClass('is-open') && isMobile) {
        // just show the menu
        $el.addClass('is-open');
        return;
      }

      activeAnchorIndex = $(this).data('index');
      // find the location of the desired link and scroll the page
      var position = anchors[activeAnchorIndex].position;
      // close the menu
      $el.removeClass('is-open');
      // remove active flag from other links
      $el.find('.' + activeClass).removeClass(activeClass);
      // mark this link as active
      $(this).addClass(activeClass);
      // prevent the scroll event from updating active links
      linkScrolling = true;

      $("html,body").stop(true, true).animate({ scrollTop: position }, '750', function () {
        linkScrolling = false;
        // Get the link hash target so we can bring focus to it
        var hash = anchors[activeAnchorIndex].hash;
        // bring focus to the item we just scrolled to
        $(hash).focus();
      });
    });

    // if the content contains accordions,
    // readjust settings when there state changes.
    $('.js-accordion-link').on('click', function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 400);
    });

    $el.find(".js-scroll-anchors-toggle").on('click', function () {
      $el.toggleClass('is-open');
    });

    // make the links sticky
    $(window).resize(function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 300);
    });

    $(window).scroll(function () {
      setPosition();
      activateLink();
    });

    function setVariables() {
      var topOffset = 0;

      headerBuffer = 0;
      elHeight = $el.outerHeight(true);
      upperLimit = $elParent.offset().top;
      isMobile = (0, _helpersCssControlCodeJs2["default"])($el);

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (isMobile) {
        headerBuffer = $('.js-sticky-header').height() || 0;
        upperLimit -= headerBuffer;
        topOffset = elHeight;
      }

      lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

      // locate the position of all of the anchor targets
      anchors = new Array();
      $links.each(function (i, e) {
        var $el = $(this),
            $link = $el.is('a') ? $el : $el.find('a'),
            hash = $link[0].hash,
            position = $(hash).offset() ? $(hash).offset().top - headerBuffer - topOffset : upperLimit;

        anchors[i] = { hash: hash, position: position };

        $el.data('index', i);
      });

      // record the number of anchors for performance
      numAnchors = anchors.length;
    }

    function setPosition() {
      var windowTop = $(window).scrollTop(),
          attr = $el.attr('data-sticky'),
          top = attr !== 'top' && windowTop <= upperLimit,
          middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
          bottom = attr !== 'bottom' && windowTop >= lowerLimit;

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (!$elParent[0].hasAttribute("style") && isMobile && attr === 'middle') {
        $elParent.css({ 'paddingTop': elHeight });
      }

      if (top) {
        $el.attr('data-sticky', 'top');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      } else if (middle) {
        $el.attr('data-sticky', 'middle');

        if (isMobile) {
          $elParent.css({ 'paddingTop': elHeight });
        }
      } else if (bottom) {
        $el.attr('data-sticky', 'bottom');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      }
    }

    function activateLink() {
      // do we have more than one anchor
      if (numAnchors < 2 || linkScrolling) {
        return;
      }

      // get the current scroll position and offset by half the view port
      var windowTop = $(window).scrollTop() + window.innerHeight / 2,
          currentAnchor = activeAnchorIndex;

      // is there a prev target
      // and
      // is the current scroll position above the current target
      if (currentAnchor > 0 && windowTop < anchors[activeAnchorIndex].position) {
        // make the prev link active
        --activeAnchorIndex;
      }

      // is there a next target
      // and
      // is the current scroll position below the next target
      else if (currentAnchor < numAnchors - 1 && windowTop > anchors[activeAnchorIndex + 1].position) {
          // make the next link active
          ++activeAnchorIndex;
        }

      if (currentAnchor !== activeAnchorIndex) {
        // move the active flag
        $el.find('.' + activeClass).removeClass(activeClass);
        $links.eq(activeAnchorIndex).addClass(activeClass);
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{"../helpers/cssControlCode.js":2}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  $('.js-util-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-utilmenu",
        $parent = $(this),
        waitForIt = null;

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    $parent.find('.js-util-nav-toggle > a').on('click', function (e) {
      e.preventdefault;

      var open = $(this).hasClass(openClass),
          $content = $(this).next('.js-util-nav-content'),
          $openContent = $parent.find('.js-util-nav-content.' + openClass);

      // hide other content
      hide($openContent);

      if (open) {
        return;
      }
      // add open class to this item
      $(this).addClass(openClass);
      // add open class to the correct content based on index
      $content.attr("aria-hidden", "false");

      setTimeout(function () {
        $content.removeClass(closeClass).addClass(openClass);
        $('body').addClass(submenuClass);
      }, .1);
    });

    $parent.find('.js-close-util-nav').on('click', function (e) {
      e.preventDefault;

      hide($(this).closest('.js-util-nav-content'));
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);
      $content.removeClass(openClass).addClass(closeClass);

      if (waitForIt) {
        clearTimeout(waitForIt);
      }
      waitForIt = setTimeout(function () {
        $content.attr("aria-hidden", "true");
      }, 1000);
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}]},{},[5])

//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL2hlbHBlcnMvY29va2llcy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9jc3NDb250cm9sQ29kZS5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9nZXRIYW5kbGViYXJUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9zdGlja3kuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL2luZGV4LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2FjY29yZGlvbnMuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvYmFjazJ0b3AuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvYmFubmVyQ2Fyb3VzZWwuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvY2xpY2thYmxlLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2Ryb3Bkb3duLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2VtZXJnZW5jeUFsZXJ0cy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9mb3JtVmFsaWRhdGlvbi5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9nb29nbGVNYXAuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvaGlkZUFsZXJ0LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2tleXdvcmRTZWFyY2guanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvbG9jYXRpb25MaXN0aW5nLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL21haW5OYXYuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvbWFpbk5hdlBpbG90LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL21vYmlsZU5hdi5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9yZXNwb25zaXZlVmlkZW8uanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvcmljaFRleHQuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvc2Nyb2xsQW5jaG9ycy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy91dGlsTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUEsVUFBUyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQztBQUNwRCxjQUFZLENBQUM7O0FBRWIsV0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDdkMsUUFBRyxPQUFPLE9BQU8sQUFBQyxLQUFLLFFBQVEsRUFBRTtBQUMvQixVQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ25CLE9BQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFJLE9BQU8sR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxJQUFJLEFBQUMsQ0FBQyxDQUFDO0FBQ2pELFVBQUksT0FBTyxHQUFHLFVBQVUsR0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDekMsY0FBUSxDQUFDLE1BQU0sR0FBRyxJQUFJ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QyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQzs7QUFBQSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKXtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgZnVuY3Rpb24gc2V0Q29va2llKG5hbWUsIHZhbHVlLCBleHBpcmVzKSB7XHJcbiAgICBpZih0eXBlb2YoZXhwaXJlcykgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKGV4cGlyZXMqMjQqNjAqNjAqMTAwMCkpO1xyXG4gICAgICB2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIitkLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgXCI7IFwiICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgXCI7IHBhdGg9L1wiO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBcIjsgXCIgKyBkb2N1bWVudC5jb29raWU7XHJcbiAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdChcIjsgXCIgKyBuYW1lICsgXCI9XCIpO1xyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PSAyKSByZXR1cm4gcGFydHMucG9wKCkuc3BsaXQoXCI7XCIpLnNoaWZ0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2V0Q29va2llLFxyXG4gICAgZ2V0Q29va2llXHJcbiAgfTtcclxuXHJcbn0od2luZG93LCBkb2N1bWVudCk7XHJcblxyXG4iLCIvLyBjaGVjayB0aGUgdmFsdWUgb2YgdGhlIGNzcyA6YmVmb3JlIHBzdWVkbyBlbGVtZW50XHJcbi8vIHZhbHVlcyBsb29rIGZvciBcInRydWVcIiBvciBcImZhbHNlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgkZWwpID0+IHtcclxuICBsZXQgdmFsdWUgPSBcInRydWVcIjtcclxuICB0cnkge1xyXG4gICAgdmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkZWxbMF0sICc6YmVmb3JlJykuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpLnJlcGxhY2UoL1xcXCIvZywgJycpO1xyXG4gIH0gY2F0Y2goZXJyKSB7fVxyXG4gIHJldHVybiB2YWx1ZSA9PT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICBpZiAoSGFuZGxlYmFycy50ZW1wbGF0ZXMgPT09IHVuZGVmaW5lZCB8fCBIYW5kbGViYXJzLnRlbXBsYXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICAgIHVybCA6IHRoZW1lUGF0aCArICcvanMvdGVtcGxhdGVzLycgKyBuYW1lICsgJy5odG1sJyxcclxuICAgICAgICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgaWYgKEhhbmRsZWJhcnMudGVtcGxhdGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgSGFuZGxlYmFycy50ZW1wbGF0ZXMgPSB7fTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgSGFuZGxlYmFycy50ZW1wbGF0ZXNbbmFtZV0gPSBIYW5kbGViYXJzLmNvbXBpbGUoZGF0YSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXN5bmMgOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIEhhbmRsZWJhcnMudGVtcGxhdGVzW25hbWVdO1xyXG59O1xyXG4iLCJpbXBvcnQgY2hlY2tBY3RpdmUgZnJvbSBcIi4uL2hlbHBlcnMvY3NzQ29udHJvbENvZGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuICBsZXQgJGVsLFxyXG4gICAgJGVsUGFyZW50LFxyXG4gICAgZWxIZWlnaHQsXHJcbiAgICBlbFdpZHRoLFxyXG4gICAgbG93ZXJMaW1pdCxcclxuICAgIHVwcGVyTGltaXQsXHJcbiAgICBkZWJvdW5jZVRpbWVyLFxyXG4gICAgcnVuQ29kZSA9IGZhbHNlO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KGVsZW1lbnQpIHtcclxuICAgICRlbCA9IGVsZW1lbnQ7XHJcbiAgICAkZWxQYXJlbnQgPSAkZWwucGFyZW50KCkuY3NzKCdwb3NpdGlvbicpID09PSAncmVsYXRpdmUnID8gJGVsLnBhcmVudCgpIDogJGVsLnBhcmVudCgpLm9mZnNldFBhcmVudCgpO1xyXG5cclxuICAgIC8vIGRlZmF1bHQgYXNzdW1wdGlvbiBhcyB0byB3aGVyZSB0aGUgc2NyZWVuIHdpbGwgbG9hZFxyXG4gICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywndG9wJyk7XHJcblxyXG4gICAgdXBkYXRlRGF0YSgpO1xyXG5cclxuICAgIC8vIHVwZGF0ZSB2YXJpYWJsZXMgb25lIG1vcmUgdGltZSB0byBjYXRjaCBhbnkgcG9zdCBwYWdlIGxvYWQgY2hhbmdlc1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgdXBkYXRlRGF0YSgpO1xyXG4gICAgfSwxMDAwKTtcclxuICAgIFxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgdXBkYXRlRGF0YSgpO1xyXG4gICAgICBzZXRQb3NpdGlvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdG9nZ2xlIHRoZSBzdGlja3kgcG9zaXRpb25pbmdcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRQb3NpdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVEYXRhKCl7XHJcbiAgICBsZXQgbmV3UnVuQ29kZSA9IGNoZWNrQWN0aXZlKCRlbCk7XHJcblxyXG4gICAgaWYocnVuQ29kZSAmJiAhbmV3UnVuQ29kZSkge1xyXG4gICAgICAkZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBydW5Db2RlID0gbmV3UnVuQ29kZTtcclxuXHJcbiAgICBpZighcnVuQ29kZSl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcnVuQ29kZSA9IG5ld1J1bkNvZGU7XHJcbiAgICBlbEhlaWdodCA9ICRlbC5oZWlnaHQoKTtcclxuICAgIGVsV2lkdGggPSAkZWxQYXJlbnQud2lkdGgoKTtcclxuICAgIHVwcGVyTGltaXQgPSAkZWxQYXJlbnQub2Zmc2V0KCkudG9wO1xyXG4gICAgbG93ZXJMaW1pdCA9IHVwcGVyTGltaXQgKyAkZWxQYXJlbnQub3V0ZXJIZWlnaHQodHJ1ZSkgLSAkZWwuaGVpZ2h0KCk7XHJcblxyXG4gICAgJGVsLndpZHRoKGVsV2lkdGgpOyAgICAgIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UG9zaXRpb24oKSB7XHJcbiAgICBpZighcnVuQ29kZSl7XHJcbiAgICAgICRlbC5hdHRyKCdkYXRhLXN0aWNreScsJ3RvcCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHdpbmRvd1RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICBhdHRyID0gJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JyksXHJcbiAgICAgICAgdG9wID0gYXR0ciAhPT0gJ3RvcCcgJiYgd2luZG93VG9wIDw9IHVwcGVyTGltaXQsIFxyXG4gICAgICAgIG1pZGRsZSA9IGF0dHIgIT09ICdtaWRkbGUnICYmIHdpbmRvd1RvcCA8IGxvd2VyTGltaXQgJiYgd2luZG93VG9wID4gdXBwZXJMaW1pdCxcclxuICAgICAgICBib3R0b20gPSBhdHRyICE9PSAnYm90dG9tJyAmJiB3aW5kb3dUb3AgPj0gbG93ZXJMaW1pdDtcclxuICAgIFxyXG4gICAgaWYodG9wKSB7XHJcbiAgICAgICRlbC5hdHRyKCdkYXRhLXN0aWNreScsJ3RvcCcpO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYgKG1pZGRsZSkge1xyXG4gICAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCdtaWRkbGUnKTtcclxuICAgIH0gXHJcbiAgICBlbHNlIGlmIChib3R0b20pIHtcclxuICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywnYm90dG9tJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge2luaXR9O1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJpbXBvcnQgYWNjb3JkaW9ucyAgICAgICBmcm9tIFwiLi9tb2R1bGVzL2FjY29yZGlvbnMuanNcIjtcbmltcG9ydCBnb29nbGVNYXAgICAgICAgIGZyb20gXCIuL21vZHVsZXMvZ29vZ2xlTWFwLmpzXCI7XG5pbXBvcnQgYmFjazJ0b3AgICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL2JhY2sydG9wLmpzXCI7XG5pbXBvcnQgYmFubmVyQ2Fyb3VzZWwgICBmcm9tIFwiLi9tb2R1bGVzL2Jhbm5lckNhcm91c2VsLmpzXCI7XG5pbXBvcnQgY2xpY2thYmxlICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL2NsaWNrYWJsZS5qc1wiO1xuaW1wb3J0IGRyb3Bkb3duICAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9kcm9wZG93bi5qc1wiO1xuaW1wb3J0IGVtZXJnZW5jeUFsZXJ0cyAgZnJvbSBcIi4vbW9kdWxlcy9lbWVyZ2VuY3lBbGVydHMuanNcIjtcbmltcG9ydCBmb3JtVmFsaWRhdGlvbiAgIGZyb20gXCIuL21vZHVsZXMvZm9ybVZhbGlkYXRpb24uanNcIjtcbmltcG9ydCBoaWRlQWxlcnQgICAgICAgIGZyb20gXCIuL21vZHVsZXMvaGlkZUFsZXJ0LmpzXCI7XG5pbXBvcnQga2V5d29yZFNlYXJjaCAgICBmcm9tIFwiLi9tb2R1bGVzL2tleXdvcmRTZWFyY2guanNcIjtcbmltcG9ydCBsb2NhdGlvbkxpc3RpbmcgIGZyb20gXCIuL21vZHVsZXMvbG9jYXRpb25MaXN0aW5nLmpzXCI7XG5pbXBvcnQgbWFpbk5hdiAgICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL21haW5OYXYuanNcIjtcbmltcG9ydCBtYWluTmF2UGlsb3QgICAgIGZyb20gXCIuL21vZHVsZXMvbWFpbk5hdlBpbG90LmpzXCI7XG5pbXBvcnQgbW9iaWxlTmF2ICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL21vYmlsZU5hdi5qc1wiO1xuaW1wb3J0IHJlc3BvbnNpdmVWaWRlbyAgZnJvbSBcIi4vbW9kdWxlcy9yZXNwb25zaXZlVmlkZW8uanNcIjtcbmltcG9ydCByaWNoVGV4dCAgICAgICAgIGZyb20gXCIuL21vZHVsZXMvcmljaFRleHQuanNcIjtcbmltcG9ydCBzY3JvbGxBbmNob3JzICAgIGZyb20gXCIuL21vZHVsZXMvc2Nyb2xsQW5jaG9ycy5qc1wiO1xuaW1wb3J0IHV0aWxOYXYgICAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy91dGlsTmF2LmpzXCI7XG4iLCJpbXBvcnQgY2hlY2tBY3RpdmUgZnJvbSBcIi4uL2hlbHBlcnMvY3NzQ29udHJvbENvZGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLWFjY29yZGlvbicpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCAkZWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICRsaW5rID0gJGVsLmZpbmQoJy5qcy1hY2NvcmRpb24tbGluaycpLFxyXG4gICAgICAgICRjb250ZW50ID0gJGVsLmZpbmQoJy5qcy1hY2NvcmRpb24tY29udGVudCcpLFxyXG4gICAgICAgIGFjdGl2ZSA9IGNoZWNrQWN0aXZlKCRlbCksXHJcbiAgICAgICAgb3BlbiA9ICRlbC5oYXNDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICAgICRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJyxvcGVuKTtcclxuXHJcbiAgICBpZihvcGVuKSB7XHJcbiAgICAgIC8vIHNldHVwIHRoZSBpbmxpbmUgZGlzcGxheSBibG9ja1xyXG4gICAgICAkY29udGVudC5zdG9wKHRydWUsdHJ1ZSkuc2xpZGVEb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgaWYoYWN0aXZlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9wZW4gPSAkZWwuaGFzQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICBpZihvcGVuKXtcclxuICAgICAgICAgICRjb250ZW50LnN0b3AodHJ1ZSx0cnVlKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRjb250ZW50LnN0b3AodHJ1ZSx0cnVlKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCFvcGVuKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgdGVtcCA9IGNoZWNrQWN0aXZlKCRlbCk7XHJcblxyXG4gICAgICBpZih0ZW1wICE9PSBhY3RpdmUgJiYgIXRlbXApIHtcclxuICAgICAgICAkY29udGVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICRlbC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJywnZmFsc2UnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWN0aXZlID0gdGVtcDtcclxuICAgIH0pLnJlc2l6ZSgpO1xyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcbiAgbGV0ICRmb290ZXIgPSAkKCcuanMtZm9vdGVyJyksXHJcbiAgICAgIHZpc2libGVUaHJlc2hvbGQgPSAyNTAsXHJcbiAgICAgIHN0YXRpY1RocmVzaG9sZCA9IDUwO1xyXG5cclxuICAkKFwiLmpzLWJhY2sydG9wXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAkZWwub24oJ2NsaWNrJyxmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5zdG9wKHRydWUsdHJ1ZSkuYW5pbWF0ZSh7c2Nyb2xsVG9wOjB9LCAnNzUwJyk7XHJcbiAgICAgIH0gXHJcbiAgICAgIGNhdGNoKGUpIHtcclxuICAgICAgICAkKCdib2R5Jykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEJyaW5nIGtleWJvYXJkIGZvY3VzIGJhY2sgdG8gdG9wIGFzIHdlbGwuXHJcbiAgICAgICQoXCIjbWFpbi1jb250ZW50XCIpLmZvY3VzKCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGlmIHdlJ3ZlIGV4Y2VlZGVkIHRoZSB0aHJlc2hvbGQgb2Ygc2Nyb2xsaW5nXHJcbiAgICAgIC8vIGZyb20gdGhlIHRvcCwgc2hvdyBjb250cm9sXHJcbiAgICAgIGxldCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsVG9wID4gdmlzaWJsZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgJGVsLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRlbC5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1iYW5uZXItY2Fyb3VzZWwnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICBpZigkZWwuY2hpbGRyZW4oKS5sZW5ndGggPD0gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNsaWRlciA9ICRlbC5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPicsXHJcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPidcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcbiAgJCgnLmpzLWNsaWNrYWJsZScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIC8vIGlmIHRoZSB0aGlzIGlzIGNsaWNrZWRcclxuICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdmFyICRlbCA9ICQodGhpcykuZmluZCgnLmpzLWNsaWNrYWJsZS1saW5rJykuZmlyc3QoKTtcclxuICAgICAgLy8gZmluZCB0aGUgZGVzdGluYXRpb25cclxuICAgICAgdmFyIGRlc3QgPSAkZWwuYXR0cihcImhyZWZcIik7XHJcbiAgICAgIC8vIGlmIHRoZSB0YXJnZXQgYXR0cmlidXRlIGV4aXN0c1xyXG4gICAgICBpZihcIl9ibGFua1wiID09PSAkZWwuYXR0cihcInRhcmdldFwiKSkge1xyXG4gICAgICAgIC8vIGxhdW5jaCBuZXcgdGFiL3dpbmRvd1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKGRlc3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG90aGVyd2lzZSByZWRpcmVjdCB0byBhIG5ldyBwYWdlIFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRlc3Q7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsIi8vICoqKioqKiBiYXNpYyBjdXN0b20gc2VsZWN0IHRoYXQgdXNlcyBtb2JpbGUgc2VsZWN0IGtleWJvYXJkICoqKioqKlxyXG5sZXQgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1kcm9wZG93blwiKTtcclxuXHJcbmlmKG51bGwgIT09IGRyb3Bkb3duTWVudSl7XHJcblxyXG4gIGxldCBsZW5ndGggPSBkcm9wZG93bk1lbnUubGVuZ3RoO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xyXG4gICAgbGV0IHBhcmVudEVsID0gZHJvcGRvd25NZW51W2ldLFxyXG4gICAgICAgIHNlbGVjdEVsID0gcGFyZW50RWwucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1zZWxlY3RcIiksXHJcbiAgICAgICAgbGluayA9IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24tbGlua1wiKVxyXG5cclxuICAgIGlmKG51bGwgPT09IHNlbGVjdEVsIHx8IG51bGwgPT09IGxpbmspIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RWwub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IGVsZW0gPSAodHlwZW9mIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5ldmVudC5zcmNFbGVtZW50IDogdGhpcyk7XHJcbiAgICAgIGxpbmsuaW5uZXJUZXh0ID0gZWxlbS50ZXh0IHx8IGVsZW0ub3B0aW9uc1tlbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBjb29raWUgICBmcm9tIFwiLi4vaGVscGVycy9jb29raWVzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcbiAgLy8gRW1lcmdlbmN5IEFsZXJ0cyBzdGFydCBjbG9zZSBvbiBwYWdlIGxvYWRcclxuICAvLyB0aGUgZGVmYXVsdCBiZWhhdmlvciBpcyB0byBleHBhbmQgdGhlIGFsZXJ0c1xyXG4gIC8vIEVtZXJnZW5jeSBBbGVydHMgc2hvdWxkIHN0YXkgY2xvc2VkIGlmIHRoZSBjb29raWUgaXMgc2V0IHRvIGZhbHNlXHJcbiAgXHJcbiAgLyogKioqKioqKioqIE5PVEU6IFxyXG4gICAgVGhpcyBjb21wb25lbnQgaXMgZGVwZW5kZW50IG9uIHRoZSBcclxuICAgIGFjY29yZGlvbi5qcyBjb21wb25lbnQgcnVuaW5nIGJlZm9yZSBpdC4gXHJcbiAgKioqKioqKioqICovXHJcblxyXG4gICQoJy5qcy1lbWVyZ2VuY3ktYWxlcnRzJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgb3BlbiA9IHRydWUsXHJcbiAgICAgICAgaWQgPSAkZWwuZGF0YSgnaWQnKSxcclxuICAgICAgICBjb29raWVOYW1lID0gJ2VtZXJnZW5jeS1hbGVydHMnICsgaWQsXHJcbiAgICAgICAgY29va2llVmFsdWUgPSBjb29raWUuZ2V0Q29va2llKGNvb2tpZU5hbWUpLFxyXG4gICAgICAgICRidXR0b24gPSAkZWwuZmluZCgnLmpzLWFjY29yZGlvbi1saW5rIGJ1dHRvbicpO1xyXG5cclxuICAgICRidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGNsaWNraW5nIHRoaXMgbGluayBhbHNvIHRyaWdnZXJzIHRoZSBhY2NvcmRpb24gY2xpY2tcclxuICAgICAgLy8gdG9nZ2xlIHRoZSBjdXJyZW50IHN0YXRlXHJcbiAgICAgIG9wZW4gPSAhb3BlbjtcclxuICAgICAgLy8gdXBkYXRlIG9wZW4vY2xvc2Ugc3RhdGUgY29va2llXHJcbiAgICAgIC8vIGxlYXZlIG9mZiB0aGlyZCBhcmd1bWVudCB0byBtYWtlIGl0IGV4cGlyZSBvbiBzZXNzaW9uXHJcbiAgICAgIGNvb2tpZS5zZXRDb29raWUoY29va2llTmFtZSxvcGVuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlmIHRoZSB1c2VyIGhhcyBjbG9zZWQgdGhlIGFsZXJ0cyBvbiBhIHByZXZpb3VzIHBhZ2VcclxuICAgIGlmKHR5cGVvZihjb29raWVWYWx1ZSkgIT09ICd1bmRlZmluZWQnICYmIGNvb2tpZVZhbHVlID09PSAnZmFsc2UnKSB7XHJcbiAgICAgIG9wZW4gPSBmYWxzZTtcclxuICAgICAgLy8gc2V0IHRoZSBzdGF0ZSBvZiBhcmlhLWV4cGFuZGVkXHJcbiAgICAgICRidXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsIG9wZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVtZXJnZW5jeSBBbGVydHMgbG9hZHMgY2xvc2VkIHNvIGV4cGFuZCBpdC5cclxuICAgIGlmKG9wZW4pIHtcclxuICAgICAgb3BlbiA9IGZhbHNlOyAvLyBjbGlja2luZyB0aGUgbGluayBzd2FwcyB0aGUgdmFsdWVcclxuICAgICAgJGJ1dHRvbi5maXJzdCgpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJ2Zvcm0nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgJGZvcm0gPSAkKHRoaXMpLFxyXG4gICAgICAgIHJlcXVpcmVkRmllbGRzID0gW107XHJcblxyXG4gICAgLy8gZmluZCBhbGwgcmVxdWlyZWQgZmllbGRzXHJcbiAgICAkKCcuanMtaXMtcmVxdWlyZWQnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCAkZmllbGQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgdHlwZSA9ICRmaWVsZC5kYXRhKCd0eXBlJyksXHJcbiAgICAgICAgICB2YWx1ZSA9ICRmaWVsZC52YWwoKSxcclxuICAgICAgICAgIHZhbGlkID0gdmFsaWRhdGUodmFsdWUsdHlwZSk7XHJcblxyXG4gICAgICByZXF1aXJlZEZpZWxkcy5wdXNoKHt0eXBlLHZhbGlkLCRlbDokZmllbGR9KTtcclxuXHJcbiAgICAgICQodGhpcykuZGF0YSgnaW5kZXgnLHJlcXVpcmVkRmllbGRzLmxlbmd0aCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpZiB0aGVyZSBhcmVuJ3QgYW55IHJlcXVpcmVkIGZpZWxkcywgZG9uJ3QgZG8gYW55dGhpbmdcclxuICAgIGlmKHJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBsZXQgc3VibWl0Rm9ybSA9IHRydWU7XHJcblxyXG4gICAgICAvLyB2YWxpZGF0ZSBlYWNoIHJlcXVpcmVkIGZpZWxkXHJcbiAgICAgIHJlcXVpcmVkRmllbGRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGl0ZW0uJGVsLnZhbCgpO1xyXG5cclxuICAgICAgICBpdGVtLnZhbGlkID0gdmFsaWRhdGUodmFsdWUsaXRlbS50eXBlKTtcclxuXHJcbiAgICAgICAgaWYoaXRlbS52YWxpZCkge1xyXG4gICAgICAgICAgaXRlbS4kZWwuYXR0cignZGF0YS12YWxpZCcsJ2lzLXZhbGlkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN1Ym1pdEZvcm0gPSBmYWxzZTtcclxuICAgICAgICAgIGl0ZW0uJGVsLmF0dHIoJ2RhdGEtdmFsaWQnLCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmKCFzdWJtaXRGb3JtKSB7XHJcbiAgICAgICAgLy8gcHJldmVudCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmdcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gc2hvdyB0aGUgZm9ybSBlcnJvciBtZXNzYWdlIFxyXG4gICAgICAgIC8vIG9yIGJsaW5rIHRoZSBtZXNzYWdlIGlmIGl0IGlzIGFscmVhZHkgdmlzaWJsZVxyXG4gICAgICAgICRmb3JtLmZpbmQoJy5qcy1lcnJvci1tc2cnKVxyXG4gICAgICAgICAgLmF0dHIoJ2hpZGRlbicsdHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRmb3JtLmZpbmQoJy5qcy1lcnJvci1tc2cnKVxyXG4gICAgICAgICAgICAucmVtb3ZlQXR0cignaGlkZGVuJyk7XHJcbiAgICAgICAgICB9LDEwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSx0eXBlPSd0ZXh0Jyl7XHJcbiAgICBsZXQgdmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICBzd2l0Y2godHlwZSkge1xyXG4gICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgdmFsaWQgPSAhISh2YWx1ZS5tYXRjaCgvW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXSsvaSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHZhbGlkID0gdmFsdWUubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iLCJpbXBvcnQgZ2V0VGVtcGxhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZ2V0SGFuZGxlYmFyVGVtcGxhdGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgLy8gb25seSBydW4gdGhpcyBjb2RlIGlmIHRoZXJlIGlzIGEgZ29vZ2xlIG1hcCBjb21wb25lbnQgb24gdGhlIHBhZ2VcclxuICBpZighJCgnLmpzLWdvb2dsZS1tYXAnKS5sZW5ndGggfHwgdHlwZW9mIGdvb2dsZU1hcERhdGEgPT09ICd1bmRlZmluZWQnKXtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjb21waWxlZFRlbXBsYXRlID0gZ2V0VGVtcGxhdGUoJ2dvb2dsZU1hcEluZm8nKTtcclxuXHJcbiAgLy8gYWZ0ZXIgdGhlIGFwaSBpcyBsb2FkZWQgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWRcclxuICB3aW5kb3cuaW5pdE1hcCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICQoXCIuanMtZ29vZ2xlLW1hcFwiKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgY29uc3QgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIC8vIGdldCB0aGUgbWFwcyBkYXRhXHJcbiAgICAgIC8vIHRoaXMgY291bGQgYmUgcmVwbGFjZWQgd2l0aCBhbiBhcGlcclxuICAgICAgY29uc3QgcmF3RGF0YSA9IGdvb2dsZU1hcERhdGFbaV07XHJcbiAgICAgIFxyXG4gICAgICAvLyAqKiogQ3JlYXRlIHRoZSBNYXAgKioqIC8vXHJcbiAgICAgIC8vIG1hcCBkZWZhdWx0c1xyXG4gICAgICBjb25zdCBpbml0TWFwRGF0YSA9IHtcclxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgICAvLyBjcmVhdGUgbWFwIERhdGEgYnkgY29tYmluaW5nIHRoZSByYXdEYXRhIHdpdGggdGhlIGRlZmF1bHRzXHJcbiAgICAgIGNvbnN0IG1hcERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCByYXdEYXRhLm1hcCwgaW5pdE1hcERhdGEpO1xyXG5cclxuICAgICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLCBtYXBEYXRhKTtcclxuXHJcbiAgICAgIGxldCBtYXJrZXJzID0gW107XHJcblxyXG4gICAgICAvLyAqKiogQWRkIE1hcmtlcnMgd2l0aCBwb3B1cHMgKioqIC8vXHJcbiAgICAgIHJhd0RhdGEubWFya2Vycy5mb3JFYWNoKGZ1bmN0aW9uKGQsaSl7XHJcbiAgICAgICAgbGV0IG1hcmtlckRhdGEgPSBPYmplY3QuYXNzaWduKHttYXB9LGQpO1xyXG5cclxuICAgICAgICBsZXQgbWFya2VyID0gIG5ldyBnb29nbGUubWFwcy5NYXJrZXIobWFya2VyRGF0YSk7XHJcblxyXG4gICAgICAgIGxldCBpbmZvRGF0YSA9IGluZm9UcmFuc2Zvcm0obWFya2VyRGF0YS5pbmZvV2luZG93KTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSBjb21waWxlZFRlbXBsYXRlKGluZm9EYXRhKTtcclxuICAgICAgICBsZXQgaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuICAgICAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgaW5mb1dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWFya2VyLnNob3dJbmZvID0gKCkgPT4ge1xyXG4gICAgICAgICAgaW5mb1dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGxpc3RlbiBmb3IgcmVjZW50ZXIgY29tbWFuZFxyXG4gICAgICAkZWwub24oIFwicmVjZW50ZXJcIiwgZnVuY3Rpb24oIGV2ZW50LCBtYXJrZXJJbmRleCApIHtcclxuICAgICAgICBpZih0eXBlb2YgbWFya2Vyc1ttYXJrZXJJbmRleF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFwLnNldENlbnRlcihtYXJrZXJzW21hcmtlckluZGV4XS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICBtYXJrZXJzW21hcmtlckluZGV4XS5zaG93SW5mbygpOyAgICAgICAgXHJcbiAgICAgIH0pOyAgICBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5mb1RyYW5zZm9ybShkYXRhKSB7XHJcbiAgICBsZXQgaW5mb0RhdGEgPSB7XHJcbiAgICAgIHBob25lRm9ybWF0dGVkOiBmb3JtYXRQaG9uZShkYXRhLnBob25lKSxcclxuICAgICAgZmF4Rm9ybWF0dGVkOiBmb3JtYXRQaG9uZShkYXRhLmZheClcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LGRhdGEsaW5mb0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZm9ybWF0UGhvbmUocGhvbmUpIHtcclxuICAgIGxldCBwaG9uZVRlbXAgPSBwaG9uZVswXSA9PT0gJzEnID8gcGhvbmUuc3Vic3RyaW5nKDEpIDogcGhvbmU7XHJcbiAgICByZXR1cm4gcGhvbmVUZW1wLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sICcoJDEpICQyLSQzJyk7XHJcbiAgfVxyXG5cclxuICAvLyBsb2FkIEdvb2dsZSdzIGFwaVxyXG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHNjcmlwdC5zcmMgPSBcIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5Qy1XSW9OZlM2Zmg3VE90T3FwREVnS1NULVdfTkJlYlRrJmNhbGxiYWNrPWluaXRNYXBcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iLCJpbXBvcnQgY29va2llcyBmcm9tIFwiLi4vaGVscGVycy9jb29raWVzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1oZWFkZXItYWxlcnQnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKSxcclxuICAgICAgICAkbGluayA9ICRlbC5maW5kKCcuanMtaGVhZGVyLWFsZXJ0LWxpbmsnKSxcclxuICAgICAgICBpZCA9ICRlbC5kYXRhKCdpZCcpLFxyXG4gICAgICAgIGNvb2tpZU5hbWUgPSBcIkFsZXJ0XCIgKyBpZCxcclxuICAgICAgICBjb29raWVFeHBpcmVzID0gMzY1LFxyXG4gICAgICAgIGNvb2tpZVZhbHVlID0gY29va2llcy5nZXRDb29raWUoY29va2llTmFtZSk7XHJcblxyXG4gICAgLy8gc2hvdyBhbGVydCBpZiBjb29raWUgZG9lc24ndCBleGlzdFxyXG4gICAgaWYoY29va2llVmFsdWUgIT09IFwiaGlkZVwiKSB7XHJcbiAgICAgICRlbC5mYWRlSW4oKS5mYWRlT3V0KCdmYXN0JykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGlkZSB0aGUgYWxlcnRcclxuICAgICRsaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgY29va2llcy5zZXRDb29raWUoY29va2llTmFtZSxcImhpZGVcIixjb29raWVFeHBpcmVzKTtcclxuICAgICAgJGVsLnN0b3AodHJ1ZSx0cnVlKS5mYWRlT3V0KCk7XHJcbiAgICB9KVxyXG4gIH0pO1xyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAkKCcuanMta2V5d29yZC1zZWFyY2gnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKSxcclxuICAgICAgICAkZm9ybSA9ICRlbC5maW5kKCdmb3JtJyk7XHJcblxyXG4gICAgJGZvcm0ub24oJ3N1Ym1pdCcsZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJGVsLmFkZENsYXNzKCdpcy1kaXJ0eScpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZm9ybS5vbigncmVzZXQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICRlbC5yZW1vdmVDbGFzcygnaXMtZGlydHknKVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iLCJpbXBvcnQgc3RpY2t5IGZyb20gXCIuLi9oZWxwZXJzL3N0aWNreS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAkKCcuanMtbG9jYXRpb24tbGlzdGluZycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCAkZWwgPSAkKHRoaXMpLFxyXG4gICAgICAkbWFwID0gJGVsLmZpbmQoJy5qcy1sb2NhdGlvbi1saXN0aW5nLW1hcCcpO1xyXG5cclxuICAgIHN0aWNreS5pbml0KCRtYXApO1xyXG5cclxuICAgIC8vIGZpbmQgdGhlIGxvY2F0aW9uIGxpbmtcclxuICAgICRlbC5maW5kKCcuanMtbG9jYXRpb24tbGlzdGluZy1saW5rJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICBsZXQgJGxpbmsgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgJGxpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIHdoZW4gbGluayBpcyBjbGlja2VkIFxyXG4gICAgICAgIC8vIHRyaWdnZXIgbWFwIHRvIHJlY2VudGVyIG9uIHRoaXMgaXRlbSBiYXNlZCBvbiBpdCdzIGluZGV4LlxyXG4gICAgICAgIGxldCAkbWFwID0gJGVsLmZpbmQoJy5qcy1nb29nbGUtbWFwJyksXHJcbiAgICAgICAgICBwb3NpdGlvbiA9ICRtYXAub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICAgICAkbWFwLnRyaWdnZXIoJ3JlY2VudGVyJyxpbmRleCk7XHJcbiAgICAgICAgLy8gZm9jdXMgb24gdGhlIG1hcFxyXG4gICAgICAgICQoXCJodG1sLGJvZHlcIikuc3RvcCh0cnVlLHRydWUpLmFuaW1hdGUoe3Njcm9sbFRvcDpwb3NpdGlvbn0sICc3NTAnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuanMtbWFpbi1uYXYnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IG9wZW5DbGFzcyA9IFwiaXMtb3BlblwiLFxyXG4gICAgICAgIGNsb3NlQ2xhc3MgPSBcImlzLWNsb3NlZFwiLFxyXG4gICAgICAgIHN1Ym1lbnVDbGFzcyA9IFwic2hvdy1zdWJtZW51XCIsXHJcbiAgICAgICAgJHBhcmVudCA9ICQodGhpcyksXHJcbiAgICAgICAgJG1haW5OYXZUb2dnbGUgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi10b2dnbGUnKSxcclxuICAgICAgICAkbWFpbk5hdkl0ZW1zID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtdG9nZ2xlLCAuanMtbWFpbi1uYXYtdG9wLWxpbmsnKSxcclxuICAgICAgICBwcmV2aW91c0tleSA9IG51bGwsXHJcbiAgICAgICAgYnJlYWtwb2ludCA9IDgwMDsgLy8gbWF0Y2hlcyBDU1MgYnJlYWtwb2ludCBmb3IgTWFpbiBOYXZcclxuXHJcbiAgICAkbWFpbk5hdkl0ZW1zLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZih3aW5kb3dXaWR0aCA8PSBicmVha3BvaW50KSB7XHJcbiAgICAgICAgLy8gb25seSBmb3IgZGVza3RvcFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR3JhYiBhbGwgdGhlIERPTSBpbmZvIHdlIG5lZWQuLi5cclxuICAgICAgbGV0ICRsaW5rID0gJCh0aGlzKSxcclxuICAgICAgICAgICR0b3BMZXZlbExpbmtzID0gJHBhcmVudC5maW5kKCcubWFfX21haW4tbmF2X190b3AtbGluaycpLFxyXG4gICAgICAgICAgb3BlbiA9ICRsaW5rLmhhc0NsYXNzKG9wZW5DbGFzcyksXHJcbiAgICAgICAgICAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpLFxyXG4gICAgICAgICAgJGZvY3VzZWRFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSxcclxuICAgICAgLy8gcmVsZXZhbnQgaWYgb3Blbi4uXHJcbiAgICAgICAgICAkdG9wTGV2ZWxJdGVtID0gJGZvY3VzZWRFbGVtZW50LnBhcmVudHMoJy5tYV9fbWFpbi1uYXZfX2l0ZW0nKSxcclxuICAgICAgICAgICR0b3BMZXZlbExpbmsgPSAkdG9wTGV2ZWxJdGVtLmZpbmQoJy5tYV9fbWFpbi1uYXZfX3RvcC1saW5rJyksXHJcbiAgICAgICAgICAkZHJvcGRvd25MaW5rcyA9ICRsaW5rLmZpbmQoJy5tYV9fbWFpbi1uYXZfX3N1Yml0ZW0gLm1hX19tYWluLW5hdl9fbGluaycpLFxyXG4gICAgICAgICAgZm9jdXNJbmRleEluRHJvcGRvd24gPSAkZHJvcGRvd25MaW5rcy5pbmRleCgkZm9jdXNlZEVsZW1lbnQpLFxyXG4gICAgICAgICAgaXNTaGlmdCA9ICEhZS5zaGlmdEtleTsgLy8gdHlwZWNhc3QgdG8gYm9vbGVhblxyXG5cclxuICAgICAgLy8gZG93biBhcnJvdyBvciB0YWIga2V5XHJcbiAgICAgIGlmKChlLmtleUNvZGUgPT09IDQwKSB8fCAoZS5rZXlDb2RlID09PSA5ICYmICFpc1NoaWZ0KSkge1xyXG4gICAgICAgIC8vIGhpZGUgY29udGVudFxyXG4gICAgICAgIC8vIElmIG1lbnViYXIgZm9jdXNcclxuICAgICAgICAvLyAgLSBPcGVuIHB1bGwgZG93biBtZW51IGFuZCBzZWxlY3QgZmlyc3QgbWVudSBpdGVtXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJZiBkcm9wZG93biBmb2N1c1xyXG4gICAgICAgIC8vICAtIFNlbGVjdCBuZXh0IG1lbnUgaXRlbVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihvcGVuKSB7XHJcbiAgICAgICAgICBpZihmb2N1c0luZGV4SW5Ecm9wZG93biA9PT0gKCRkcm9wZG93bkxpbmtzLmxlbmd0aC0xKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoZm9jdXNJbmRleEluRHJvcGRvd24gPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgJGRyb3Bkb3duTGlua3NbMV0uZm9jdXMoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAkZHJvcGRvd25MaW5rc1tmb2N1c0luZGV4SW5Ecm9wZG93bisxXS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvdygkdG9wTGV2ZWxJdGVtLmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50JykpO1xyXG4gICAgICAgICAgJHRvcExldmVsTGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICRsaW5rLmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgICBpZigkZHJvcGRvd25MaW5rc1sxXSkge1xyXG4gICAgICAgICAgICAkZHJvcGRvd25MaW5rc1sxXS5mb2N1cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgIC8vIHVwIGFycm93IG9yIHNoaWZ0K3RhYiBrZXlzXHJcbiAgICAgICBpZigoZS5rZXlDb2RlID09PSAzOCkgfHwgKGUua2V5Q29kZSA9PT0gOSAmJiBpc1NoaWZ0KSkge1xyXG4gICAgICAgIC8vIGhpZGUgY29udGVudFxyXG4gICAgICAgIC8vIElmIG1lbnViYXIgZm9jdXNcclxuICAgICAgICAvLyAgLSBPcGVuIHB1bGwgZG93biBtZW51IGFuZCBzZWxlY3QgZmlyc3QgbWVudSBpdGVtXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJZiBkcm9wZG93biBmb2N1c1xyXG4gICAgICAgIC8vICAtIFNlbGVjdCBwcmV2aW91cyBtZW51IGl0ZW1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYob3Blbikge1xyXG4gICAgICAgICAgaWYoZm9jdXNJbmRleEluRHJvcGRvd24gPD0gMSApIHsgLy8gbm90IDAgYmMgb2YgaGlkZGVuIGZpcnN0IGxpbmtcclxuICAgICAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICAgICAkdG9wTGV2ZWxMaW5rLmZvY3VzKCkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZHJvcGRvd25MaW5rc1tmb2N1c0luZGV4SW5Ecm9wZG93bi0xXS5mb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3coJHRvcExldmVsSXRlbS5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCcpKTtcclxuICAgICAgICAgICR0b3BMZXZlbExpbmsuZm9jdXMoKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICRsaW5rLmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBlc2Mga2V5XHJcbiAgICAgIGlmKGUua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAvLyBDbG9zZSBtZW51IGFuZCByZXR1cm4gZm9jdXMgdG8gbWVudWJhclxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3Mob3BlbkNsYXNzKTtcclxuICAgICAgICAkdG9wTGV2ZWxMaW5rLmZvY3VzKCkuYXR0cignYXJpYS1leHBhbmRlZCcsJ2ZhbHNlJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBsZWZ0IGFycm93IGtleVxyXG4gICAgICBpZihlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGhpZGUgY29udGVudFxyXG4gICAgICAgIC8vIElmIG1lbnViYXIgZm9jdXNcclxuICAgICAgICAvLyAgLSBQcmV2aW91cyBtZW51YmFyIGl0ZW1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIElmIGRyb3Bkb3duIGZvY3VzXHJcbiAgICAgICAgLy8gIC0gT3BlbiBwcmV2aW91cyBwdWxsIGRvd24gbWVudSBhbmQgc2VsZWN0IGZpcnN0IGl0ZW1cclxuICAgICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICAgICAgJHRvcExldmVsTGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywnZmFsc2UnKTtcclxuICAgICAgICBsZXQgaW5kZXggPSAkdG9wTGV2ZWxMaW5rcy5pbmRleCgkdG9wTGV2ZWxMaW5rKS0xO1xyXG4gICAgICAgIGlmKCR0b3BMZXZlbExpbmtzW2luZGV4XSkge1xyXG4gICAgICAgICAgJHRvcExldmVsTGlua3NbaW5kZXhdLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIH1cclxuICAgICAgLy8gcmlnaHQgYXJyb3cga2V5XHJcbiAgICAgIGlmKGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gaGlkZSBjb250ZW50XHJcbiAgICAgICAgLy8gSWYgbWVudWJhciBmb2N1c1xyXG4gICAgICAgIC8vICAtIE5leHQgbWVudWJhciBpdGVtXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJZiBkcm9wZG93biBmb2N1c1xyXG4gICAgICAgIC8vICAtIE9wZW4gbmV4dCBwdWxsIG1lbnUgYW5kIHNlbGVjdCBmaXJzdCBpdGVtXHJcbiAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICR0b3BMZXZlbExpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsJ2ZhbHNlJyk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gJHRvcExldmVsTGlua3MuaW5kZXgoJHRvcExldmVsTGluaykrMTtcclxuICAgICAgICBpZigkdG9wTGV2ZWxMaW5rc1tpbmRleF0pIHtcclxuICAgICAgICAgICR0b3BMZXZlbExpbmtzW2luZGV4XS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGtleSBjb2RlIDkgaXMgdGhlIHRhYiBrZXlcclxuICAgICAgaWYob3BlbiB8fCAodHlwZW9mKGUua2V5Y29kZSkgIT09IFwidW5kZWZpbmVkXCIgJiYgZS5rZXljb2RlICE9PSA5KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgJG1haW5OYXZJdGVtcy5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJCh0aGlzKS5jaGlsZHJlbignYnV0dG9uJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIik7XHJcblxyXG4gICAgICBpZih3aW5kb3dXaWR0aCA+IGJyZWFrcG9pbnQpIHtcclxuICAgICAgICBsZXQgJG9wZW5Db250ZW50ID0gJCh0aGlzKS5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCcpO1xyXG4gICAgICAgIHNob3coJG9wZW5Db250ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkbWFpbk5hdkl0ZW1zLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAkKHRoaXMpLmNoaWxkcmVuKCdidXR0b24nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIik7XHJcblxyXG4gICAgICBpZih3aW5kb3dXaWR0aCA+IGJyZWFrcG9pbnQpIHtcclxuICAgICAgICBsZXQgJG9wZW5Db250ZW50ID0gJCh0aGlzKS5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCcpO1xyXG4gICAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkbWFpbk5hdlRvZ2dsZS5jaGlsZHJlbignYnV0dG9uLCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuICAgICAgbGV0ICRlbFBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgIGxldCAkY29udGVudCA9ICRlbFBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCcpO1xyXG4gICAgICBsZXQgJG9wZW5Db250ZW50ID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudC4nICsgb3BlbkNsYXNzKTtcclxuICAgICAgbGV0IGlzT3BlbiA9ICRjb250ZW50Lmhhc0NsYXNzKG9wZW5DbGFzcyk7XHJcblxyXG4gICAgICAvLyBtb2JpbGVcclxuICAgICAgaWYod2luZG93V2lkdGggPD0gYnJlYWtwb2ludCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBhZGQgb3BlbiBjbGFzcyB0byB0aGlzIGl0ZW1cclxuICAgICAgICAkZWxQYXJlbnQuYWRkQ2xhc3Mob3BlbkNsYXNzKTtcclxuICAgICAgICBzaG93KCRjb250ZW50KTtcclxuICAgICAgICAkZWwuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgIGlmKCFpc09wZW4pIHtcclxuICAgICAgICAgIHNob3coJGNvbnRlbnQpO1xyXG4gICAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkbWFpbk5hdlRvZ2dsZS5sYXN0KClcclxuICAgICAgLmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50IGxpJylcclxuICAgICAgICAubGFzdCgpXHJcbiAgICAgICAgICAuZmluZCgnYScpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBwcmV2aW91cyBrZXkgd2FzIG5vdCBhIHNoaWZ0XHJcbiAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gOSAmJiBwcmV2aW91c0tleSAhPT0gMTYpIHsgIC8vIHRhYiBhcnJvd1xcXHJcbiAgICAgICAgICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICRwYXJlbnQuZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQuJyArIG9wZW5DbGFzcyk7XHJcbiAgICAgICAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpb3VzS2V5ID0gZS5rZXlDb2RlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkKCcuanMtY2xvc2Utc3ViLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG4gICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIaWRlIGFueSBvcGVuIHN1Ym1lbnUgY29udGVudCB3aGVuIHRoZSBzaWRlYmFyIG1lbnUgaXMgY2xvc2VkXHJcbiAgICAkKCcuanMtaGVhZGVyLW1lbnUtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG4gICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlKCRjb250ZW50KSB7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhzdWJtZW51Q2xhc3MpO1xyXG4gICAgICAkcGFyZW50LmZpbmQoXCIuXCIgKyBvcGVuQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5DbGFzcyk7XHJcblxyXG4gICAgICBpZih3aW5kb3dXaWR0aCA8PSBicmVha3BvaW50KSB7XHJcbiAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGNvbnRlbnRcclxuICAgICAgICAuc3RvcCggdHJ1ZSwgdHJ1ZSApXHJcbiAgICAgICAgLnNsaWRlVXAoJ2Zhc3QnLGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJGNvbnRlbnRcclxuICAgICAgICAgICAgLmFkZENsYXNzKGNsb3NlQ2xhc3MpXHJcbiAgICAgICAgICAgIC5zbGlkZURvd24oMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93KCRjb250ZW50KSB7XHJcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhzdWJtZW51Q2xhc3MpO1xyXG4gICAgICBpZih3aW5kb3dXaWR0aCA8PSBicmVha3BvaW50KSB7XHJcbiAgICAgICAgJGNvbnRlbnRcclxuICAgICAgICAgIC5hZGRDbGFzcyhvcGVuQ2xhc3MpXHJcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGNvbnRlbnRcclxuICAgICAgICAgIC5zdG9wKCB0cnVlLCB0cnVlIClcclxuICAgICAgICAgIC5kZWxheSggMjAwIClcclxuICAgICAgICAgIC5zbGlkZVVwKDAsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICRjb250ZW50XHJcbiAgICAgICAgICAgICAgLmFkZENsYXNzKG9wZW5DbGFzcylcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcylcclxuICAgICAgICAgICAgICAuc2xpZGVEb3duKCdmYXN0Jyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfSk7XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XG5cbiAgJCgnLmpzLW1haW4tbmF2JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBsZXQgJHBhcmVudCA9ICQodGhpcyksXG4gICAgICAkbWFpbk5hdlRvZ2dsZSA9ICRwYXJlbnQuZmluZCgnLmpzLW1haW4tbmF2LXRvZ2dsZScpO1xuXG4gICAgLy8gbWFrZSByb290IHRvcC1sZXZlbCBsaW5rcyBpbmVydCBmb3IgcGlsb3RcbiAgICAkbWFpbk5hdlRvZ2dsZS5jaGlsZHJlbignYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIC8vIEVuc3VyZSB0b3AtbGV2ZWwgbGlua3MgdGhhdCBhcmUgcG90ZW50aWFsIGFuY2hvciBsaW5rcyBjbG9zZSB0aGUgc2lkZWJhciBvbiBtb2JpbGVcbiAgICAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi10b3AtbGluaycpLmZpbmQoJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQoJy5qcy1oZWFkZXItbWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xuXG4gIH0pO1xuXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xuXG4iLCIvLyAqKioqKiogTWVudSBidXR0b24gKioqKioqXHJcbmxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1oZWFkZXItbWVudS1idXR0b25cIik7XHJcblxyXG5pZihudWxsICE9PSBtZW51QnV0dG9uKXtcclxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW1lbnVcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vICoqKioqKiBNYWluIEhlYWRlciBTZWFyY2ggYnV0dG9uIG9uIG1vYmlsZSBzaG91bGQgb3BlbiB0aGUgbW9iaWxlIG1lbnUgICoqKioqKlxyXG5sZXQgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtaGVhZGVyLXNlYXJjaC1tZW51IC5qcy1oZWFkZXItc2VhcmNoLWZvcm1cIik7XHJcblxyXG5pZihudWxsICE9PSBzZWFyY2hGb3JtKXtcclxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNjIwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xuXG4gICQoJy5qcy1tYS1yZXNwb25zaXZlLXZpZGVvJykuZml0VmlkcygpO1xuXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLW1hLXJpY2gtdGV4dCB0YWJsZScpLndyYXAoIFwiPGRpdiBjbGFzcz0nbWFfX3JpY2gtdGV4dF9fdGFibGUtd3JhcHBlcic+PC9kaXY+XCIgKTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7IiwiaW1wb3J0IGNoZWNrTW9iaWxlIGZyb20gXCIuLi9oZWxwZXJzL2Nzc0NvbnRyb2xDb2RlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoXCIuanMtc2Nyb2xsLWFuY2hvcnNcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGxldCAkZWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICRlbFBhcmVudCA9ICRlbC5wYXJlbnQoKS5jc3MoJ3Bvc2l0aW9uJykgPT09ICdyZWxhdGl2ZScgPyAkZWwucGFyZW50KCkgOiAkZWwucGFyZW50KCkub2Zmc2V0UGFyZW50KCksXHJcbiAgICAgICAgJGxpbmtzID0gJGVsLmZpbmQoJy5qcy1zY3JvbGwtYW5jaG9ycy1saW5rJyksXHJcbiAgICAgICAgZWxIZWlnaHQsXHJcbiAgICAgICAgaGVhZGVyQnVmZmVyID0gMCxcclxuICAgICAgICBsb3dlckxpbWl0LFxyXG4gICAgICAgIHVwcGVyTGltaXQsXHJcbiAgICAgICAgZGVib3VuY2VUaW1lcixcclxuICAgICAgICBhY3RpdmVDbGFzcyA9IFwiaXMtYWN0aXZlXCIsXHJcbiAgICAgICAgYWN0aXZlQW5jaG9ySW5kZXggPSAwLFxyXG4gICAgICAgIGFuY2hvcnMgPSBbXSxcclxuICAgICAgICBudW1BbmNob3JzID0gMCxcclxuICAgICAgICBpc01vYmlsZSA9IGZhbHNlLFxyXG4gICAgICAgIGxpbmtTY3JvbGxpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBzZXRWYXJpYWJsZXMoKTtcclxuXHJcbiAgICAvLyBkZWZhdWx0IGFzc3VtcHRpb24gYXMgdG8gd2hlcmUgdGhlIHNjcmVlbiB3aWxsIGxvYWRcclxuICAgICRlbC5hdHRyKCdkYXRhLXN0aWNreScsJ3RvcCcpO1xyXG5cclxuICAgIC8vIHVwZGF0ZSB2YXJpYWJsZXMgb25lIG1vcmUgdGltZSB0byBjYXRjaCBhbnkgcG9zdCBwYWdlIGxvYWQgY2hhbmdlc1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgc2V0VmFyaWFibGVzKCk7XHJcbiAgICB9LDEwMDApO1xyXG5cclxuICAgICRsaW5rcy5vbignY2xpY2snLGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgLy8gaXMgdGhlIG1lbnUgY2xvc2VkIG9uIG1vYmlsZVxyXG4gICAgICBpZighJGVsLmhhc0NsYXNzKCdpcy1vcGVuJykgJiYgaXNNb2JpbGUpIHsgICAgIFxyXG4gICAgICAgIC8vIGp1c3Qgc2hvdyB0aGUgbWVudVxyXG4gICAgICAgICRlbC5hZGRDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgIGFjdGl2ZUFuY2hvckluZGV4ID0gJCh0aGlzKS5kYXRhKCdpbmRleCcpO1xyXG4gICAgICAvLyBmaW5kIHRoZSBsb2NhdGlvbiBvZiB0aGUgZGVzaXJlZCBsaW5rIGFuZCBzY3JvbGwgdGhlIHBhZ2VcclxuICAgICAgbGV0IHBvc2l0aW9uID0gYW5jaG9yc1thY3RpdmVBbmNob3JJbmRleF0ucG9zaXRpb247XHJcbiAgICAgIC8vIGNsb3NlIHRoZSBtZW51XHJcbiAgICAgICRlbC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAvLyByZW1vdmUgYWN0aXZlIGZsYWcgZnJvbSBvdGhlciBsaW5rc1xyXG4gICAgICAkZWwuZmluZCgnLicgKyBhY3RpdmVDbGFzcykucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAvLyBtYXJrIHRoaXMgbGluayBhcyBhY3RpdmVcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XHJcbiAgICAgIC8vIHByZXZlbnQgdGhlIHNjcm9sbCBldmVudCBmcm9tIHVwZGF0aW5nIGFjdGl2ZSBsaW5rc1xyXG4gICAgICBsaW5rU2Nyb2xsaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICQoXCJodG1sLGJvZHlcIikuc3RvcCh0cnVlLHRydWUpLmFuaW1hdGUoe3Njcm9sbFRvcDpwb3NpdGlvbn0sICc3NTAnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxpbmtTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAvLyBHZXQgdGhlIGxpbmsgaGFzaCB0YXJnZXQgc28gd2UgY2FuIGJyaW5nIGZvY3VzIHRvIGl0XHJcbiAgICAgICAgbGV0IGhhc2ggPSBhbmNob3JzW2FjdGl2ZUFuY2hvckluZGV4XS5oYXNoO1xyXG4gICAgICAgIC8vIGJyaW5nIGZvY3VzIHRvIHRoZSBpdGVtIHdlIGp1c3Qgc2Nyb2xsZWQgdG9cclxuICAgICAgICAkKGhhc2gpLmZvY3VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWYgdGhlIGNvbnRlbnQgY29udGFpbnMgYWNjb3JkaW9ucywgXHJcbiAgICAvLyByZWFkanVzdCBzZXR0aW5ncyB3aGVuIHRoZXJlIHN0YXRlIGNoYW5nZXMuXHJcbiAgICAkKCcuanMtYWNjb3JkaW9uLWxpbmsnKS5vbignY2xpY2snLGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZih0eXBlb2YgZGVib3VuY2VUaW1lciA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcik7XHJcbiAgICAgIH1cclxuICAgICAgZGVib3VuY2VUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2V0VmFyaWFibGVzKCk7XHJcbiAgICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgICAgICBhY3RpdmF0ZUxpbmsoKTtcclxuICAgICAgfSw0MDApO1xyXG4gICAgfSlcclxuXHJcbiAgICAkZWwuZmluZChcIi5qcy1zY3JvbGwtYW5jaG9ycy10b2dnbGVcIikub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICAgICAgJGVsLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYWtlIHRoZSBsaW5rcyBzdGlja3lcclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmKHR5cGVvZiBkZWJvdW5jZVRpbWVyID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVyKTtcclxuICAgICAgfVxyXG4gICAgICBkZWJvdW5jZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICBzZXRWYXJpYWJsZXMoKTtcclxuICAgICAgICBzZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGFjdGl2YXRlTGluaygpO1xyXG4gICAgICB9LDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgICAgYWN0aXZhdGVMaW5rKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWYXJpYWJsZXMoKSB7XHJcbiAgICAgIGxldCB0b3BPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgaGVhZGVyQnVmZmVyID0gMDtcclxuICAgICAgZWxIZWlnaHQgPSAkZWwub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcbiAgICAgIHVwcGVyTGltaXQgPSAkZWxQYXJlbnQub2Zmc2V0KCkudG9wO1xyXG4gICAgICBpc01vYmlsZSA9IGNoZWNrTW9iaWxlKCRlbCk7XHJcblxyXG4gICAgICBpZigkZWxQYXJlbnRbMF0uaGFzQXR0cmlidXRlKFwic3R5bGVcIikgJiYgIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgJGVsUGFyZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgIH1cclxuIFxyXG4gICAgICBpZihpc01vYmlsZSkge1xyXG4gICAgICAgIGhlYWRlckJ1ZmZlciA9ICQoJy5qcy1zdGlja3ktaGVhZGVyJykuaGVpZ2h0KCkgfHwgMDtcclxuICAgICAgICB1cHBlckxpbWl0IC09IGhlYWRlckJ1ZmZlcjtcclxuICAgICAgICB0b3BPZmZzZXQgPSBlbEhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbG93ZXJMaW1pdCA9IHVwcGVyTGltaXQgKyAkZWxQYXJlbnQub3V0ZXJIZWlnaHQodHJ1ZSkgLSAkZWwuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAvLyBsb2NhdGUgdGhlIHBvc2l0aW9uIG9mIGFsbCBvZiB0aGUgYW5jaG9yIHRhcmdldHNcclxuICAgICAgYW5jaG9ycyA9IG5ldyBBcnJheTtcclxuICAgICAgJGxpbmtzLmVhY2goZnVuY3Rpb24oaSxlKXtcclxuICAgICAgICBsZXQgJGVsID0gJCh0aGlzKSxcclxuICAgICAgICAgICRsaW5rID0gJGVsLmlzKCdhJykgPyAkZWwgOiAkZWwuZmluZCgnYScpLFxyXG4gICAgICAgICAgaGFzaCA9ICRsaW5rWzBdLmhhc2gsXHJcbiAgICAgICAgICBwb3NpdGlvbiA9ICQoaGFzaCkub2Zmc2V0KCkgPyAkKGhhc2gpLm9mZnNldCgpLnRvcCAtIGhlYWRlckJ1ZmZlciAtIHRvcE9mZnNldCA6IHVwcGVyTGltaXQ7XHJcblxyXG4gICAgICAgIGFuY2hvcnNbaV0gPSB7IGhhc2gsIHBvc2l0aW9uIH07XHJcblxyXG4gICAgICAgICRlbC5kYXRhKCdpbmRleCcsaSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gcmVjb3JkIHRoZSBudW1iZXIgb2YgYW5jaG9ycyBmb3IgcGVyZm9ybWFuY2VcclxuICAgICAgbnVtQW5jaG9ycyA9IGFuY2hvcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFBvc2l0aW9uKCkge1xyXG4gICAgICBsZXQgd2luZG93VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgYXR0ciA9ICRlbC5hdHRyKCdkYXRhLXN0aWNreScpLFxyXG4gICAgICAgICAgdG9wID0gYXR0ciAhPT0gJ3RvcCcgJiYgd2luZG93VG9wIDw9IHVwcGVyTGltaXQsIFxyXG4gICAgICAgICAgbWlkZGxlID0gYXR0ciAhPT0gJ21pZGRsZScgJiYgd2luZG93VG9wIDwgbG93ZXJMaW1pdCAmJiB3aW5kb3dUb3AgPiB1cHBlckxpbWl0LFxyXG4gICAgICAgICAgYm90dG9tID0gYXR0ciAhPT0gJ2JvdHRvbScgJiYgd2luZG93VG9wID49IGxvd2VyTGltaXQ7XHJcbiAgICAgIFxyXG4gICAgICBpZigkZWxQYXJlbnRbMF0uaGFzQXR0cmlidXRlKFwic3R5bGVcIikgJiYgIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgJGVsUGFyZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCEkZWxQYXJlbnRbMF0uaGFzQXR0cmlidXRlKFwic3R5bGVcIikgJiYgaXNNb2JpbGUgJiYgYXR0ciA9PT0gJ21pZGRsZScpIHtcclxuICAgICAgICAkZWxQYXJlbnQuY3NzKHsncGFkZGluZ1RvcCc6ZWxIZWlnaHR9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodG9wKSB7XHJcbiAgICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywndG9wJyk7XHJcblxyXG4gICAgICAgIGlmKGlzTW9iaWxlKXtcclxuICAgICAgICAgICRlbFBhcmVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgICAgZWxzZSBpZiAobWlkZGxlKSB7XHJcbiAgICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywnbWlkZGxlJyk7XHJcblxyXG4gICAgICAgIGlmKGlzTW9iaWxlKXtcclxuICAgICAgICAgICRlbFBhcmVudC5jc3MoeydwYWRkaW5nVG9wJzplbEhlaWdodH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgICAgZWxzZSBpZiAoYm90dG9tKSB7XHJcbiAgICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywnYm90dG9tJyk7XHJcblxyXG4gICAgICAgIGlmKGlzTW9iaWxlKXtcclxuICAgICAgICAgICRlbFBhcmVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlTGluaygpIHtcclxuICAgICAgLy8gZG8gd2UgaGF2ZSBtb3JlIHRoYW4gb25lIGFuY2hvclxyXG4gICAgICBpZihudW1BbmNob3JzIDwgMiB8fCBsaW5rU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGFuZCBvZmZzZXQgYnkgaGFsZiB0aGUgdmlldyBwb3J0XHJcbiAgICAgIGxldCB3aW5kb3dUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAod2luZG93LmlubmVySGVpZ2h0LzIpLFxyXG4gICAgICAgICAgY3VycmVudEFuY2hvciA9IGFjdGl2ZUFuY2hvckluZGV4O1xyXG4gICAgICBcclxuICAgICAgLy8gaXMgdGhlcmUgYSBwcmV2IHRhcmdldFxyXG4gICAgICAvLyBhbmQgXHJcbiAgICAgIC8vIGlzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBhYm92ZSB0aGUgY3VycmVudCB0YXJnZXRcclxuICAgICAgaWYoY3VycmVudEFuY2hvciA+IDAgJiYgd2luZG93VG9wIDwgYW5jaG9yc1thY3RpdmVBbmNob3JJbmRleF0ucG9zaXRpb24pIHsgXHJcbiAgICAgICAgLy8gbWFrZSB0aGUgcHJldiBsaW5rIGFjdGl2ZVxyXG4gICAgICAgIC0tYWN0aXZlQW5jaG9ySW5kZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlzIHRoZXJlIGEgbmV4dCB0YXJnZXRcclxuICAgICAgLy8gYW5kXHJcbiAgICAgIC8vIGlzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBiZWxvdyB0aGUgbmV4dCB0YXJnZXRcclxuICAgICAgZWxzZSBpZihjdXJyZW50QW5jaG9yIDwgbnVtQW5jaG9ycy0xICYmIHdpbmRvd1RvcCA+IGFuY2hvcnNbYWN0aXZlQW5jaG9ySW5kZXgrMV0ucG9zaXRpb24pIHsgXHJcbiAgICAgICAgLy8gbWFrZSB0aGUgbmV4dCBsaW5rIGFjdGl2ZVxyXG4gICAgICAgICsrYWN0aXZlQW5jaG9ySW5kZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50QW5jaG9yICE9PSBhY3RpdmVBbmNob3JJbmRleCkge1xyXG4gICAgICAgIC8vIG1vdmUgdGhlIGFjdGl2ZSBmbGFnXHJcbiAgICAgICAgJGVsLmZpbmQoJy4nICsgYWN0aXZlQ2xhc3MpLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAkbGlua3MuZXEoYWN0aXZlQW5jaG9ySW5kZXgpLmFkZENsYXNzKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLXV0aWwtbmF2JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGxldCBvcGVuQ2xhc3MgPSBcImlzLW9wZW5cIixcclxuICAgICAgICBjbG9zZUNsYXNzID0gXCJpcy1jbG9zZWRcIixcclxuICAgICAgICBzdWJtZW51Q2xhc3MgPSBcInNob3ctdXRpbG1lbnVcIixcclxuICAgICAgICAkcGFyZW50ID0gJCh0aGlzKSxcclxuICAgICAgICB3YWl0Rm9ySXQgPSBudWxsO1xyXG5cclxuICAgICQoJy5qcy1jbG9zZS1zdWItbmF2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICRwYXJlbnQuZmluZCgnLmpzLXV0aWwtbmF2LWNvbnRlbnQuJyArIG9wZW5DbGFzcyk7XHJcbiAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgICRwYXJlbnQuZmluZCgnLmpzLXV0aWwtbmF2LXRvZ2dsZSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudGRlZmF1bHQ7XHJcblxyXG4gICAgICBsZXQgb3BlbiA9ICQodGhpcykuaGFzQ2xhc3Mob3BlbkNsYXNzKSxcclxuICAgICAgICAkY29udGVudCA9ICQodGhpcykubmV4dCgnLmpzLXV0aWwtbmF2LWNvbnRlbnQnKSxcclxuICAgICAgICAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy11dGlsLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG5cclxuICAgICAgLy8gaGlkZSBvdGhlciBjb250ZW50XHJcbiAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgXHJcbiAgICAgIGlmKG9wZW4pIHsgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGFkZCBvcGVuIGNsYXNzIHRvIHRoaXMgaXRlbVxyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgIC8vIGFkZCBvcGVuIGNsYXNzIHRvIHRoZSBjb3JyZWN0IGNvbnRlbnQgYmFzZWQgb24gaW5kZXhcclxuICAgICAgJGNvbnRlbnQuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkY29udGVudFxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpXHJcbiAgICAgICAgICAuYWRkQ2xhc3Mob3BlbkNsYXNzKTtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3Moc3VibWVudUNsYXNzKVxyXG4gICAgICB9LCAuMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkcGFyZW50LmZpbmQoJy5qcy1jbG9zZS11dGlsLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG5cclxuICAgICAgaGlkZSggJCh0aGlzKS5jbG9zZXN0KCcuanMtdXRpbC1uYXYtY29udGVudCcpICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanMtY2xvc2Utc3ViLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy11dGlsLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG4gICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlKCRjb250ZW50KSB7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhzdWJtZW51Q2xhc3MpXHJcbiAgICAgICRwYXJlbnQuZmluZChcIi5cIiArIG9wZW5DbGFzcykucmVtb3ZlQ2xhc3Mob3BlbkNsYXNzKTtcclxuICAgICAgJGNvbnRlbnRcclxuICAgICAgICAucmVtb3ZlQ2xhc3Mob3BlbkNsYXNzKVxyXG4gICAgICAgIC5hZGRDbGFzcyhjbG9zZUNsYXNzKTtcclxuXHJcbiAgICAgIGlmKHdhaXRGb3JJdCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh3YWl0Rm9ySXQpO1xyXG4gICAgICB9XHJcbiAgICAgIHdhaXRGb3JJdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkY29udGVudC5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiJdfQ==