
 function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => 
      nav.classList.toggle('Navbar__ToggleShow'));
  }
  document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);



// ===== sliding down project text ==== /
  $(document).ready(function(){
    $( ".all-projects").find("div").hover(function(){
     $(".slidedown").slideDown("slow")
    },function() {$(".slidedown").finish().css('display','none')}
    );
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
