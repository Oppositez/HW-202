//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){

$("#box").hide();

$("#button").click(function(){
$("#box").toggle();
});

$("#box").click(function(){
$(".square").addClass("animate-box");
setTimeout(function() {
 $(".square").removeClass("animate-box");  
} , 5000);

});

$("#name").click(function(){
    $("#box").css("background-color", "purple")
    $("#box").css("border", "1px solid color")
    $("#box").css("border-radius", "50%")
});

$("#image").click(function(){
    $("#box").hide();
    $("#box").css("background-color", "cyan")
    $(".square").removeClass("animate-box");
    $("#box").css("border", "0px solid color")
    $("#box").css("border-radius", "0%")
    });

    


})