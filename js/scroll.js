	var zmienna = 0;
var mobileViewport = window.matchMedia("screen and (max-width: 599px)");

if(mobileViewport.matches) {
    // viewport <= 480px
	zmienna =1;
	
} else {
    // viewport > 480px
	
}
$("a[href='#top']").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
  });
  
  if(zmienna == 0){
  $("a[href='#uslugi']").click(function() {
     $("html, body").animate({ scrollTop: 770 }, "slow");
     return false;
  });
  }
   if(zmienna == 0){
  $("a[href='#naszapraca']").click(function() {
     $("html, body").animate({ scrollTop: 1550 }, "slow");
     return false;
  });
   }
    if(zmienna == 0){
  $("a[href='#onas']").click(function() {
     $("html, body").animate({ scrollTop: 2430 }, "slow");
     return false;
  });
	}
	 if(zmienna == 0){
  $("a[href='#mapa']").click(function() {
     $("html, body").animate({ scrollTop: 3106 }, "slow");
     return false;
  });
	 }
	  if(zmienna == 0){
 $("a[href='#kontakt']").click(function() {
     $("html, body").animate({ scrollTop: 3950 }, "slow");
     return false;
  });
	  }
	  
//////// MOBLINA

if(zmienna == 1){
  $("a[href='#uslugi']").click(function() {
     $("html, body").animate({ scrollTop: 620 }, "slow");
     return false;
  });
  }
    if(zmienna == 1){
  $("a[href='#naszapraca']").click(function() {
     $("html, body").animate({ scrollTop: 1780 }, "slow");
     return false;
  });
   }
     if(zmienna == 1){
  $("a[href='#onas']").click(function() {
     $("html, body").animate({ scrollTop: 3220 }, "slow");
     return false;
  });
	}
		 if(zmienna == 1){
  $("a[href='#mapa']").click(function() {
     $("html, body").animate({ scrollTop: 3920 }, "slow");
     return false;
  });
	 }
	   if(zmienna == 1){
 $("a[href='#kontakt']").click(function() {
     $("html, body").animate({ scrollTop: 4650 }, "slow");
     return false;
  });
	  }
  