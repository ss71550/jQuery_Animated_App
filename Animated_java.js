$(document).ready(function (){
  $("#start").click(function () {
   $(".maze").animate({
    height: "400px",
    width: "600px"
    });
  });

  $(document).keydown(function(e){
    if (e.keycode=="40"){
    $(".block").animate({
       top: "+=20"
  });
    }
    if (e.keycode=="38") {
     $(".block").animate({
       top: "-=20"
  });
    }
  if (e.keycode=="39") {
     $(".block").animate({
       left: "+=20"
  });
  }
  if (e.keycode=="37") {
     $(".block").animate({
       left: "-=20"
  });
  }
  });
})
