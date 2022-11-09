//JAVASCRIPT --------
//JS is an object-based  client side scripting language 
//which runs on browser, and also on server via nodejs
//which is used for manipulating the web pages 
//js is synchronous programming language 
//We can placed the script in two ways
//1. html document - head or body tag
//2. external js file , link it to html doc
//In javascript everything is object.

//Internal js
{/* <script>
    console.log("xyz")
</script> */}

// external js
// <script src="file path"></script>


//DATA TYPES --------

//PRIMITIVE DATA TYPE---- IMMUTABLE
//string ---- Collection of characters , single , double quote
//Number ---- with or without decimal
//Boolean ---- true/false value
//undefined ---- no value, which is not defined
//Nan   -----   Not a number
//Null ----- nothing, empty
//BigInt ---- bigger number , n is written at last
//Symbol ---- Immutable value which is unique


//NON-PRIMITIVE DATA TYPES
//Array  ---- collection of different elements in single variable in JS
//Object ---- collection of properties, format is key value pair.


//TYPES OF VARIABLES ---------

//var --  used to declared global variable, re-define, re-initialise
//let -- used to declared local variable, re-initialise in particular scope
//const -- only defines once and immutable 


//FOR ALERTING --------
// alert("Javascript begins");

//FOR TAKING INPUT FROM USER ---------
// let name =prompt("enter your name");
// alert("Welcome " + name);


// OPERATORS --------
//This are the special symbols which are used to perform operations on variables and values


//TYPES OF OPERATORS ---------

// 1.Arithmetic ==>  +, -, /, *, %
// 2.Assignment ==>  =, +=, -=, /=, %=
// 3.Logical  ==> &&, ||, !
// 4.Conditional/Relational  ==>  < , > , <=, >=, ==, ===, !=
// 5.Increment/Decrement  ==>  ++, --
// 6.Ternary  ==>  statement ? true : false


//EXAMPLES ---------

// let a=10, b=20;

// Arithmatic Operators
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// Assignment Operators 
// console.log(a+=2)
// console.log(a-=20)
// console.log(a=300)

// Logical Operators 
// let a=10, b=20;
// (logical and) && -----------  both expression true hai to true otherwise false
    // if(true && true)----------> true
    // if(true && false)----------> false
    // if(false && true)----------> false
    // if(false && false)----------> false

    // console.log(a < b && a == b ) //false
    // console.log(a < b && a == b ) //false
    // console.log(a == b && a != b ) //false
    // console.log(a < b && a != b ) //true

// (logical or) || -----------   both expression false hai to false otherwise true
    // if(true || true)----------> true
    // if(true || false)----------> true
    // if(false || true)----------> true
    // if(false || false)----------> false

    // console.log(a < b || a == b ) //true
    // console.log(a == b || a != b ) //true
    // console.log(a < b || a != b ) //true
    // console.log(a > b || a == b ) //false


// (logical not) !  -----------   inverse karega true- false
    // if(true)----------> false
    // if(false)----------> true

    // console.log(!true)
    // console.log(!false)

    // let a=10, b=20;


// Conditional/Relational Operators --------------

// console.log(a<b);   //true
// console.log(a>b);   //false
// console.log(a!=b);   //true
// console.log(a==b);   //false
// console.log(a===b);  //false ----equality and data type check krega
// console.log(a<=b);   //true
// console.log(a>=b);   //false

// Ternary Operator  ------------
// let a=10, b="10";    //number
// ternary operator    ------> statement ? true : false 
// a<b || a>=b ? console.log("ha greater hai") : console.log("ha less hai") 


//STRING METHODS ---------

// const first_name ="Pranali"
// const mid_name = "Prabhakar"
// const last_name ="Chatap"
// let fullname =""
// let len_of_name = first_name.length
// console.log(len_of_name);
// console.log(first_name.toLowerCase());
// console.log(first_name.toUpperCase());
// console.log(first_name.slice(1,4));     //cut the string
// console.log(first_name.split("a"));     // split and gives array
// console.log(first_name.replace('a', '#'));
// console.log(first_name.includes('n'));
// console.log(parseInt(first_name));      
// console.log(first_name.concat("Hello"));
// console.log("hello   ".trim());          //removes whitespace
// console.log(first_name.charAt(3));       //return character at specified index
// console.log(first_name.charCodeAt(2));   //return character code at specified index
// console.log(first_name.startsWith('P'));   // character start with or not
// console.log(first_name.endsWith('i'));     //character ends with or not
// console.log(first_name.indexOf('n'));
// console.log(first_name.lastIndexOf());
// console.log(first_name.search('l'));
// console.log(first_name.match('i'));


//NUMBER METHODS --------------------

// let a = 10;
// let b = "1";
// console.log(typeof (a.toString()))
// console.log(typeof a)
// console.log(a.toExponential())
// console.log(a.toFixed(2))
// console.log(a.toPrecision())
// console.log(a.valueOf())
// console.log(parseInt(b))
// console.log(Number(b))
// console.log(parseFloat(b))


//ARRAY METHODS-------------------------

