// var h = 'Hello';

// for ( var i = 0; i < h.length ; i++) // array length always starts with 0
// {
//     console.log(h[i]);
// }


// for ( var i = 1; i <=20 ; i++)
// {
//     console.log(i);
// }

// for ( var i = 10; i >=1 ; i--)
// {
//     console.log(i);
// }

// for (var i= -10; i<=19;i++)
// {
//     console.log(i);
// }


// Guess what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Once you have an answer  to the questions then 
// check them by copying them and running it in the console yourself line by line 
// Make the string: "Hi There! It's "sunny" out" by using the + sign:

/* 5 + "34" // "534"
5 - "4" // 1
10 % 5 // 0
5 % 10 // 5
"Java" + "Script" // "JavaScript"
" " + " " //  "  "
" " + 0 //  " 0"
true + true // 2
true + false // 1
false + true //  1
false - true //  -1
3 - 4 //  -1
"Bob" - "bill" // NAN


5 >= 1 // true
0 === 1 //  false
4 <= 1 //  false
1 != 1 //  false
"A" > "B" //  false
"B" < "C" //  true
"a" > "A" //  true
"b" < "A" //  false
true === false //  false
true != true // false


// Make the string: "HI There! It's sunny out" by using the + sign.
"Hi There! " + "It\'s \"sunny\" out"

// Evaluate what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Answer the questions then 
// check them by copying them and running it in the console yourself 
// line by line 


// add variable "firstName" and "lastName" // so that they equal your name
var firstName = "Andrei";
var lastName = "Neagoie";

// create a variable that holds the answer // of "firstName" + " " + "LastName"
var fullName = firstName + " " + lastName;

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
b + a // 23

// What is c equal to?
var c; // undefined


// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!

// Make a Calculator! using prompt(), and variables, make a program that does the following:
var firstNumber = prompt("Please provide the first number"); 
var secondNumber = prompt("Please provide the second number"); 
alert(Number(firstNumber) + Number(secondNumber));

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


// using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

// Function Declaraation
// Function Expression */

// function f1(a,b)
// {
//     console.log(a,b);
//      console.log(a+b);
//     return (a+b);
// }


// //f1(2,3);
// console.log(f1(2,3));

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function accept an argument of age, so that if you enter:
//checkDriverAge(92);
//it returns "Powering On. Enjoy the ride!"

// function f1(age)
// {
//   if (Number(age) < 18) {
// 	return("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	return("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	return("Congratulations on your first year of driving. Enjoy the ride!");
// }

// }

// console.log(f1(11));
// console.log(f1(19));
// console.log(f1(18));

// var a = [
//         ['a', 'b','c'],['i','h','t']
//       ];
       
//         console.log(a[0]);
//       console.log(a[0][1]);
//         console.log(a[1]);
//           console.log(a);


//var d = ['hello','world','honey','tiger'];

//console.log(d[0]);

//console.log(d.shift());
//console.log(d.pop());
//console.log(d.push('kite'));
//console.log(d.concat(['jj','uu']));
//console.log(d.push('kite','jit'));
//console.log(d);

// using this array,
 var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.

//console.log(array.shift());//
//console.log(array);


// 2. Sort the array in order.
//console.log(array.sort());

// 3. Put "Kiwi" at the end of the array

//console.log(array.push('kiwi'));

// 4. Remove "Apples" from the array

//array.splice(0, 1);//

//console.log(array.shift());
//console.log(array.reverse());

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
 var array2 = ["Banana", ["Apples", ["Oranges","juice"], "Blueberries"]];
// access "Oranges".

//console.log(array2[1][1][0]);

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var obj = {
    
    username : 'hi',
    password : 'hi'
};


// 2. Create an array which contains the object you have made above and name the array "database".

var database = [obj];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsfeed = [
    {
       username : 'a' ,
       timeline : 'helloa'
    },
    {
       username : 'ab' ,
       timeline : 'helloab' 
    },
    {
        username : 'abc' ,
       timeline : 'helloabc'
    }
    
    ];
    
