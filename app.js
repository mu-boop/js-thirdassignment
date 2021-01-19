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

// var a = new Date();
// var b = a.getMonth();
// var c = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d = 410;
// var e = 24; 
// var f = d*e;
// var g = f+500;
// document.write("<h1>K-Electric Bill</h1>"+"<br />");
// document.write("Company name : ABC Company"+"<br />");
// document.write("Month : "+c[b]+"<br />");
// document.write("Number of units: "+d+"<br />");
// document.write("Charges per units : "+e+"<br />");
// document.write("Charges per units : "+e+"<br />"+"<br />");
// document.write("Net amount payable (with in due date) : "+f+"<br />");
// document.write("Gross amount payable (after due date) : "+g+"<br />");


// Chapter-35-38

// Q-1

// function date(){
//     var a = new Date();
//     document.write(a)
// }

// date();


// Q-2
 
// function userName(){
//     var firstName = prompt("Enter your First name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + " " + lastName;
//     alert("Assalam u Alaikum " + fullName);
// }

// userName();

// Q-3

// function add(){
//         var firstNum = +prompt("Enter First Number");
//         var lastNum = +prompt("Enter last Number");
//         var sum = firstNum+lastNum;
//         return sum;
// }

// alert(add());

// Q-4

// function compute(firstNumber,secondNumber,operation){
//    if(operation === '+'){
//     alert(firstNumber + secondNumber);
// }else if(operation === '-'){
//     alert(firstNumber - secondNumber);
// }else if(operation === '*'){
//     alert(firstNumber * secondNumber);
// }else if(operation === '/'){
//     alert(firstNumber / secondNumber);
// }else if(operation === '%'){
//     alert(firstNumber % secondNumber);
// }
// }

// compute(+prompt("Enter the First Number"),+prompt("Enter the First Number"),prompt("What you want"))


// Q-5

// function  square(a){
//     alert(a*a);
// }

// square(prompt("Enter the number"));


// Q-6(Wrong)

// var a = 10;             
// var b = ;
// alert(b);
// //     for (var i = 0; i <=a.length; i++){
// //         alert
// //     }

// //     }



// Q-7
 
// function counting(){
//     var a = +prompt("Enter the First Number")
//     var b = +prompt("Enter the Last Number")
//     for(var i = a; i<=b; i++ ){
//     document.write(i + "<br />")
// }
// }

// counting();

// Q-8

// var base = +prompt("ENter the base");
// var perpendicular = +prompt("ENter the perpendicular");
// var hypotenuse = (base*base)+(perpendicular*perpendicular);
// function hypoSquare(){
// var a = hypotenuse;
// var b = Math.sqrt(a)
// alert(b);
// }

// hypoSquare();

// Q-9


// var a = +prompt("Enter width");
// function area(width,height){
// document.write("Area of rectangle is "+width*height);
// }

// area(a,+prompt("Enter the height"));


// Q-10(Wrong);
// var a = prompt("Enter word");
// var b = 

// Q-11


//     function uppercase(x){
//   var a = x.split(' ');
//   var b = [];
    
//   for(var i = 0; i < a.length; i++){
//       b.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
//   }
//   return b.join(' ');
// }
// document.write("Example String : "+"the quick brown fox" + " <br />");
// document.write("Example Output : "+uppercase("the quick brown fox"));


// Q-12

// function longestWord(a){
//   var b = a.match(/\w[a-z]{0,}/gi);
//   var c = b[0];

//   for(var i = 1 ; i < b.length ; i++)
//   {
//     if(c.length < b[i].length)
//     {
//     c = b[i];
//     } 
//   }
//   return c;
// }
// console.log(longestWord('Web Development Tutorial'));

// Q-13

// functioncount(para, letter) 
// {
//  var a = 0;
//  for (var i = 0; i < para.length; i++){
//     if (para.charAt(i) == letter) {
//       a += 1;
//       }
//   }
//   return a;
// }
// alert(count(prompt("ENter first"),prompt("Enter second")));



// Q-14


// function calcCircumference(){
//     var radius = 30;
//     circumference = 2*(3.14)*(radius);
//     document.write("The circumference is "+circumference+"<br />");

