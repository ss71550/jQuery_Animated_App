$(document).ready(function (){
  $("#start").click(function () {
   $(".maze").animate({
    height: "400px",
    width: "600px"
    });
  });

  $(document).keydown(function(e){
    if (e.keyCode==40){
    $(".block").animate({
       top: "+=20"
  });
    }
    if (e.keyCode==38) {
     $(".block").animate({
       top: "-=20"
  });
    }
  if (e.keyCode==39) {
     $(".block").animate({
       left: "+=20"
  });
  }
  if (e.keyCode==37) {
     $(".block").animate({
       left: "-=20"
  });
  }
  });
})