/*    JAVASCRIPT TYPES
-----------------
1. Number 
2. String
3. Boolean
4. Undefined
5. Null
<!-- 6. Symbol (new in ECMAScript 6) -->
7. Object

JAVASCRIPT COMPARISONS
-----------------

!==
===
>=
<=
>
<

JAVASCRIPT VARIABLES
-----------------
var
<!-- let (new in ECMAScript 6)-->  
<!-- const (new in ECMAScript 6)-->

JAVASCRIPT CONDITIONALS
-----------------
if
else
else if
<!-- ternary operator -->
<!-- switch -->


JAVASCRIPT LOGICAL OPERATORS
-----------------
&&
||
!

JAVASCRIPT FUNCTIONS
-----------------
var a = function name() {}
function name() {}
return
<!-- () => (new in ECMAScript 6) -->

JAVASCRIPT DATA STRUCTURES
-----------------
Array
Object

JAVASCRIPT LOOPING
-----------------
for
while
do 
forEach (new in ECMAScript 5) 


JAVASCRIPT KEYWORDS
-----------------
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield



DOM Selectors
--------------
getElementsByTagName
getElementsByClassName
getElementById

querySelector
querySelectorAll

getAttribute
setAttribute

##Changing Styles
style.{property} //ok

className //best
classList //best

classList.add
classList.remove
classList.toggle

##Bonus
innerHTML //DANGEROUS

parentElement
children

##It is important to CACHE selectors in variables */

// var todos = ['hi', 'this', 'is','a','testing'];

// console.log(todos);

// var todos = [
// 	"clean room",
// 	"brush teeth",
// 	"exercise",
// 	"study javascript",
// 	"eat healthy"
// ];

// todos.forEach(function(todo)
// {
//   console.log(todo);  
//   todos = todo + '!!';
//   console.log(todos);
// });

// var len = todos.length;

// for (var i = 0; i < len; i++) {
// 	todos.pop();
// };

//console.log(todos);

// var database = [
//     {
//         username: "Muhammad",
//         password: "mmm",
//     },
//     {
//         username: "Ali",
//         password: "aaa",
//     },
//     {
//         username: "Hany",
//         password: "hhh",
//     },
//     {
//         username: "Fady",
//         password: "fff",
//     },
// ]
 
// var newsfeed = [
//     {
//         username: "Muhammad",
//         timeline: "I'm Muhammad",
//     },
//     {
//         username: "Ali",
//         timeline: "I'm Ali",
//     },
//     {
//         username: "Hany",
//         timeline: "I'm Hany",
//     },
//     {
//         username: "Fady",
//         timeline: "I'm Fady",
//     },
// ]
 
 
// var usernamePrompot = prompt("What's your user name?");
// var passworPrompot = prompt("What's your password?");
 
 
// function signIn(username, password) {
    
//     // Check the entered Credintials against our data base,
//     // and if the user is valid, display it's newsfeed and close the function
//     for (var i = 0; i < database.length; i++) {
//         if (username === database[i].username && password === database[i].password) {
//             console.log(newsfeed[i].timeline);
//             return;
//         }
//     }
 
//     //if the user is not valid, alert with the below message
//     alert('Sorry, wrong username or password!');
// }
 
//signIn(usernamePrompot, passworPrompot);

