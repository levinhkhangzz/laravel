(function(a){'use strict';a.HSCore={init:function(){a(document).ready(function(){a("[data-toggle=\"tooltip\"]").tooltip(),a("[data-toggle=\"popover\"]").popover(),a.HSCore.helpers.detectIE(),a.HSCore.helpers.bootstrapNavOptions.init()})},components:{},helpers:{Math:{getRandomValueFromRange:function(a,b,c){return Math.random(),!!c&&c?Math.random()*(b-a)+a:Math.floor(Math.random()*(b-a+1))+a}},detectIE:function(){var a=window.navigator.userAgent,b=a.indexOf("Trident/");if(0<b){var c=a.indexOf("rv:"),d=parseInt(a.substring(c+3,a.indexOf(".",c)),10);document.querySelector("body").className+=" IE"}var e=a.indexOf("Edge/");if(0<e){var d=parseInt(a.substring(e+5,a.indexOf(".",e)),10);document.querySelector("body").className+=" IE"}return!1},bootstrapNavOptions:{init:function(){this.mobileHideOnScroll()},mobileHideOnScroll:function(){var b=a(".navbar");if(b.length){var c=a(window),d={sm:576,md:768,lg:992,xl:1200};a("body").on("click.HSMobileHideOnScroll",".navbar-toggler",function(b){var d=a(this).closest(".navbar");d.length&&d.data("mobile-menu-scroll-position",c.scrollTop()),b.preventDefault()}),c.on("scroll.HSMobileHideOnScroll",function(){b.each(function(b,e){var f,g,h,i,j,k=a(e);(k.hasClass("navbar-expand-xl")?j=d.xl:k.hasClass("navbar-expand-lg")?j=d.lg:k.hasClass("navbar-expand-md")?j=d.md:k.hasClass("navbar-expand-xs")&&(j=d.xs),!(c.width()>j))&&(f=k.find(".navbar-toggler"),g=k.find(".navbar-collapse"),!g.data("mobile-scroll-hide")||g.length&&(h=k.data("mobile-menu-scroll-position"),40<Math.abs(c.scrollTop()-h)&&g.hasClass("show")&&(f.trigger("click"),i=f.find(".is-active"),i.length&&i.removeClass("is-active"))))})})}}}},settings:{rtl:!1}},a.HSCore.init()})(jQuery);