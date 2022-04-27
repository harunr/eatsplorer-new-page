;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('.main-wrap input:text,.main-wrap input:password,.main-wrap textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        })
        $('.main-wrap input:text,.main-wrap input:password,.main-wrap textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.

        //this function for selectrics
        if ($("select.styled-select").length) {
            $('select.styled-select').selectric();
        }
                
        
        //var SectionTop = $(".food-destination").offset().top - 0
        
       if($(window).width() > 767){
            var $pos_elements = $('.parallax-section-wrap');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($pos_elements, function() {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if (element_top_position <= window_bottom_position) {
                        $element.addClass('stratParallax');
                    } else {
                        $element.removeClass('stratParallax');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
        
        
            $(window).scroll(function(){

                var wScroll = $(this).scrollTop()

                $(".stratParallax .paralux-thumb").css({
                    "transform" : "translate(0px, -" + wScroll/ 50 + "%)"
                })

            })
        
       }
                
        
        $("#scrollbottom").click(function(){
            //console.log("I am clicked")
            if($(window).width() > 767){
                $("html, body").stop(true, true).animate({
                    scrollTop: $("#after-hero-section").offset().top - 0
                }, 500, 'easeInOutCubic');
            }
            else{
                $("html, body").stop(true, true).animate({
                    scrollTop: $("#after-hero-section").offset().top - 57
                }, 500, 'easeInOutCubic');
            }
        })

        //this function for slick carousel wrap
        if ($('.service-item-wrap').length) {
            $('.service-item-wrap').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                responsive: [
                    /*{
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        }
                    },*/
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }
        
        
        //this is custom nav slick
        if($('.testimonial-figure-wrap').length){
            $('.testimonial-figure-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.testimonial-slider-wrap',
                centerPadding: '0px'
            });
            $('.testimonial-slider-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.testimonial-figure-wrap',
                dots: false,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: '0px'
            });
        }

        //this function for mobile 
        
        
        if($(window).width() < 767 ){
            $('#menu-icon').click(function(){
                $('.main-menu').slideToggle(500);
            });

        }
           
        //this add class to body
        if($('.inner-culinary-content').length){
            $('body').addClass('body-content');
        }
        
        $(".filter-btn").click(function(){
            $(this).parent().find(".filter-item-wrap").slideToggle()
            $(this).toggleClass("active")
        })
        
        
     /*   
        $(".tab-content-item-wrap .tab-content-item").hide()
        $(".tab-content-item-wrap .tab-content-item").eq(0).show()
        
        $(".tab-navigation ul li").each(function(i){
            $(this).click(function(){
                if( $(this).hasClass("active") ) return false
                else{
                    $(".tab-navigation ul li").removeClass("active")
                    $(this).addClass("active")
                    $(".tab-content-item-wrap .tab-content-item").hide()
                    $(".tab-content-item-wrap .tab-content-item").eq(i).show()
                }
            })
        })*/
        
        
        $("#des-tabs-nav li").removeClass("active")
        $("#des-tabs-nav li").eq(0).addClass("active")
        $(".des-tab-content-wrap .des-tab-item").hide()
        $(".des-tab-content-wrap .des-tab-item").eq(0).show()
        
        $("#des-tabs-nav li").each(function(i){
            $(this).click(function(){
                if( $(this).hasClass("active") ) return false
                else{
                    $("#des-tabs-nav li").removeClass("active")
                    $(this).addClass("active")
                    $(".des-tab-content-wrap .des-tab-item").hide()
                    $(".des-tab-content-wrap .des-tab-item").eq(i).show()
                }
            })
        })
        
        
         $("#site-navigation a").click(function(e){
             e.preventDefault()
             var $thisLocation = $(this).attr('href')
             
             $('html, body').animate({
                scrollTop: $($thisLocation).offset().top - 0
            }, 1000);
             
         })
        
    }) // End ready function.
    
    $(window).load(function(){
        // This function for scroll animation
        if ($(window).width() >  767){
            var $animation_elements = $('.animate');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($animation_elements, function() {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if (element_top_position <= window_bottom_position) {
                        $element.addClass('in-view');
                    } else {
                        $element.removeClass('in-view');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
        }  
        // End animation function
        
    })
    
    $(window).load(function () {
        // Begin common slider
        if ($('#hero-slide').length == 0) return false

        $('#hero-slide').flexslider({
            animation: "slide",
            slideshow: false,
            directionNav: true,
            controlNav: false,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        })
        $('div.slider-wrap video').trigger('play');
        
        $("body").addClass("pageloaded")
        $("#preloader").delay(3500).fadeOut(function(){
            $("body").addClass('pageloadingComplite')
        })

    })

    $(window).load(function () {
        // Begin common slider
        if ($('.tab-content-wrap').length == 0) return false

        $('.tab-content-wrap').flexslider({
            animation: "fade",
            slideshow: false,
            directionNav: false,
            controlNav: true,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            manualControls: "#custom-nav li",
            /*controlsContainer: ".tab-wrap",*/
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        })
        $('div.slider-wrap video').trigger('play');

    })

    $(window).load(function () {
        // Begin common slider
        if ($('.info-content').length == 0) return false

        $('.info-content').flexslider({
            animation: "slide",
            slideshow: false,
            directionNav: true,
            controlNav: false,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        })
        $('div.slider-wrap video').trigger('play');

    })


    $(window).load(function () {
        
        //this for testimonial
/*
        if ($('.testimonial-slider-wrap').length == 0) return false
        
        $('.testimonial-slider-wrap').flexslider({
            animation: "slide",
            slideshow: true,
            directionNav: true,
            controlNav: false,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');
            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        });
*/

        /*$('div.slider-wrap video').trigger('play');*/

    })

    $(window).load(function () {
        // Begin common slider
        if ($('.slider-wrap').length == 0) return false

        $('.slider-wrap').flexslider({
            animation: "slide",
            slideshow: false,
            directionNav: true,
            controlNav: false,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            manualControls: "#custom-nav li",
            /*controlsContainer: ".tab-wrap",*/
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        })
        $('div.slider-wrap video').trigger('play');

    })
    
    $(window).load(function () {
        // Begin common slider
        if ($('.tab-content-wrap').length == 0) return false

        $('.tab-content-wrap').flexslider({
            animation: "fade",
            slideshow: false,
            directionNav: false,
            controlNav: true,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            manualControls: "#custom-nav li",
            /*controlsContainer: ".tab-wrap",*/
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        })
        $('div.slider-wrap video').trigger('play');

    })

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})