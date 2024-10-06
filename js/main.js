$(document).on("click", ".toggle", () => {
  $(".sideBar").css("left", "0");
});
$(document).on("click", ".close", () => {
  $(".sideBar").css("left", "-270px");
});
$(".docum h3").click(function () {
  $(this).next().slideToggle();
  $(".doc-info").not($(this).next()).slideUp();
});
$(function () {
  var endDate = new Date("2024-10-31T23:59:59").getTime();

  var countdown = setInterval(function () {
    var dateTimeNow = new Date().getTime();
    var remainingTime = endDate - dateTimeNow;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    $("#countdownHour").html(days + "d ");
    $("#countdownDay").html(hours + "h ");
    $("#countdownMin").html(minutes + "m ");
    $("#countdownSec").html(seconds + "s");

    if (remainingTime < 0) {
      clearInterval(countdown);
      $("#countdownHour").html("Time is up!");
      $("#countdownDay").html("Time is up!");
      $("#countdownMin").html("Time is up!");
      $("#countdownSec").html("Time is up!");
    }
  }, 1000);
});
$("textarea").keyup(function(){
let myLength= $(this).val().length
$('#reminig').text(100-myLength <= 0 ? "characters ended." : 100-myLength  );
})
