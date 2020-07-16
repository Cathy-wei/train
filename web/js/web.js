$(document).ready(function() {


    var index2 = 0; /*初始化一个变量 指向下彪*/
    //点击点
    $(".tab-btn .btn").click(function() {
        index2 = $(this).index(); //获取点击该元素下彪
        $(this).addClass("active").siblings().removeClass("active");
        $(".item").eq(index2).fadeIn().siblings().fadeOut();
    });
    //点击切换效果
    $(".lr-tab .right").click(function() {
        index2++;
        if (index2 > 4) {
            index2 = 0;
        }
        $(".item").eq(index2).fadeIn().siblings().fadeOut();
        $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");

    });
    $(".lr-tab .left").click(function() {
        index2--;
        if (index2 < 0) {
            index2 = 4;
        }
        $(".item").eq(index2).fadeIn().siblings().fadeOut();
        $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");

    });
    var time2 = setInterval(function() {
        index2++;
        if (index2 > 4) {
            index2 = 0;
        }
        $(".item").eq(index2).fadeIn().siblings().fadeOut();
        $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");

    }, 4000); //定时器 重复

    function get(page) {
        $('#loading').css('display', 'block')
        axios.get('http://mock-api.com/wna2YXK1.mock/products?page=' + page)
            .then(function(res) {
                console.log('res', res.data);
                var i;
                var item;
                $('#news div').remove();
                for (i = 0; i < res.data.length; i++) {
                    item = res.data[i];
                    $('#news ').append('<div>' + '<p>' + item.title + '</p>' + '</div>');
                    // $('news div').addClass('wow').addClass('fadeInUp')
                }

                // $('#loading').css('display', 'none')
            })
            .catch(function(e) {
                console.log('e', e);
            })
    }
    get(1);
    $('#pages li').click(function() {
        var page = Number($(this).text());
        get(page);
        $('#pages li').removeClass('active');
        $(this).addClass('active')
    })

})