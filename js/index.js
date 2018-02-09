//add display none
$(document).ready(function(){
//click on the X
	$("#close").click(function(){
 $("#form").hide();
	$(".ad,#close").addClass("intro");	
	});
//press button 
	$(".button").click(function(){
 $("#form").show();
	$("#demo,p.ad,div.cls1,a#prev,a#next,div.cls2").hide();
	$("#on").removeClass("ad")
	$("#close,#form").removeClass("intro");
	$(".button").hide();	
	});
//close ad
	$("#close").click(function(){
 $(".ad").hide();
 $("#demo,p.ad,div.cls1,a#prev,a#next").show();
	$(".uno").addClass("intro");
	$(".button").show();	
	});
//color change when the mouse are over it
	$("#close").mouseover(function(){
 $("#close").css("color", "red");
});
$("#close").mouseout(function(){
$("#close").css("color", "green");    
});  
//	make slide work
    $(".divs div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    $("#next").click(function(){
        if ($(".divs div:visible").next().length != 0)
            $(".divs div:visible").next().show().prev().hide();
        else {
            $(".divs div:visible").hide();
            $(".divs div:first").show();
        }
        return false;
    });
    $("#prev").click(function(){
        if ($(".divs div:visible").prev().length != 0)
            $(".divs div:visible").prev().show().next().hide();
        else {
            $(".divs div:visible").hide();
            $(".divs div:last").show();
        }
        return false;
    });
});
// slides	content 
var x = document.getElementsByClassName("cls1");
    x[0].innerHTML = "yo vivo en el primer cuarto que te encuentras cuando entras soy la persona encargada de cobrarle a los demas, fui el primero en llegar 
";
var x = document.getElementsByClassName("cls2");
    x[0].innerHTML = "enfrente la sala";
var x = document.getElementsByClassName("cls3");
    x[0].innerHTML = "y en el centro un pasillo";
	//content
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
