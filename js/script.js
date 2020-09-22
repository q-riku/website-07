/**************************** loading *****************************/
/******************************************************************/
$(function(){
    setTimeout(function(){
        $(".loading").fadeOut(600,function(){
            $(this).hide();
        });
    },3200);
});

/****************************** modal *****************************/
/******************************************************************/
$(function(){
    $("div.modal").hide();
    $("div.photo").hide();

    $("div.contents").click(function(){
        var imageSrc = $(this).children(".thumb").children("img").attr("src");
        var imageAlt = $(this).children(".thumb").children("img").attr("alt");

        $("div.modal").fadeIn(600);
        $("div.line").animate({width:'100%'},600);

        setTimeout(function(){
            $("div.photo").fadeIn();
        },600);

        $("div.photo a").attr("href", imageSrc);
        $("div.photo a img").attr({"src":imageSrc,"alt":imageAlt});

    });

    $("div.closeMark, div#bg").click(function() { 
        $("div.modal").fadeOut(600,function(){
            $("div.line").css("width","0");
            $("div.photo").hide();
        });
    });
});

/***************************** menuBtn ****************************/
/******************************************************************/
$(function(){
    $("div.menuBtn").click(function(){
        $(this).toggleClass("change");
        $("header nav").slideToggle();
    });
});