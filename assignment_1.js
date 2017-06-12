/*
Exercise #1
Initialize an empty array below in the variable numbers.
*/
var numbers = [];

/*
Exercise #2
Using the loop provided for you below, use an array's push method to insert the
 nummbers  0 to 10 into positions 0 through 10 of the numbers array you just initialized 
 above.'If you're not sure how to use the array push method go back and re read this module on data strucutres.'

Exercise #3
Test that you used the array push method correctly by printing the sum of the values 
at position 3 and 6 of the array (use the console.log() function to print to the console). 
The outputted value should be 9.
*/

//2 & 3
var total; // hold sum

for(var i=0;i<10;i++){
//use the array push() method here.
numbers.push[i];

}

console.log(" \n EXCERCISE 2 AND 3 \n The contents of the array:" + numbers);;

total = numbers[4] + numbers[7];
console.log("\n EXERCISE 3 CONTINUED \n sum of numbers is"+ total); // print sum at positions defined in exercise





/*
Exercise #4
Use the console.log() function and the array .pop() to add all the values in the array.
*/


var sum = 0;


while(numbers.length != 0){

sum = numbers.pop();
   
}

console.log(" \n EXERCISE 4 \n Sum of this array is:"+ sum);



/*
Exercise #5
Create an empty object and assign it the variable car below.
Exercise #5
Give the car object a property called "colour" and assign it the value of "black".
 Test that your code works correctly by outputing property make to the console.
  You should see the value "black" printed out.
*/


// ex. 5
var car;

car = Object();

var colour = Object.defineProperty = "black";

console.log(" \n EXERCISE 5 \n The colour of the car is:"+ colour);




