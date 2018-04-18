var zmienna = true;
$(document).ready(function(){
$("#przyciskmenu").click(function(){
    if(zmienna == true)
    {
$('#przyciskmenu').fadeOut(500, function() {
        $('#przyciskmenu').attr("src","zdjecia/close2.png");
        $('#przyciskmenu').fadeIn(500);
    });

$("#rozwinietemenu").fadeIn("slow");
 
    zmienna = false;
}else
 {

$('#przyciskmenu').fadeOut(500, function() {
        $('#przyciskmenu').attr("src","zdjecia/menuikona.png");
        $('#przyciskmenu').fadeIn(500);
    });

    $("#rozwinietemenu").fadeOut("slow");
zmienna = true;
 }
});
});