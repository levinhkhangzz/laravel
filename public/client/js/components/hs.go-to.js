(function(a){'use strict';a.HSCore.components.HSGoTo={_baseConfig:{},pageCollection:a(),init:function(b,c){if(this.collection=b&&a(b).length?a(b):a(),!!a(b).length)return this.config=c&&a.isPlainObject(c)?a.extend({},this._baseConfig,c):this._baseConfig,this.config.itemSelector=b,this.initGoTo(),this.pageCollection},initGoTo:function(){var b=this,c=b.pageCollection;this.collection.each(function(b,d){var e=a(d),f=e.data("target"),g=!!e.data("is-referenced-to-page"),h=e.data("type"),i=e.data("show-effect"),j=e.data("hide-effect"),k=JSON.parse(d.getAttribute("data-position")),l=a(e.data("compensation")).outerHeight(),m=e.data("offset-top"),n=function(){return l?f?a(f).offset().top-l:0:f?a(f).offset().top:0};"static"===h?e.css({display:"inline-block"}):e.addClass("animated").css({display:"inline-block",position:h,opacity:0}),("fixed"===h||"absolute"===h)&&e.css(k),e.on("click",function(b){g||(b.preventDefault(),a("html, body").stop().animate({scrollTop:n()},800))}),e.data("offset-top")||e.hasClass("js-animation-was-fired")||"static"===h||!(e.offset().top<=a(window).height())||(e.show(),setTimeout(function(){e.addClass("js-animation-was-fired "+i).css({opacity:""})})),"static"!==h&&(a(window).on("scroll",function(){if(clearTimeout(a.data(this,"scrollTimer")),e.data("offset-top"))a(window).scrollTop()>=m&&!e.hasClass("js-animation-was-fired")?(e.show(),setTimeout(function(){e.addClass("js-animation-was-fired "+i).css({opacity:""})})):a(window).scrollTop()<=m&&e.hasClass("js-animation-was-fired")&&a.data(this,"scrollTimer",setTimeout(function(){e.removeClass("js-animation-was-fired "+i),setTimeout(function(){e.addClass(j).css({opacity:0})},100),setTimeout(function(){e.removeClass(j).hide()},400)},500));else{var b=e.offset().top;!e.hasClass("js-animation-was-fired")&&a(window).scrollTop()>=b-a(window).height()&&(e.show(),setTimeout(function(){e.addClass("js-animation-was-fired "+i).css({opacity:""})}))}}),a(window).trigger("scroll")),c=c.add(e)})}}})(jQuery);