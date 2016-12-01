$(document).ready(function() {
        $('#fullpage').fullpage({
            anchors:['page1', 'page2', 'page3','page4', 'page5', 'page6','page7', 'page8', 'page9','page10'],
            scrollingSpeed: 2000,
            navigation: true,
            afterRender:function(){
                $(".page1_logo").css({
                    opacity:1,
                    transitionDelay:"0.7s",
                    transform:"scale(1,1)"
                })
            }
        });

    })