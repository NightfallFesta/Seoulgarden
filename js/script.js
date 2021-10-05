$(document).ready(function () {
    $("div#facilitie>div#facmain>div#factitle>ul>li:first-child>div").addClass("on");
    $("div#facilitie>div#facmain>div#factitle>ul>li").mouseover(function () {
        $("div#facilitie>div#facmain>div#factitle>ul>li>div").removeClass();
        $(this).find(">div").addClass("on");
    })

    $("footer>div#familysite>ul").slideUp();
    var a = 0;
    $("footer>div#familysite>button").click(function () {
        if (a == 0) {
            $("footer>div#familysite>ul").slideDown();
            a = 1;
        } else {
            $("footer>div#familysite>ul").slideUp();
            a = 0;
        }
    })

    $("header>div#hdwrap>div#gnb>ul").slideUp();
    var c = 0;
    $("header>div#hdwrap>div#berger>a").click(function () {
        if (c == 0) {
            $("header>div#hdwrap>div#gnb>ul").slideDown();
            c = 1;
        } else {
            $("header>div#hdwrap>div#gnb>ul").slideUp();
            c = 0;
        }
    })



    var b = 0;
    $("header>div#hdwrap>div#berger>a").click(function () {
        if (b == 0) {
            $("header>div#hdwrap>div#berger>a").addClass("is-open");
            b = 1;
        } else {
            $("header>div#hdwrap>div#berger>a").removeClass("is-open");
            b = 0;
        }
    })

    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });


    $("div#facilitie>div#facevent>figure>div>img").mouseover(function () {
        $(this).find("+a>img").addClass("imgon")
    })
    $("div#facilitie>div#facevent>figure>div").mouseleave(function () {
        $("div#facilitie>div#facevent>figure>div>a>img").removeClass("imgon")
    })

})
