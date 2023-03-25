$(document).ready(function (){
    // Header Style App
    // $("header li").on("click" , function(){
    //     $(this).addClass("active").siblings().removeClass("active")
    // })
    $("header li a").on("click" , function(){
        $(this).addClass("active").parent().siblings().find("a").removeClass("active")
    })

    //Window app
    var homeOffset = $(".home").offset().top
    $(window).scroll(function(){
        var windowScroll = $(this).scrollTop()
        
       if( windowScroll > 200){
            $("header").addClass("changeHeader")
        } else {
            $("header").removeClass("changeHeader")
        }
    })

    //Dynamic Taps
    // $("header a").click(function(){
    //     var name = $(this).attr('id');
    //     $('body section').hide()
    //     $('.' + name).fadeIn()
    // })

    //Filter Image
    $("div.tabs button").click(function(){
        var myClass = $(this).attr('class');
        if(myClass == "all") $('.images img').fadeIn()
        else{
        $('.images img').hide()
        $('.images .' + myClass).show() 
        }
    })

    //Smooth scroll header app
    var headerHeight = $('header').height()
    $('header a').click(function(){
        var id = $(this).attr('id')
        $('body,html').animate({
            scrollTop: $('.' + id).offset().top - headerHeight
        })
    })

    //scroll to top app
    $(window).scroll(function(){
       if($(this).scrollTop() > 200){
        $('.scrollTop').show()
       } else{
        $('.scrollTop').hide()
       }
    })

    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },800)
    })

    //calculate | countDown characters of textarea  app
    $('textarea').keyup(function(e){
        if(e.target.value.length >= 100){
            e.target.value = e.target.value.supstr(0,100)   
        }
    })
})// end JQuery             