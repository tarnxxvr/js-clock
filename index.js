

function showTime12() {
  var date=new Date();
  var h=date.getHours();
  var m=date.getMinutes();
  var s=date.getSeconds();
var se='AM';
if(h===0){
  h=12;
}
if(h>=12){
  se="PM";
}

if(h>12){
  h=h-12;

}
  h =(h<10) ? '0'+h :h;

m =(m<10) ? '0'+m :m;
s =(s<10) ? '0'+s :s;
  var time= h +": "+ m+ ": "+ s +" "+ se ;


  setTimeout("showTime12()", 1000);
  document.querySelector('#clock').innerText=time;





}
showTime12();

function showTime24(){
  var date1=new Date();
  var h1=date1.getHours();
  var m1=date1.getMinutes();
  var s1=date1.getSeconds();

  var time1= h1 +": "+ m1+ ": "+ s1;
setTimeout("showTime24()", 1000);
document.querySelector('#clock').innerText=time1;
}

$('.12hr').on('click',()=>{
  showTime12();
  $('.12hr').toggleClass('active-day');
// $('#clock1').toggleClass('hide');

});
$('.24hr').on('click',()=>{
  showTime24();
  $('.24hr').addClass('active-day');
// $('#clock').toggleClass('hide');
});


var day=new Date();
var toDay=day.getDay();
switch(toDay){
  case 0:
$('.sun').addClass('active-day');
  break;
  case 1:
  $('.mon').addClass('active-day');
  break;
  case 2:
  $('.tue').addClass('active-day');
  break;
  case 3:
  $('.wed').addClass('active-day');
  break;
  case 4:
  $('.thur').addClass('active-day');
  break;
  case 5:
  $('.fri').addClass('active-day');
  break;
  case 6:
  $('.sat').addClass('active-day');
  break;

}
