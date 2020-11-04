
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
  
  // ===== Scroll to next home section ==== /
  $(document).ready(function() {
    $(".more-button").click(function() {
      $("body,html").animate(
        {
          scrollTop: $(".intro-content").offset().top -120
        },
        200 //speed
      );
    });
  });
 
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