// }


// function calcArea(){
//     var r = 30;
//     var area = (3.14)*(r*r);
//     document.write("The area is "+area);
// }


// calcCircumference();
// calcArea();

// Chaptet-38-42

// Q-1

// function custom(){
//     var a = +prompt("Enter first number");
// var b = +prompt("Enter the power");
// var c =  Math.pow(a,b);
// document.write(c)
// }

// custom();

// Q-2

// function leap(){
// var a = prompt("ENter full year");
// if(((a%4 == 0) && (a % 100 != 0))||(a % 400 == 0)){
// alert("Leap year")
// }else{
// alert("not leap year") 
// }
// }

// leap();


// Q_3

// var a = +prompt("Enter the length of first side");
// var b = +prompt("Enter the length of second side");
// var c = +prompt("Enter the length of third side");
// function section(){
//     var s = (a+b+c)/2;
//     return s;
// }

// var d = section();
// function area(){
//     var e = (d)*(d-a)*(d-b)*(d-c);
//     alert(e)
// }

// area();

// Q-4

// var a = +prompt("Enter the marks of first subject");
// var b = +prompt("Enter the marks of second subject");
// var c = +prompt("Enter the marks of third subject");
// function avg(){
//     var d = (a+b+c)/3;
//     return d;
// }

// var e = avg();

// function perc(){
//     var f = ((a+b+c)/300)*100;
//     return f;
// }

// var g = perc();

// function result(){
//     document.write("Average marks is : " + e + "<br />")
//     document.write("Percentage is : " + g + "%")
// }

// result();

// Q-5


// var a = "My name is mughees";
// function indexOn(x){
// for(var i = 0 ; i <= a.length ; i++){
//     if(a[i] === x){
//         return i;
//     }
// }
// }
// var d = indexOn("n");
// console.log(d)


// Q-6


// var a = "Today is tuesday";
// var b = a.replace(/a/g,"").replace(/e/g,"").replace(/i/g,"").replace(/o/g,"").replace(/u/g,"")
// document.write("With vowels : "+a+"<br />");
// document.write("Without vowels : "+b)

// Q-7

// var a = "Pleases read this application and give me gratuity";
// function twoVowels() {
//     for (var i = 0; i <= a.length; i++) {
//         if (a.charAt(i) === "a" || a.charAt(i) === "e" || a.charAt(i) === "i" || a.charAt(i) === "o" || a.charAt(i) === "u") {
//             if (a.charAt(i + 1) === "a" || a.charAt(i + 1) === "e" || a.charAt(i + 1) === "i" || a.charAt(i + 1) === "o" || a.charAt(i + 1) === "u") {
//                 document.write(a.charAt(i) + a.charAt(i + 1)+",");
//             }
//         }
//     }
// }

// document.write(a + "<br /> Occurences are : ");
// twoVowels();


// Q-8

// var km = +prompt("Enter distance in km");
// function metre(){
//     var m = km*1000;
//     return m;
// }
// var a = metre();

// function centimetre(){
//     var cm = a*100;
//     return cm;
// }

// var b = centimetre();

// function feet(){
//     var f = b*30.48;
//     return f;
// }

// var c = feet();

// function inch(){
//     var i = c*12;
//     return i;
// }

// var d = inch();

// function main(){
//     document.write("Metres : "+a + "<br />")
//     document.write("Centimetres : "+b + "<br />")
//     document.write("Feets : "+c + "<br />")
//     document.write("Inches : "+d + "<br />")
// }

// main();

// Q-9

// var a = +prompt("Enter the working hours");
// if(a > 40){
//     var b = a - 40;
//     var c = b*12;
//     document.write("The payment of overtime is : " + c);
// }else{
//     document.write("There is no overtime payment")
// }

// Q-10

// var Amount = +prompt("Enter withdrawn amount");
// document.write("You will have notes of 100 is : " , Math.floor(Amount / 100)+"<br />");
// document.write("You will have notes of 50 is : " , Math.floor((Amount % 100) / 50)+"<br />");
// document.write("You will have notes of 10 is : " , Math.floor(((Amount % 100) % 50) / 10));


