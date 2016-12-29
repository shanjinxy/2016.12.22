$(function () {

    $(".page6button img").click(function () {

        ga('send', 'event', { eventCategory: 'Top10涨跌继续挑战',
            eventAction: 'click',
            eventLabel: 'Top10涨跌之最'});
    })
    $(".page11 .download").click(function (e) {
        e.preventDefault();
        ga('send', 'event', {
            eventCategory: 'Top10涨跌立即下载点击量',
            eventAction: 'click',
            eventLabel: 'Top10涨跌之最'}
        );
        setTimeout(function () {
            window.location.href="http://bao.wallstreetcn.com/static/app.html?from=topzd";
        },500)
    })
    //首页
    // 开启定时动画效果
    setTimeout(function () {
        $(".page0").addClass('current');
    },1000)


    //首页按钮点击
    $(".page0box2 img").click(function () {
        $(".page0").hide();
        $(".page1").show();
    })

    //page1按钮点击

    // 计数器 count
    var count =0;

    $(".page1 .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");
        setTimeout(function () {
            $(".page1").hide();
            $(".page2").show();
        },500)
        if($(this).hasClass('active')){
            count++;
        }

        // console.log(count);
    })


    //page2 按钮点击

    $(".page2 .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");
        setTimeout(function () {
            $(".page2").hide();
            $(".page3").show();
        },500)
        if($(this).hasClass('active')){
            count++;
        }
        console.log(count);
    })


    //page3 按钮点击

    $(".page3 .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");
        setTimeout(function () {
            $(".page3").hide();
            $(".page4").show();
        },500)
        if($(this).hasClass('active')){
            count++;
        }
        console.log(count);
    })


    //page4 按钮点击
    $(".page4 .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");
        setTimeout(function () {
            $(".page4").hide();
            $(".page5").show();
        },500)
        if($(this).hasClass('active')){
            count++;
        }
        console.log(count);
    })


    //page5 按钮点击
    $(".page5 .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");
        setTimeout(function () {
            $(".page5").hide();
            $(".page6").show();
        },500)
        if($(this).hasClass('active')){
            count++;
        }
        console.log(count);
    })

    //中间过渡页跳转
    //page6
    $(".page6>.page6button").click(function () {
        $(".page6").hide();
        $(".page7").show();
    })

    //page07
    $(".page7 .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");
        setTimeout(function () {
            $(".page7").hide();
            $(".page8").show();
        },500)
        if($(this).hasClass('active')){
            count++;
        }
        console.log(count);
    })

    // page08 按钮点击显示上一页。
    $(".page8 .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");
        setTimeout(function () {
            $(".page8").hide();
            $(".page9").show();
        },500)
        if($(this).hasClass('active')){
            count++;
        }
        console.log(count);
    })


    //page09按钮
    $(".page9 .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");
        setTimeout(function () {
            $(".page9").hide();
            $(".page10").show();
        },500)
        if($(this).hasClass('active')){
            count++;
        }
        console.log(count);
    })



    //page10按钮点击

    $(".page10 .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");

        if($(this).hasClass('active')){
            count++;
        }
        console.log(count);
        setTimeout(function () {
            $(".page10").hide();
            $(".page12").show();
        },500)
    })


    //page12 按钮点击

    $(".page12 .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");
        if($(this).hasClass('active')){
            count++;
        }
        console.log(count);
        setTimeout(function () {
            $(".page12").hide();
            $("#finalnumber").html(count);
            if(count>=0&&count<=3){
                $("#finalText").html("<p>韭菜如我香飘飘</p>");
                document.title="韭菜如我香飘飘";


            }else if(count>=4&&count<=7){
                $("#finalText").html("<p>来年坚定小目标，</p><p>股市不再葛优躺！</p>");
                document.title="来年坚定小目标,股市不再葛优躺!";
            }else if(count>=8){
                $("#finalText").html("<p>追涨杀跌我最行！</p>");
                document.title="追涨杀跌我最行！"

            }
            $(".page11").show();

        },500)

    })


    // z最后页面的叉叉关闭
    $(".page11 .cha").click(function () {
        $(".page11").hide();
       document.location.reload(true);
       $(".page0").show();
    })



})
