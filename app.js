// Chapter-31-34

// Q-1

// var a = new Date();
// document.write(a);

// Q-2

// var a = new Date();
// var b = a.getMonth();
// var c = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d = c[b];
// document.write("<h1>Current month :"+d+"</h1>")

// Q-3

// var a = new Date();
// var b = a.getDay();
// var c = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// alert("Today is "+c[b].slice(0,3));

// Q-4

// var a = new Date();
// var b = a.getDay();

// switch(b){
// case 0:
//     alert("It's fun day");
// case 6:
//     alert("It's fun day");
// }


// Q-5


// var a = new Date();
// var b = a.getDate();
// if(b >= 1 && b <= 15){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last days of the month")
// }

// Q-6

// var a = new Date();
// var b = a.getTime();
// var c = b/(1000*60);
// document.write("<h1>Current Date : "+a+"</h1>");
// document.write("<h1>Elapsed miliseconds since January,1970 : "+b+"</h1>")
// document.write("<h1>Elapsed minutes since January,1970 : "+c+"</h1>")


// Q-7

// var a = new Date();
// var b = a.getHours();

// if(b >= 0 && b <= 11){
//     alert("Its AM");
// }else if(b >= 12 && b <= 23){
//     alert("Its PM")
// }

// Q-8

// var a = new Date();
// a.setHours(0)
// a.setMinutes(0);
// a.setSeconds(0);
// a.setFullYear(2021);
// a.setMonth(11);
// a.setDate(31)
// document.write("<h1>Later Date : "+a+"</h1>");

// Q-9

// var a = new Date();
// var b = new Date("April 25,2020")
// var c = a.getTime();
// var d = b.getTime();
// var e = c-d
// var f = e/(1000*60*60*24);
// alert(Math.round(f)+" Days have passed away since 1st ramadan 2020")

// Q-10


// var a = new Date();
// var b = new Date("January 1,2021");
// var  c  = a.getTime();
// var  d  = b.getTime();
// var e  = (c-d)/1000;
// var f = Math.round(e)
// document.write("On refrence date " + a + "<br />" + f +" seconds had passed since begining of 2021");

// Q-11


// var a = new Date();
// var b = new Date();
// var c = a.getHours();
// b.setHours(c-1);
// document.write("Current Date : "+ a + "<br />");
// document.write("1 hour ago, It was "+b);

// Q-12

// var a = new Date();
// var b = new Date();
// var c = b.getFullYear();
// b.setFullYear(c-100);
// alert(b);

// Q-13

// var a = prompt("Enter your birth date","January 1,2021");
// var b = new Date();
// var c = new Date(a);
// var d = b.getTime()-c.getTime();
// var e = d/(1000*60*60*24*365);
// var f = Math.round(e);
// var g = c.getFullYear();
// document.write("Your age is : "+ f + "<br /> Your birthyear is "+g);

// Q-14

var a = new Date();
var b = a.getMonth();
var c = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var d = 410;
var e = 24; 
var f = d*e;
var g = f+500;
document.write("<h1>K-Electric Bill</h1>"+"<br />");
document.write("Company name : ABC Company"+"<br />");
document.write("Month : "+c[b]+"<br />");
document.write("Number of units: "+d+"<br />");
document.write("Charges per units : "+e+"<br />");
document.write("Charges per units : "+e+"<br />"+"<br />");
document.write("Net amount payable (with in due date) : "+f+"<br />");
document.write("Gross amount payable (after due date) : "+g+"<br />");
