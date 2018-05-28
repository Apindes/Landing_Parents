/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function(){
	        
    var delay = 3000,
    callback = null;
    $section = jQuery('.section8');
	        
    $display = jQuery(".display");
    $arrow = jQuery(".arrow");
    $picts = $section.find(".img");
                
    $(".slider, .arrow").hover(function(e){
        $arrow.css("margin-left","0").css("margin-right","0");
    },function(e){
        $(".left-arrow").css("margin-left","-100px");
        $(".right-arrow").css("margin-right","-100px");
    });
	        
    $arrow.on("click",function(e){
        delay = 10000;
        clearInterval(callback);
        clicks(this);
        initSlider();
    });
	        
    var clicks  = function(el){
        $this = jQuery(el);
        $len = $picts.length;
        if($this.hasClass("left-arrow")){
            var last = $picts.splice($len-1, 1)[0];
            $picts.splice(0, 0, last);
        }else{
            var first = $picts.splice(0, 1)[0];
            $picts.splice($len-1, 0, first);
        }
	            
        $section.find(".img").removeClass("active");
	           
        jQuery($picts.get(0)).addClass("active");

    }
	        
        var initSlider = function(){            
            callback = setInterval(function(e){clicks($section.find(".img.active"));},delay);
            if(delay > 3000) delay = 3000;
        }
        initSlider();
	        
	$('#topNav .nav-item').click(function(){
            $id = $(this).attr("id");
            
	    $('html, body').animate({ scrollTop: jQuery(`#section${$id}`).offset().top + 20 }, 1000);
	    return false;
	});
        
        $('.section6 button').click(function(){
            $id = $(this).data("id");
            
	    $('html, body').animate({ scrollTop: jQuery(`#section${$id}`).offset().top + 20 }, 1000);
	    return false;
	});

    var manual= false; 
    var slideIndex = 1;
    var delay2 = 3000;
    
    var ns = document.getElementsByClassName("navs");
    var dots = document.getElementsByClassName("nav-block");
    var dots2 = document.getElementsByClassName("nav-section");
    var dots3 = document.getElementsByClassName("mob-item-nav");
    
    var slides = document.getElementsByClassName("bs-image");
    var slides2 = document.getElementsByClassName("ss-image");
    
    var timeout = null;
    
    function showSlide(el){
        if(timeout) clearTimeout(timeout);
//        if(interval) clearInterval(interval);
        slideIndex = $(el).index();
        
        $id = $(el).data("id");
        $(slides).removeClass("active");
        $(slides2).removeClass("active");
        
        $('.bs-image[data-id="'+$id+'"]').addClass("active");
        $('.ss-image[data-id="'+$id+'"]').addClass("active");
        manual = true;
    }
                    
    jQuery(ns).on("click", function(e){
        delay2 = 10000;
        var ind = $(this).index();
        ind+=1;
        $(ns).removeClass("active");
        $navs = $(".navs[data-id='"+ind+"']")
        $navs.addClass("active");
        showSlide(this);
    });
                    
    showSlides(slideIndex);
                    
    function plusSlides(n){
        showSlides(slideIndex += n);
    }
                    
    function currentSlide(n){
        showSlides(slideIndex = n);
    }
                    
    function showSlides(n) {
        var i;
                      
        if (n > slides.length) {slideIndex = 1;}     
        
        if (n < 1) {slideIndex = slides.length;}
       
        $(".bs-image").removeClass("active");
        $(".ss-image").removeClass("active");
        
        $(dots).removeClass("active");
        $(dots2).removeClass("active");
        $(dots3).removeClass("active");
        
        var slide = slides[slideIndex-1];
        var s_slide = slides2[slideIndex-1];
        
        dots[slideIndex-1].className  += " active";
        $(dots2[slideIndex-1]).addClass("active");
        $(dots3[slideIndex-1]).addClass("active");
            
        $(slide).addClass("active");
        $(s_slide).addClass("active");
    }
        
        var i=1;
        var interval = null;
        interval = setInterval(function(){
            if(!manual)
                plusSlides(i); 
            else{
                timeout = setTimeout(plusSlides(i), delay2);
                manual= false;
            }
        },delay );
                

 });

