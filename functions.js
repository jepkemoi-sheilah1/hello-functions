//declaring and defining functions .
function printMe(){
    console.log("printing...");
}
//to call a function you must use the parenthesis then inside the parenthesis you pass in a paremeter 
printMe();
//whatever we put inside the parenthesis it is called a parameter 
function printThis(param){
    console.log(param);
}
 printThis('param');

 function nameIs(name){
    console.log(name);
 }
 nameIs("sheillah");

 function schools(name){
    console.log(name);
 }
 schools("moringa");
 //declaring functions using expressions 
 const printMeAgain = function(){
    console.log("print")
 }
 printMeAgain();
      
 const printMeAgainWithParam= function(a ,b){
    console.log(a, b)
 }
 printMeAgainWithParam( 10, 20 );

 const printMyName = function(sheilah){
    console.log("sheilah");
 }
 printMyName();

 const firstName = function(jep){
    console.log("firstName");
 }
 firstName();

 const lastName = function(jep){
    console.log("jep");
 }
 lastName();

 const MyNameIs = function(jepMemoo){
    console.log("myNameIs");
 }
 MyNameIs();

 const name = function(kibet){
    console.log("name");
 }
 name();
 //return functions
   
function calc(a, b){
    return (2*(a + b));
}
console.log(calc(2, 3));

function sum(a, b){
    return( a + b);
}
console.log(sum(2, 3));
//rest parameter (...)
function collectThings(x, ...y){
    console.log(x);
    console.log(y);
}
collectThings(1,2,3,4,5,6,7,8,9);
//the output is 1, this is for x , then the remaining array we be the output of y ,that is 2,3,4,5,6,7,8,9

//arrow functions
const add = (a, b)=>{
    return(a +b);
}
console.log(add(2,3));

//const num = (a, b) => a+b;

//nested functions - defining a function within another function 
function outer(){
    console.log("outer");
        function inner(){
        console.log("inner");
    }
    inner();
}
outer();

function outer(){
    console.log("i am the outer function");
    function inner(){
        console.log("i am the inner function")
    }
    inner();
}
outer();
function greet(name){
    function sayHello(){
        console.log("hello," + name + "!") ;
    }
    sayHello();
}
greet("Sheillah");

function makeCoffe(type){
    console.log(`making a cup of ${type} cofee...`);
    function addSugar(){
        console.log("adding sugar");
    }
    addSugar();//calling the inner funcion
    console.log("your coffe is ready!");
}
makeCoffe("latte");

function greetUser(name){
    function sayHi(){
        console.log(`hi, ${name}!`);
    }
    sayHi();//calling the inner function
}
greetUser("Sheilah");//outer function 

function outer(x){
    function inner(y){
        return (x + y);
    }
    return inner(5)

}
console.log(outer(10));
  function cookRice(type){
    console.log(`preparing a cup of ${type} rice `);
    function addSalt(){
        console.log("adding salt");
    }
    addSalt();//calling the inner function 
    console.log("your rice is ready");
  }
  cookRice("vegetable ");// calling the outer function 

  function bakeCake(type){
    console.log(`baking cake ${type} cake`);
    function addOrangeCist(){
        console.log("adding orange cist");
    }
    addOrangeCist();//calling the inner function
    console.log("your cake is ready");
  }
  bakeCake("orange")
  //closure 
  //closure is when a function remebers the variables from its parent even after the parent function has finished running...works almost similar to the nested function 
   function outer(){
    let message = "Hello from outer";//variable in the outer function 
    function inner(){
        console.log(message);//the inner function remembers the message 
    }
    return inner;//return the inner function
   }
   const myClosure =outer();//call outer and store the returned function 
   myClosure();//output:hello from outer!

   function counter(){
    let count = 0;
    return function(){
        count++;//increament count
        console.log(count);//it remembers the parent variable 
    };
   }
   const increament = counter();//icremeant keeps access to count 
   increament();
   increament();
   increament();
   increament();
     increament();

     function orderPizza(type){
        return function servePizza(){
            console.log(` here is your ${type} pizza!`);
        };
     }
     //closure comes here....after the parent variable has  completed ...it still remembers
     const myPizza = orderPizza("pepperoni");//order pizza placed
     myPizza();
     function greetUser(name){
        return function(){
            console.log(`Hello, ${name}! welcome back`);
        };
     }
     const greetSheilah = greetUser("Sheilah");
     const greetJohn = greetUser("John");

     greetSheilah();
     greetJohn();

     // a function that remembers bank balance  account 
     function createBankAccount(initialBalance){
        let balance = initialBalance;//balance is stored in the closure 
        return{
            deposit: function(amount){
                balance +=amount;
                console.log(`Deposited:${amount},New Balance:${balance}`);
            },
            withdraw:function(amount){
                if(amount > balance){
                    console.log("insufficient funds!");
                }else{
                    balance -= amount;
                    console.log(`withdrew:${amount},New Balance:${balance}`);
        
                }
            },
            checkBalance:function(){
                console.log(`current Balance:${balance}`);
            }
        };
     }
     const myAccount = createBankAccount(500);
     myAccount.deposit(50);
     myAccount.withdraw(30);
     myAccount.checkBalance();//output current balance 

     //call back functions - these are functions that take functions as an argument and they are executed later

     // Defining the `greet` function
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();  // calling the callback function
}

// Defining the `sayGoodBye` function
function sayGoodBye() {
    console.log('Goodbye!');
}

// Calling `greet` with 'Sheilah' and `sayGoodBye` as arguments
greet('Sheilah', sayGoodBye);


