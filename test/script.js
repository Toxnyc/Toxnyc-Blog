$(document).ready(function() {
$('.bot').click(function() {
$(this).css('display','none');
  $('.bot1').css('display','block');
$('.main1').parent().animate({bottom:'-75'});
 });
  $('.bot1').click(function() {
    $(this).css('display','none');
  $('.bot').css('display','block');
$('.main1').parent().animate({bottom:'0'});
 });
});
