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