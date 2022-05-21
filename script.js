//2
let numbers = [50, 70, 10, 20, 90]; 

for (let x=0; x<numbers.length; x++){
    console.log(numbers [x]);
}
for (let item of numbers) {
    console.log(item);
    }

//4
    let user = {
        name: 'giorgi',
        age:  20,
        studentstatus: 'active'
    }
    
if (user.age < 18) {
        console.log('Hello');
    } else if (user.name === 'giorgi') {
        console.log('Hello Giorgi!');
    } else if (user.studentstatus === 'active' || user.age < 25) {
        console.log('Hello World!');
    } else {
        console.log('error')
    }

//6
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for (let x of array){
    for (let item of x){
    if(item > 0) {
        console.log (item); 
    }
}

}

let array1 = [32, 10, "hello", null, "hello2", 50]

for (let z of array1) {
        if(z % 5 == 0) {
            console.log (z); 
    }
}

//ფუნქციები

function sum (...args) {
    let sumNumbers = 0;
    for (let item of args) {
        if (item > 0) {
            sumNumbers += item;
            console.log(sumNumbers)
        }
    }
}
let answer = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

function sum (...args) {
    let sumNumbers = 0;
    for (let item of args) {
            sumNumbers += item;
            console.log(sumNumbers)
    }
}

let answer1 = sum (10, 50, 6, 7, 8, 11, 6, 3, 9);


let user1 = {
    firstname:"giorgi",
    lastname: "saakadze",
    age: 32,
    isloggedin: true
   }
function myName (){
   if (user1.isloggedin == true){
    console.log (user1.firstname + " " + user1.lastname);
    }else{
        console.log ("false");
    }
}
myName (user1); 
       
function findMax(arr) {
    return Math.max.apply(null, arr);
  }
  
  var new_arr = [5, 6, -5, 200];
  
  console.log(findMax(new_arr))
