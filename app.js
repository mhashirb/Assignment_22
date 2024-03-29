
//Chapter 26-30

//Chapter 26
// Question 1
// var number=4.7; 
// var roundedNumber=Math.round(number); 
// console.log("Rounded number:"+roundedNumber);

// Question 2
// var origNum=4.7;
// var roundNum;
// roundNum=Math.ceil(origNum);
// console.log("Original number:"+origNum);
// console.log("Rounded up number:"+roundNum);

// Question 3
// var origNum=4.7;
// var roundNum;
// roundNum=Math.floor(origNum);
// console.log("Original number:"+origNum);
// console.log("Rounded down number:"+roundNum);

// Question 4
// var origNum=4.7;
// var roundNum;
// roundNum=Math.round(origNum);
// console.log("Original number:"+origNum);
// console.log("Rounded number:"+roundNum);

// Question 5
// var num=0.5;
// var roundedNum;
// roundedNum=Math.round(num);
// console.log("Original number:"+num);
// console.log("Rounded number:"+roundedNum);

//Chapter 27
//Question 1-2
// var randomNum=Math.random();
// var generateNum=Math.floor(randomNum*50)+1;
// console.log("Random number between 1 and 50:"+generateNum);

// Question 3
// for(var i=0;i<=5;i++){
//     var diceValue=Math.floor(Math.random()*6)+1;
//     console.log("Roll "+(i+1)+": "+diceValue);
// }


// Question 4
// var randomNumber=Math.random();
// if(randomNumber<0.5){
//     console.log("The coin landed on heads");
// } 
// else{
//     console.log("The coin landed on tails");
// }

// Chapter 28-29
//Question 1
// We can convert string number into integer by two constructors
// 1)Number()
// 2)parseInt()

// Question 2
// var str="123";
// var num=Number(str);
// console.log(num);

// Question 3
// using "parseFloat()" function

//Question 4
//part 1
// var str1="213";
// var num1=parseInt(str1);
// if(!isNaN(num1)){
//     console.log("String can be converted to an integer:"+num1);
// } 
// else{
//     console.log("String cannot be converted to an integer");
// }    

//part 2
// var str2="9.89";
// var num2=parseFloat(str2);
// if (!isNaN(num2)){
//     console.log("String can be converted to a decimal:"+num2);
// } 
// else{
//     console.log("String cannot be converted to a decimal");
// }

//Question 5
// var num=123;
// var str=num.toString();
// console.log(str);

//Question 6
// var num=42;
// var str=num.toString();
// console.log(str);

//Question 7
// Yes, you can convert a string representing a decimal number(e.g., "3.14") to an integer in JavaScript using the parseInt() function.
// var decimalString="4.82";
// var integer=parseInt(decimalString);
// console.log(integer);

// Chapter 30

//Question 1
// var num=3.14159265358979323846;
// var newNum=num.toFixed(4).toString();
// console.log(newNum); 

//Question 2
// var num=3.14159265358979323846;
// newNum=num.toFixed(2).toString();
// num=Number(num);
// console.log(num);

//Question 3
// if((num.toFixed(2).toString()).length>4){
// }

//Question 4
// var num=123.456789;
// alert(num.toFixed(2).toString());
