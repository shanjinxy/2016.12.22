$(function () {
    //首页开启定时动画效果
    setTimeout(function () {
        $(".page0").addClass('current');
    },1000)


    //首页按钮点击
    $(".page0box2 img").click(function () {
        $(".page0").hide();
        $(".page1").show();
    })

    //page1按钮点击

    $(".page1>.prevnext>.next").click(function () {
        $(".page1").hide();
        $(".page2").show();
    })


    //page2 按钮点击
    $(".page2>.prevnext>.prev").click(function () {
        $(".page2").hide();
        $(".page1").show();
    })
    $(".page2>.prevnext>.next").click(function () {
        $(".page2").hide();
        $(".page3").show();
    })

    //page3 按钮点击
    $(".page3>.prevnext>.prev").click(function () {
        $(".page3").hide();
        $(".page2").show();
    })
    $(".page3>.prevnext>.next").click(function () {
        $(".page3").hide();
        $(".page4").show();
    })

    //page4 按钮点击
    $(".page4>.prevnext>.prev").click(function () {
        $(".page4").hide();
        $(".page3").show();
    })
    $(".page4>.prevnext>.next").click(function () {
        $(".page4").hide();
        $(".page5").show();
    })

    //page5 按钮点击
    $(".page5>.prevnext>.prev").click(function () {
        $(".page5").hide();
        $(".page4").show();
    })
    $(".page5>.prevnext>.next").click(function () {
        $(".page5").hide();
        $(".page6").show();
    })

    //中间过渡页跳转
    //page6
    $(".page6>.page6button").click(function () {
        $(".page6").hide();
        $(".page7").show();
    })

    //page07
    $(".page7>.prevnext>.prev").click(function () {
        $(".page7").hide();
        $(".page6").show();
    })
    $(".page7>.prevnext>.next").click(function () {
        $(".page7").hide();
        $(".page8").show();
    })
    // page08 按钮点击显示上一页。
   $(".page8>.prevnext>.prev").click(function () {
       $(".page8").hide();
       $(".page7").show();
   })

    //page08按钮点击显示下一页 隐藏当前页面    //
    $(".page8>.prevnext>.next").click(function () {
        $(".page8").hide();
        $(".page9").show();
    })

    //page09按钮

    $(".page9>.prevnext>.prev").click(function () {
        $(".page9").hide();
        $(".page8").show();
    })
    $(".page9>.prevnext>.next").click(function () {
        $(".page9").hide();
        $(".page10").show();
    })

    //page10按钮点击
    $(".page10>.prevnext>.prev").click(function () {
        $(".page10").hide();
        $(".page9").show();
    })
    $(".page10>.prevnext>.next").click(function () {
        $(".page10").hide();
        $(".page12").show();
    })

    //page12 按钮点击
    $(".page12>.prevnext>.prev").click(function () {
        $(".page12").hide();
        $(".page10").show();
    })
    $(".page12>.prevnext>.next").click(function () {
        $(".page12").hide();
        $("#finalnumber").html(count);
        if(count>=0&&count<=3){
            $("#finalText").html("<p>韭菜如我香飘飘</p>");

        }else if(count>=4&&count<=7){
            $("#finalText").html("<p>来年坚定小目标，</p><p>股市不再葛优躺！</p>");
        }else if(count>=8){
            $("#finalText").html("<p>追涨杀跌我最行！</p>");
        }
        $(".page11").show();
    })

    // z最后页面的叉叉关闭
    $(".page11 .cha").click(function () {
        $(".page11").hide();

    })
    //给a点击添加变色图片
    // $(".page .prevnext a").click(function () {
    //     $(this).addClass('visited');
    // })

    // 计数器 count
    var count =0;

    $(".page .inputbox").click(function () {
        $(this).addClass('clicked');
        $(this).parent().find("input").attr("disabled","true");
        if($(this).hasClass('active')){
            count++;

        }
        console.log(count);
    })









})
