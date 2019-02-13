/*
 * OPAL - Exclusive Coming Soon Template
 * Build Date: April 2016
 * Last Update: November 2017
 * Author: Madeon08
 * Copyright (C) 2016 Madeon08
 * This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
 */

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Equal height box
    3. Action Buttons
    4. Scroll plugins
    5. Newsletter
    6. PhotoSwipe Gallery Init
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function() {
  "use strict";

  setTimeout(function() {
    $("#loading")
      .addClass("animated-middle slideOutUp")
      .removeClass("opacity-0");
  }, 1000);

  setTimeout(function() {
    $("#home")
      .addClass("animated-middle fadeInUp")
      .removeClass("opacity-0");
  }, 800);

  setTimeout(function() {
    setTimeout(function() {
      $(".text-intro").each(function(i) {
        (function(self) {
          setTimeout(function() {
            $(self)
              .addClass("animated-middle fadeInUp")
              .removeClass("opacity-0");
          }, i * 150 + 150);
        })(this);
      });
    }, 0);
  }, 1000);

  setTimeout(function() {
    $("#home").removeClass("animated-middle fadeInUp");
  }, 2001);
});

/* ------------------------------------- */
/* 2. Equal height box ................. */
/* ------------------------------------- */

/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container) {
  var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
  $(container).each(function() {
    $el = $(this);
    $($el).height("auto");
    topPostion = $el.position().top;

    if (currentRowStart != topPostion) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest =
        currentTallest < $el.height() ? $el.height() : currentTallest;
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};

$(window).load(function() {
  "use strict";
  equalheight(".equalizer");
});

$(window).resize(function() {
  "use strict";
  equalheight(".equalizer");
});

$(document).ready(function() {
  "use strict";

  /* ------------------------------------- */
  /* 3. Action Buttons ................... */
  /* ------------------------------------- */

  $("a#open-more-info").on("click", function() {
    $(".layer-left").toggleClass("hide-layer-left");
    $("#home").toggleClass("minimize-left");
    $("#right-side").toggleClass("hide-right");
    $(".border-right-side").toggleClass("hide-border");
    $("#close-more-info").toggleClass("hide-close");
    $(".mCSB_scrollTools").toggleClass("mCSB_scrollTools-left");
    setTimeout(function() {
      $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side", {
        scrollInertia: 500,
        callbacks: false
      });
    }, 350);
  });

  $(".close-right-part").on("click", function() {
    $(".layer-left").addClass("hide-layer-left");
    $("#right-side").addClass("hide-right");
    $("#home").removeClass("minimize-left");
    $(".border-right-side").addClass("hide-border");
    $("#close-more-info").addClass("hide-close");
    $(".mCSB_scrollTools").removeClass("mCSB_scrollTools-left");
    setTimeout(function() {
      $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side", {
        scrollInertia: 500,
        callbacks: false
      });
    }, 350);
  });

  /* ------------------------------------- */
  /* 4. Scroll plugins ................... */
  /* ------------------------------------- */

  $(function() {
    $("body").bind("mousewheel", function(event) {
      event.preventDefault();
      var scrollTop = this.scrollTop;
      this.scrollTop = scrollTop + event.deltaY * event.deltaFactor * -1;
      //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
    });
  });

  var ifTouchDevices = navigator.userAgent.match(
    /(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/
  );

  // Tooltips used on YouTube buttons
  if (window.matchMedia("(min-width: 1025px)").matches) {
    $(function() {
      $("[data-toggle='tooltip']").tooltip();
    });
  }
});
