// // function myclass(){
// //     let laptops = 2 + 3;
    
// // }

// // console.log(myclass())

//         // let num1 = 20       //global veriable
//         // let num2 = 30       ////global veriable
//         // let name = "Abubakar"   //global veriable

//         // function result(){
//         //     let num1 = 10
//         //     let num2 = 11

//         //     function multiply(){    //Nestic function
//         //         return `${name} result ${num1 * num2}`

//         //     }
//         //     return multiply() 
//         //     }
//         //     console.log(result())


//         //     //arrow function..............

//         //     const sum = (x,y) => x + y

//         //     console.log(sum(100,100))

//     //Array push method (Appends new elements to the end of an array, and returns the new length of the array)................
//                 // let fruit = ['Apple', 'Banana'];
//                 // fruit.push('Orange', 'Mango')
//                 // console.log(fruit)


//     //Array pop method (remove new elements from the end of an array, and returns the new length of the array)................
//             // let fruit = ['Apple', 'Banana'];
//             // fruit.pop()
//             // console.log(fruit)

//             // //Array forEach method............
//             // let fruit = ['Apple', 'Banana'];
//             // fruit.forEach((fruit) => {
//             // console.log(fruit)
//             // })

    //Loops.......
// for(let i = 0; i < 5; i++){
//     console.log("Number:" + i)    // for loops............
    
// let n = 0;                      // while loop............
// while (n < 3) {
//   n++;
// }
// console.log(n);

// let i = 1;

// while (i < 4) {     // loop runs until i is less than 4
//     console.log(i);
//     i++;
// }



// // }


// let string = "my name is abubakar"
// console.log(string.toUpperCase());

// let string = "MY NAME IS ABUBAKAR"
// console.log(string.indexOf("ABUBAKAR"));

// let string = "my name is abubakar"
// console.log(string.startsWith("my"));

// function testNum(a) {
//     let result;
//     if (a > 0) {
//       result = 'positive';
//     } else {
//       result = 'NOT positive';
//     }
//     return result;
//   }
  
//   console.log(testNum(-5));

// let paper = "Urdu";
 
// switch (paper) {
//   case "Physics":
//     console.log("Aj physics ka paper ha");
//     break;
//   case "Urdu":
//     console.log("Aj Urdu ka paper ha" + emoji);
//     break;
//   case "Math":
//     console.log("Aj Math ka paper ha");
//     break;
//   case "Computer Science":
//     console.log("Aj Computer Science ka paper ha");
//   default:
//     console.log("Aj paper nhi ha");
//     break;
// }


// let num = 3
// let numtype;
// let emoji = string.fromcodepoint(0x1F621)

// switch(true){
//   case(num > 0):
//   numtype = "positive"
//   console.log("positive")
//   break;

//   case (num < 0):
//   numtype = "positive"
//   console.log("Negative")
//   break;

//   default: console.log("Not applicable")


// }


//concat method
// let array1 = [1,2,3,4,5]
// let array2 = [6,7,8,9]

// let makecopy = array1.concat(array2)
// console.log(makecopy)



//Date methods................

// let currentdate = new Date()
// console.log(currentdate.getDay()) //. k baad tmam methods use kr skty han date k like .getday etc


//Objects...........
// const instaUser = {
//     name: "Abubakar",
//     id: 1234,
// }
// console.log(instaUser.id)

// const obj = {           
//     prop: 42,
//   };

//   Object.freeze(obj);            //freeze method of object
//   obj.prop = 33;
//   console.log(obj.prop);
  

// const student = {

//     // data property
//     firstName: 'Monica',
    
//     // accessor property(getter)
//     get getName() {
//         return this.firstName;
//     }
// };
// // console.log(student.firstName)
// // console.log(student.getName)
// console.log(student.getName())      //error will be occure .getname is not a function



//callback............
// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3");
//         callback();
//     }, 1000);
// }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps completed!");
//         });
//     });
// });

//callback example 2............
// function add(a, b, callback) {
//   let result = a + b;
//   console.log("Addition:", result);
//   callback(result); // Call the next operation with the result
// }

// function multiply(result, callback) {
//   let newResult = result * 2;
//   console.log("Multiplication:", newResult);
//   callback(newResult); // Call the next operation with the new result
// }

// function subtract(result, callback) {
//   let finalResult = result - 3;
//   console.log("Subtraction:", finalResult);
//   callback(finalResult); // Final callback, but could chain more if needed
// }

// function displayResult(result) {
//   console.log("Final Result:", result);
// }

// // Start the sequence
// add(5, 3, (result) => {
//   multiply(result, (newResult) => {
//       subtract(newResult, (finalResult) => {
//           displayResult(finalResult); // Display the final result
//       });
//   });
// });





// Promises.............(Promise are available after callback)
// let orderPizza = new Promise((resolve, reject) => {
//     let pizzaReady = true; 
  
//     if (pizzaReady) {
//       resolve("Pizza is delivered!");
//     } else {
//       reject("Sorry, the pizza didn't arrive.");
//     }
//   });

//   orderPizza
//     .then((message) => {
//       console.log(message); 
//     })
//     .catch((error) => {
//       console.log(error);
//     });



async function fetchUser() { 
    const response = await fetch ('https://jsonplaceholder.typicode.com/users/1);
    const user = await response.json(); 
    console.log(user);

    }
    fetchUser(); 
    

