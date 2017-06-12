
/*

As encouraged I will go through the exercise and make a fizz bust logic

#1





The following exercises are actually more difficult than ones in the mandatory assignments. If you have not yet finished Assignment 2, it would be better to do so before tackling these.

EXERCISE #1

The fizz buzz challenge: Fizz buzz is a common entry level challenge that interviewers use to quickly guage someone's program background. 
Print the numbers from 1 to 100 to the console, however for every number that is a multiple of 5 print the word fizz, for every number that 
is a multiple of 3 print buzz. If a number is both a multiple of 5 and 3 (like 15) print the word fizzbuzz. Hint: use if/else statements.

EXERCISE #2

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each 
position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #

*/



// fizz buzz challenge

var i;


for(i = 0; i < 101; i++){



if(i % 5 == 0){
    console.log("\n FIZZ:" +  i); // if  multiple of 5
} else  if( i % 3 == 0){
    console.log("\n BUZZ:" + i); // if multiple of 3
}



}

console.log("=========== GRID EXCERISE BELOW================");
// create grid


var grid = 8;
var row = "";
var i;

for( var i = 0; i < grid;  i++){

for(var j = 0; j < grid; j++){

if((j + i) % 2 == 0)
row += " ";
else 
row += "#";



}

row += " \n";
}

console.log(row);