//Type check---------
// let fruits = ["mango","apple","grapes","watermelon","lemon"];
// console.log(fruits)
// console.log(Array.isArray(fruits))  

//Indexing  -----(gives index value)
// console.log(fruits[0]);
// console.log(fruits[1]);

//slice  ----(gives part of array)
// console.log(fruits.slice(-1));

//unshift  ----(add new element in begining)
// fruits.unshift("custaredApple");
// console.log(fruits)

//shift  -----(remove element from begining)
// shifted_element = fruits.shift();
// console.log(shifted_element);

//Push   -----(add element in end of array)
// fruits.push("strawberry");
// console.log(fruits)

//Pop   -----(remove element from end of array)
// popped_element= fruits.pop();
// console.log(popped_element);
// console.log(fruits)

//toString     -----(convert number to string)
// let arr = 1;
// let res = arr.toString();
// console.log(res);
// console.log(typeof res);

//Splice        ------(add or remove element at specified index )
// let fruits = ["mango","apple","grapes","watermelon","lemon"];
// fruits.splice( 0, 1, 'kiwi');  //Add element
// fruits.splice(1,1);            //remove element
// console.log(fruits);

//concat   ------(join two arrays)
// let fruits = ["mango","apple","grapes","watermelon","lemon"];
// let vege = ['cucumber', 'bringle'];
// let all = fruits.concat(vege);
// console.log(all);

//slice   ------ ( gives part of array by specifiying indexes)
// let fruits = ["mango","apple","grapes","watermelon","lemon"];
// let all = fruits.slice(1, 4);
// console.log(all);

//sort   ------(sort element in ascending order)
// let fruits = ["mango","apple","grapes","watermelon","lemon"];
// console.log(fruits.sort());

//reverse ------(reverse array elements)
// let fruits = ["mango","apple","grapes","watermelon","lemon"];
// console.log(fruits.reverse());

//max and min -------
// let arr = [1,2,3,4,5,6]
// let max1 = Math.max(...arr);
// let min1 = Math.min(...arr);
// console.log(max1);
// console.log(min1);

//length property  ----------------
// let a = [1,2,3,4,5];
// let b = a.length;
// console.log(b);


//iterate loop using length -------------

// let fruits = ["mango","apple","grapes","watermelon","lemon"];
// for(let i=0 ; i< fruits.length ;i++){
//     // console.log(fruits[i])
//     if(fruits[i]=="apple"){
//         console.log(`${fruits[i]} color is red and position of ${fruits[i]} in array is ${i}`);
//         console.log(fruits[i]+" "+ "color is red and position of apple in array is "+""+ i );
//     }
// }


//CLONING OF ARRAY -------------------

//First way ----------
// let arr1 = [1,2,3,4,5]; 
// let arr2 = arr1.slice(0);     //slice which will copy all form mention index
// console.log(arr2);

//We can concat elements  ----------
// let arr3 = arr1.slice(0).concat("item2", ["arr1", "arr2"]); 
// console.log(arr3);


//Second way -----------
// let arr4 = [].concat(arr1);
// let arr5 = ["item"].concat("item1");
// let arr6 = arr5.concat("item2", "item3")
// console.log(arr6);


//Third Way ------------
//Spread operator ---------------
//It creates a copy of variables

// let arr1 = [1,2,3,4,5];
// let arr2 = [6 , ...arr1];
// console.log(arr2);

// arr2.push(7);
// console.log(arr2);


//Fourth Way ------------
// let arr3 = Object.assign(arr1);
// console.log(arr3); 



//Rest operator -----------
//It allows us to pass an indefinite number of parameters 
//to a function and access them in an array using ...(three)dots

// function sum(...para){
//     let total = 0;
//     for(let i=0 ; i<para.length ; i++){
//         total += para[i];
//     }
//     console.log(total)
// }

// sum(1, 2,3,4,5,6,7,8);


//FUNCTIONS -----------------
//Functions are block of statement
// which can be called anywhere in entire program
//Reuse of code and can be called multiple times in program
//keyword 'function' foll0wed with function name and paranthesis

//Types of Functions----------

//1. Regular function (Named function)-----------
// function printName(){
//     console.log("Pranali Chatap");
// }
// printName();


//2. Expressive function (Anonymous function)-----------
// let name = function(){
//     console.log("Pranali");
// }
// name();

//3. Arrow Function (Added ES6 feature)-----------
// const fullname = () =>{
//     console.log("Pranali Prabhakar Chatap");
// }
// fullname();

//4. Immediatetly Invoked Function -------------
// function that runs as soon as it is defined

// (function(){
//     console.log("Immediatetly invoked function")
// }());


//Function With Parameters And Return Keyword   ------------------------

//Regular function---------
// function name(a){
//     return a;
// }
// console.log(name("Pranali"));

//Expressive function----------
// let name = function(a){
//     return a;
// }
// console.log(name("Pranali"));

//Arrow function-----------
// let name = (a,b) => {
//     return `${a} ${b}`;
// }
// console.log(name("Pranali", "Chatap"));

