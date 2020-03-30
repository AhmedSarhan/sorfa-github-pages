// when the x icon is clicked
$(".remove").click(function(){
    // removes the card
    $(this).parent('.card').remove();
});

$(".remove").click(function(){
  // removes the card

  $(this).parent('.cart').remove();
});
// more meals slider



$('.responsive').slick({
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots:true,
          autoplaySpeed: 2000
                }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// creat my custom upload image 
function getFile() {
  document.getElementById("upfile").click();
}

function sub(obj) {
  var file = obj.value;
  var fileName = file.split("\\");
  document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
  document.myForm.submit();
  event.preventDefault();
}
  // display the image of the form

  function previewFile() {
    var preview = document.querySelector('#profileimage');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }


  // add class active when an order is clicked
 
// $('.orders-types').on('click', 'li', function() {
//   $('.orders-types li.active').removeClass('active');
//   $(this).addClass('active');
// });

$('.order a').click(function() {
  alert('clicked');
  $('.order.active').removeClass('.active');
  $(this).addClass('.active');
});


// $('.order').on('click', 'li', function() {
//   alert('clicked');
//   $('.orders-types li.active').removeClass('.active');
//   $(this).addClass('.active');
// });

// $(function() {
//   $('.order').click(function() { // when a .myDiv is clicked
//     $('.order').not(this).removeClass('active');
//     $(this).addClass('active');
//   });
// });

// function myFunction(e) {
//   if (document.querySelector('.orders-types li.active') !== null) {
//     document.querySelector('.orders-types li.active').classList.remove('active');
//   }
//   e.target.className = "active";
// }