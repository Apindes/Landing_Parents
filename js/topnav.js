/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var x = document.getElementById("topNav");
    function navToggle() {
        
        if (!$(x).hasClass("opened")) {
            $(x).addClass('opened');
           
        } else {
            $(x).removeClass("opened");
        }
    }
    $(".menu-toggler").on("click",function(e){
        navToggle();
    });
    
    $(window).resize(function() {
	if ($( window ).width() < 800) {
            x.classList.add("responsive"); 
            $('.logo').css("margin-top","0");
	}else{
            x.classList.remove("responsive");   
            $('.logo').css("margin-top","20px");
        }
    });
    
});