//We can make it short also ----------

// let name = a => return a;
// console.log(name("Pranali"));

//Return true or false using arrow function------------
// const greaterage = age => {
//      return age>50
// } 
// console.log(greaterage(45));
// console.log(greaterage(65));


//CONDITIONAL STATEMENT or DECISION MAKING STATEMENT--------------------


//if  ----- ( executes a block statement based on some condition)

// let x = 10;
// if(x == 13){
//     console.log("x is equal to 10");
// }


// if else ----- (if statement become false then else part is executes)

// let x = 10;
// if(x == 13){
//     console.log("x is equal to 13");
// }
// else{
//     console.log("x is not equal to 13");
// }


// if else if ----- (if block become false then executes else if block)

// let x = 15;
// if(x == 13){
//     console.log("x is equal to 13");
// }
// else if(x <= 13){
//     console.log("x is less than equal to 13");
// }
// else{
//     console.log("x is not equal to 13 ");
// }


//switch case ------ (when needs to make choice between different number of cases  )

// let choice = 6;
// switch(choice){
//     case 1:
//         console.log("choice 1");
//         break;
//     case 2:
//         console.log("choice 2");
//         break;
//     case 3:
//         console.log("choice 3");
//         break;
//     case 4:
//         console.log("choice 4");
//         break;  
//     default:
//         console.log("Wrong choice");
//         break;
// }


//LOOPS ---------------------------
//it means repeating itself
//Types of loops are for, while, do while


//For loop ----- (iterating over a sequence based on condition)
//Types of for loop ----------------


//1. Simple for loop ---------------

// for(let i=0; i<=5 ; i++){
//     console.log(i);
// }

// let fruits = ["kiwi", "banana", "apple", "mango"];
// for(let i=0; i<=fruits.length ; i++){
//     console.log(fruits[i]);
// }


//2. for of loop  (gives values) ---------------

// let arr = [1,3,4,5];
// for(let i of arr){
//     console.log(i);
// }

// let fruits = ["kiwi", "banana", "apple", "mango"];
// for(let fruit of fruits){
//     console.log(fruit);
// }


//3. for in loop  (gives indexes) ----------------
// let arr = [1,3,4,5];
// for(let i in arr){
//     console.log(i);
// }

// let fruits = ["kiwi", "banana", "apple", "mango"];
// for(let fruit in fruits){
//     console.log(fruit);
// }


//gives values and indexes
// let fruits = ["kiwi", "banana", "apple", "mango"];
// for(let fruit in fruits){
//     console.log(fruits[fruit]);
// }


//4. forEach loop ----------------

// let arr = [1,2,3,4,5];
// arr.forEach(element => {
//     console.log(element);
// });

// let fruits = ["kiwi", "banana", "apple", "mango"];
// fruits.forEach( fruit => {
//     console.log(fruit);
// })


// let fruits = ["mango","apple","grapes","watermelon","lemon"];
// fruits.forEach(item => {
//     if(item == "apple"){
//         console.log(item);
//     }
// })

// let arr = [1,2,3,4,5,6,7,8];
// arr.forEach(num => {
//     if(num%2 == 0){
//         console.log(num);
//     }
// })



//While Loop ---------------------
//iterating over a sequence until the condition is met

// let i=0;
// while(i<10){
//     console.log("Pranali");
//     i++;
// }



//Do While Loop -------------------------
//block executes at least once and then repeatedly executes
// or stop based condition specified at the end

// let i = 0;
// do{
//     console.log("Pranali");
//     i++;
// }while(i<10);



//FUNCTION AS PARAMETER--------------------
//function is passed as parameter in another function 

//Regular function
// function callmyname(){
//     console.log("sonali","pranita", "pranali");
// }

// function printmyname(callname){
//     callname();
// }
// printmyname(callmyname);


//Expressive function
// let callmyname = function(){
//     console.log("sonali","pranita", "pranali");
// }

// let printmyname = function(callname){
//     callname();
// }
// printmyname(callmyname);


//Arrow function
// let callmyname = () =>{
//     console.log("sonali","pranita", "pranali");
// }

// let printmyname = callname => {
//     callname();
// }
// printmyname(callmyname);



//Directly passing function as parameter -------------------


// regular function ----------
// let printmyname = callname => {
//     callname();
// }
// printmyname(function callmyname(){
//     console.log("sonali","pranita", "pranali");
// });


//arrow function ----------
// let printmyname = callname => {
//     callname();
// }
// printmyname(() =>{
//     console.log("sonali","pranita", "pranali");
// });


//anonymous function -----------
// let printmyname = callname => {
//     callname();
// }
// printmyname(function(){
//     console.log("sonali","pranita", "pranali");
// });



// CALLBACK FUNCTION -----------------------
//function which is passed as arguments in another function 

// function myfunction1(callback){
//     callback();
    
// }
// myfunction1(myfunction2);

// function myfunction2(){
//     console.log(`my name is pranali and age is 23`);
// }


//HOISTING ------------------------

// console.log(a)
// let a=10;



















