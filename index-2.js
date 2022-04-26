// Script for carousel 

$("#carousel-1").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-1-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item" && ".col-lg-4")
            .eq(i)
            .appendTo(".carousel-1");
        } else {
          $(".carousel-item" && ".col-lg-4")
            .eq(0)
            .appendTo(".carousel-1");
        }
      }
    }
  });

  $("#carousel-2").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-2-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-2-item" + ".col-lg-4")
            .eq(i)
            .appendTo(".carousel-2");
        } else {
          $(".carousel-2-item" + ".col-lg-4")
            .eq(0)
            .appendTo(".carousel-2");
        }
      }
    }
  });

  $("#carousel-3").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-3-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-3-item" + ".col-lg-4")
            .eq(i)
            .appendTo(".carousel-3");
        } else {
          $(".carousel-3-item" + ".col-lg-4")
            .eq(0)
            .appendTo(".carousel-3");
        }
      }
    }
  });

  $("#carousel-4").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-4-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-4-item" + ".col-lg-4")
            .eq(i)
            .appendTo(".carousel-4");
        } else {
          $(".carousel-4-item" + ".col-lg-4")
            .eq(0)
            .appendTo(".carousel-4");
        }
      }
    }
  });

  $("#carousel-5").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-5-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-5-item" + ".col-lg-4")
            .eq(i)
            .appendTo(".carousel-5");
        } else {
          $(".carousel-5-item" + ".col-lg-4")
            .eq(0)
            .appendTo(".carousel-5");
        }
      }
    }
  });

  $("#carousel-6").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-6-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-6-item" + ".col-lg-4")
            .eq(i)
            .appendTo(".carousel-6");
        } else {
          $(".carousel-6-item" + ".col-lg-4")
            .eq(0)
            .appendTo(".carousel-6");
        }
      }
    }
  });

  $("#carousel-7").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-7-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-7-item" + ".col-lg-4")
            .eq(i)
            .appendTo(".carousel-7");
        } else {
          $(".carousel-7-item" + ".col-lg-4")
            .eq(0)
            .appendTo(".carousel-7");
        }
      }
    }
  });

  $("#carousel-8").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-8-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-8-item" + ".col-lg-4")
            .eq(i)
            .appendTo(".carousel-8");
        } else {
          $(".carousel-8-item" + ".col-lg-4")
            .eq(0)
            .appendTo(".carousel-8");
        }
      }
    }
  });

  $("#carousel-9").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-9-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-9-item" + ".col-lg-4")
            .eq(i)
            .appendTo(".carousel-9");
        } else {
          $(".carousel-9-item" + ".col-lg-4")
            .eq(0)
            .appendTo(".carousel-9");
        }
      }
    }
  });