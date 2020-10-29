
 function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
      navs.forEach(nav => 
        nav.classList.toggle('Navbar__ToggleShow')
        );
      navs.forEach((link, index) => {
          link.style.animation = `fadeIn 0.5s ease forwards ${index / 7}s`;
        })
    }
    //animation: fadeIn 0.5s ease forwards;
  document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

  $(".all-projects div").hide().each(function(i) {
    $(this).delay(i*1000).fadeIn(1000);
  });

  
  if (!Modernizr.svg) {
    $(".logo img").attr("src", "images/logo.png");
  }
//   $(document).ready(function(){
//     $(".Navbar__Link-toggle").click(function(){
//       $(".Navbar__ToggleShow").slideToggle();
//     });
//  });
  // $(document).ready(function(){
  //   $('.Navbar__Link-toggle').click(function() {
  //       $('.Navbar__ToggleShow').toggle();
  //   });
  //   });


// ===== sliding down project text ==== /
  // $(document).ready(function(){
  //   $( ".hover").hover(function(){
  //    $(".slidedown").slideDown("slow")
  //   },function() {$(".slidedown").finish().css('display','none')}
  //   );
  // });


// ===== Scroll to Top ==== /
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});