/*

var database = [
    {
        username: "Jason",
        password: "abcde"
    },
    {
        username: "Kairi",
        password: "abcde"
    },
    {
        username: "Sora",
        password: "abcde"
    }
]
 
var newsfeed = [
    {
        username: "Jason",
        timeline: "I Love Kingdom Hearts"
    },
    {
        username: "Kairi",
        timeline: "I love Jason!"
    },
    {
        username: "Sora",
        timeline: "I love Kairi"
 
    }
]
 
var loggedIn = false
var usernamePrompt
var passwordPrompt
 
 
function signInDatabase(username,password) {
    database.forEach(function(user){
        if(user.username === username && user.password === password){
            loggedIn = true;
        }
    })
}
 
 
function signIn(){
    usernamePrompt = prompt("Username:");
    passwordPrompt = prompt("Password:");
    signInDatabase(usernamePrompt,passwordPrompt);
}
 
function postTimeLine(){
    if (loggedIn === true){
        var timeline = prompt("What is on your mind?"); //prompts for timeline input
        newsfeed.push({username: usernamePrompt, timeline}); //pushes to newsfeed database
        console.log("Congratulations " + usernamePrompt + "\n" + timeline + "\n has been posted to the timeline");
    } else {
        console.log("You are not logged in");
    }
}
 
function createNewUser(){
    if (loggedIn === false){
        var userExists = false
        var username = prompt("What would you like for your Username?"); //prompts username
        var password = prompt("What would you like for your Password?"); //prompts password
        database.forEach(function(user){         //Checks if USERNAME Exists?
            if (user.username === username) {
                userExists = true;                //Toggles the UserExists Variable if a match is found
                console.log("Sorry this Username has been taken");
            }
        })
        if (userExists === false) {                //If User Exists is found to be not true,
            database.push({username, password}); //pushes new user to the database
            console.log("Congratulations your account has been created");
        }
        
    }
}
 
 
//Execution Function
function startWebsite(){
    while (loggedIn === false){
        var choice
        console.log("What would you like to do?"
        +"\n1.Login"
        +"\n2.SignUp"
        )
        var choice = prompt("Enter the Number related to your choice.");
        if(choice == 1){
            signIn();
        }
        else if(choice == 2) {
            createNewUser();
        }
 
    }
}
 
//LOGGED IN FUNCTION
 
function loggedInChoices() {
    while (loggedIn) {
        var choice
        console.log("What would you like to do?"
        +"\n1.Post to timeline"
        +"\n2.View Your Timeline"
        +"\n3.View The Entire Timeline"
        +"\n4.Logout"
        +"\nType in the prompt your decision by choosing the relevant Number. Example: 1 "
        )
        choice = prompt("Enter the Number related to your choice.");
 
 
    //Choice Code
        if (choice == 1){
            postTimeLine();
        } 
        else if (choice == 2){
            newsfeed.forEach(function(timeline) {
                if (timeline.username === usernamePrompt){
                    console.log(timeline);
                }
            })
        } 
        else if (choice == 3){
            console.log(newsfeed);
        } 
        else if (choice == 4){
            loggedIn = false
            console.log("You have been Logged Out!")
            startWebsite();//RESETS TO START WEBSITE
        } else {
            console.log("Please choose an action using the numbered options!")
        }
    }
}
 
 
 
 
//EXECUTION CODE
//Calls startWebsite function to Start Website!
startWebsite();
 
//Choices While Logged In
loggedInChoices() */


//console.log(module.exports);

// var c = 'hi';

// console.log('Outside',c);

// function f1()
// {
//     var c = "Inside function";
//     console.log("Inside" + c);
//   return c;
// }

// console.log("printing",f1());

// console.log('Last',c);


// var fun = 5;

// function f1()
// {
//     var fun = 6;
//     console.log("1", fun);
// }

// function f2()
// {
//     var fun = 7;
//     console.log("2", fun);
// }

// function f3()
// {
//     fun = 8;
//     console.log("3", fun);
// }

// console.log(fun);

// console.log(f1());
// console.log(f2());
// console.log(f3());

// console.log(fun);


// var a = 5;
// function aa() {
//     a = 10;
//     console.log(a); //10
//     var a = 20;
//     console.log(a); //20
// }
 
// aa(); //10, 20
 
// console.log(a); 

//doubts
/*var fun = 5;

function f1()
{
  
   
    //   fun = 11; 
    // console.log(fun);
     var fun = 6;
    console.log("1", fun);
}

console.log(fun);
console.log(f1());
console.log(fun);
console.log("----------------------------------"); */

// var x=5;
// console.log('I am root scope x='+x);
 
// function test() {
// // child scope 
//  x= 20
// console.log('I am child scope x='+x);
// }

// console.log(test());
 
// console.log('What scope am I? x='+x);

// var x=5;

// function f1() {

// // child scope 

//  x= 20

// console.log('I am child scope x='+x);

// }

// console.log('I am root x='+x);

// console.log(f1()); 

// console.log('What scope am I? x='+x);

// var a = 2;
// if (true) {
//     var a = 5;
//     console.log(11,a);
// }
//  console.log(12,a);
 
 
// var fun = 5;
// function f1()
// {
//       fun = 11; 
//     console.log(fun);
//      var fun = 6;
//     console.log("1", fun);
// }

