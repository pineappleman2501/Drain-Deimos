//$(function () {
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 100) { //100px以上スクロールした固定
//$('#menu').addClass('fixed');
//            $('#logo').fadeIn(100);
//        } else {
//            $('#menu').removeClass('fixed');
//            $('#logo').fadeout();
//        }
//    });
//});




$(window).on('load resize', function () {
            var winW = $(window).width();
            var devW = 767;
            if (winW <= devW) {
                //767px以下の時の処理
                //何もしない
                ;

            } else {
                768 pxより大きい時の処理
                $(window).scroll(function () {
                    if ($(window).scrollTop() > 100) {
                        $('header').addClass('scroll');
                    } else {
                        $('header').removeClass('scroll');
                    }
                });

                //        $(function () {
                //            "use strict";
                //            var flag = "view";
                //
                //            $(window).on("scroll", function () {
                //                // scrollTop()が「200」より大きい場合
                //                //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
                //                //消えていくタイミングでヘッダが表示されて固定される。  
                //
                //                if ($(this).scrollTop() > 500) {
                //                    if (flag === "view") {
                //                        $("header-menu").stop().css({
                //                            opacity: '1.0'
                //                        }).animate({
                //                            //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
                //                            top: 0
                //                        }, 500);
                //
                //                        flag = "hide";
                //                    }
                //                } else {
                //                    if (flag === "hide") {
                //                        $("header-menu").stop().animate({
                //                            top: "-220px",
                //                            opacity: 0
                //                        }, 500);
                //                        //上にあがり切ったら透過度を0%にして背景が生きるように
                //                        //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
                //                        flag = "view";
                //                    }
                //                }
                //            });
                //        });
                //
                //    }
                //});
