 $(document).ready(function() {

     var myvideo = document.getElementById("myVideo");
     var finishtime = myvideo.duration;

     //Converting seconds into time format
     function secondsToTime(secs) {
         secs = Math.round(secs);
         var hours = Math.floor(secs / (60 * 60));
         var divisor_for_minutes = secs % (60 * 60);
         var minutes = Math.floor(divisor_for_minutes / 60);

         var divisor_for_seconds = divisor_for_minutes % 60;
         var seconds = Math.ceil(divisor_for_seconds);
         var obj = {
             "h": hours,
             "m": minutes,
             "s": seconds
         };
         return obj.h + ":" + obj.m + ":" + obj.s;
     }

     var finishtime;
     setTimeout(function() {
         finishtime = myvideo.duration;
         $(".finishtime").text(secondsToTime(Math.floor(myvideo.duration)));
     }, 100);

     var curr = setInterval(function() {

         var currenttime = myvideo.currentTime;
         $(".currentTime").text(secondsToTime(Math.floor(myvideo.currentTime)));
         $(".remainingTime").text(secondsToTime(Math.floor(finishtime - currenttime)));

     }, 1);
     $(".btnStart").click(function() {
         myvideo.play();
     });
     $(".btnStop").click(function() {
         myvideo.pause();
     });
 });