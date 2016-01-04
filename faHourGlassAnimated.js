$(".fa-hourglass-animated").each(function(){
        var element = $(this),
            rotation = 180,
            timeouts = {
                reset: 500,
                half: 500,
                end: 550,
                animation: 500,
                retry: 650
            },
            animator = function(){
                // start/ reset
                setTimeout(function() {
                    element.addClass("fa-hourglass-start").removeClass("fa-hourglass-half fa-hourglass-end");
                },timeouts.reset);
                // halfway
                setTimeout(function(){
                    element.addClass("fa-hourglass-half").removeClass("fa-hourglass-start fa-hourglass-end")
                },timeouts.reset+timeouts.half);
                // end
                setTimeout(function(){
                    element.addClass("fa-hourglass-end").removeClass("fa-hourglass-start fa-hourglass-half")
                },timeouts.reset+timeouts.half+timeouts.end);
                // rotate animation
                setTimeout(function(){
                    element.animate({textIndex:0},{
                        duration: timeouts.animation,
                        queue: false,
                        progress: function(animation,progress){
                            $(this).css({
                                "-ms-transform": "rotate("+rotation * progress+"deg)",
                                "-webkit-transform": "rotate("+rotation * progress+"deg)",
                                "transform": "rotate("+rotation * progress+"deg)"
                            });
                        },
                        complete: function(){
                            setTimeout(function(){
                                element.addClass("fa-hourglass-start").removeClass("fa-hourglass-half fa-hourglass-end").removeAttr("style");
                            },100);
                        }
                    },timeouts.animation);
                },timeouts.reset+timeouts.half+timeouts.end+timeouts.animation);
            };
        animator();
        setInterval(animator, timeouts.reset+timeouts.half+timeouts.end+timeouts.animation+timeouts.retry);
