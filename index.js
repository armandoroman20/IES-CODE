// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
// const images = document.querySelector('.row').children;
// const totalImages = column.length;
// let index = 0;

// prev.addEventListener('click', () => {
//   nextImage('next');
// })

// next.addEventListener('click', () => {
//   nextImage('prev');
// })

// function nextImage(direction) {
//   if(direction == 'next') {
//     index++;
//     if(index == totalImages) {
//       index = 0;
//     }
//   } else {
//     if(index == 0) {
//       index = totalImages - 1;
//     } else {
//       index--;
//     }
//   }

//   for(let i = 0; i < column.length; i++) {
//     images[i].classList.remove('main');
//   }
//   images[index].classList.add('main');
// }

  // function active_course() {
  //   if ($(".active_course").length) {
  //     $(".active_course").owlCarousel({
  //       loop: true,
  //       margin: 20,
  //       items: 3,
  //       nav: true,
  //       autoplay: 2500,
  //       smartSpeed: 1500,
  //       dots: false,
  //       responsiveClass: true,
  //       thumbs: true,
  //       thumbsPrerendered: true,
  //       navText: ["<img src='https://colorlib.com/preview/theme/edustage/img/prev.png'>", "<img src='https://colorlib.com/preview/theme/edustage/img/next.png'>"],
  //       responsive: {
  //         0: {
  //           items: 1,
  //           margin: 0
  //         },
  //         991: {
  //           items: 2,
  //           margin: 30
  //         },
  //         1200: {
  //           items: 3,
  //           margin: 30
  //         }
  //       }
  //     });
  //   }
  // }
  // active_course();