// console.log(fun);
// console.log(f1());
// console.log(fun);


// const f17 = () => {
// const g = 'hi';
// const f2 = () => {
// alert(g); 
// }
// return f2; 
// }

// const h = f17();
// h();


// var q = [1,2,3,4];

// q.forEach(function(num)
// {
//     num * 2;
// });


// var q = [1,2,3,4];
// var d = [];

// q.forEach(function(num)
// {
//     d = num * 2;
// });

// d = q;


// var q = [1,2,3,4];
// var d = [];

// q.forEach(function(num)
// {
//     d.push(num * 2);
// });

// var q = [1,2,3,4];
// var d = [];

// var f = q.forEach(function(num)
// {
//     d.push(num * 2);
// });

// var q = [1,2,3,4];
// var d = [];

//  q.forEach(function(num)
// {
//   var f= d.push(num * 2);
// });

const arr = [
	{
		username: "john",
		team: "red",
		score: 5,
		items: ["ball", "book", "pen"]
	},
	{
		username: "becky",
		team: "blue",
		score: 10,
		items: ["tape", "backpack", "pen"]
	},
	{
		username: "susy",
		team: "red",
		score: 55,
		items: ["ball", "eraser", "pen"]
	},
	{
		username: "tyson",
		team: "green",
		score: 1,
		items: ["book", "pen"]
	},

];

var f = [];
arr.forEach(num =>
{
    let {username : u } = num;
    u = u + "!";
    f.push(u);
    
});

//console.log(f);
f = [];
arr.forEach(function(num)
{ 
    //console.log(num.username);
   var user =  num.username ;
   user = user + '!';
   f = user;
  // console.log(f);
})

const mapA = arr.map(num =>
{
    let {username : u } = num;
    u = u + "?"
    return u;
});

//console.log(mapA);

const filA = arr.filter(num =>
{
   // let { team } = num;
//   let {username } = num;
    return num.team == 'red';
});

// console.log(1,filA);

// for(var i=0;i<filA.length;i++)
// {
//   console.log(2,filA[i].username);  
// }

// const tot = arr.reduce((acc,num) =>
// {
//     return acc + num.score;
// },0);

// console.log(tot);

// const answer = arr.map(user => {
// 	user.items = user.items.map(item => {
// 		return item + "!"
// 	});
// 	return user;
// })
// console.log(answer);

// const r = arr.map(num =>
// {
//   // console.log(num.items);
//     let { items } = num
//   // console.log(items);
//     items.map(i =>
//     {
//         items = items + '!';
//          return items;
//     })
//     // items = items + '!';
//   // return items;
// });

// const r = [];
// arr.forEach(num=>
// {
//     let {items} = num;
//     //console.log(items);
//     items.forEach(i =>
//     {
//         i = i + '!';
//       // console.log(i);
//         r.push(i);
//     });
// })

// const y = arr.map(num =>
// {
//     let { items} = num;
//  // console.log(1,items);
//   const i =  items.map(i =>
//     {
//         return i + '!';
//     })
//   console.log(i);
//   num.items = i;
//  // console.log(num.items);
//   return num;
    
// });

// console.log(y);

// const answer = arr.map(user => {
// 	user.items = user.items.map(item => {
// 		return item + "!"
// 	});
// 	return user;
// })
// console.log(answer);


////////////////////////////////////////
// console.log(r);

// const r = arr.map(num =>
// {
//   // console.log(num.items);
//     let { items } = num
//   // console.log(items);
//     items.map(i =>
//     {
//         items = items + '!';
//          return items;
//     })
//     // items = items + '!';
//   // return items;
// });

// console.log(r);
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

// const u = dragons.filter(num => {
// return num.includes('John'); });


// console.log(1);

// setTimeout(()=> {
//     console.log(2);
// },2000);

// console.log(3);

function speak(name,energy){
  console.log("Our " + name + " has " + energy + " grams.");
  return "hi";
}

var ice_cream = {
  name: "ice cream", 
  energy: 200
};

console.log(speak(ice_cream));


