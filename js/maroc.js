// JavaScript Document
   var Now = new Date();
var CurrentDay = Now.getDay();
var OpeningTime = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), 16, 30);
var ClosingTime = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), 23, 59);
var Open = (Now.getTime() > OpeningTime.getTime() && Now.getTime() < ClosingTime.getTime());
if (CurrentDay !== 6 && CurrentDay !== 0 && Open) {
    $('.openstatus').toggle();
}

$('.single-item').slick();

