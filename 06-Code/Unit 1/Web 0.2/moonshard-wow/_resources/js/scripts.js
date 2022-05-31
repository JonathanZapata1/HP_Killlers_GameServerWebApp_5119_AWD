var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(window).on('load', function() {
  "use strict";
  $('.preloader-overlay, .preloader-logo').delay(1500).fadeOut('fast');
  setTimeout(function(){
  		$('main').removeClass('anim');
        $('video').append('<source src="assets/media/bg-promo.webm" type="video/webm"><source src="asets/media/bg-promo.mp4" type="video/mp4">'); 	
    }, 1500);
  setTimeout(function(){
  		$('.register, .timer').removeClass('anim');
    }, 2200);
  setTimeout(function(){
  		$('.about, footer').removeClass('anim');
    }, 2800);
});

$(document).ready(function () {
    var maxWidth = 640;
    if ( $(window).width() < maxWidth)
          {
            initscale();
         }
 
});

 	
    function initscale() {
        var all_meta = document.getElementsByTagName("meta")
        for (var i=0; i<all_meta.length; i++) {
            if (all_meta[i].name.toLowerCase() != "viewport") continue;
            all_meta[i].content = "width=device-width, initial-scale=0.5, maximum-scale=0.5";
        }
    }
    


}
/*
     FILE ARCHIVED ON 06:03:32 Feb 12, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:22:59 Mar 13, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 271.947
  exclusion.robots: 0.137
  exclusion.robots.policy: 0.126
  RedisCDXSource: 0.687
  esindex: 0.012
  LoadShardBlock: 244.593 (3)
  PetaboxLoader3.datanode: 301.722 (4)
  CDXLines.iter: 23.52 (3)
  load_resource: 196.031
  PetaboxLoader3.resolve: 107.67
*/