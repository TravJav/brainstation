//magic eightball

/*

The program above generates a random number between 1 and 
the "numberofreplys". Your challenge is to program the logic 
of how a magic eight ball works. The ask() function will provide 
you a random number and based on that random number you should 
output a different reply. A default reply has been provided already. 
You should use an if, else if, else chain to choose a different reply 
"If" the random number is a certain value.

*/


var numberofreplys = 10000;


function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

    /*
    write conditional logic here using if, else if, and else
*/

    console.log(choice);

if(choice == 10 || 20 || 30 || 40 || 50 || 60 || 70 || 80 || 90){ 
    console.log("You are on a even number and a multiple of 10!");
} else {

if(choice  < 500){
    console.log("you landed right under 500!");
} else {

if( choice > 500 && choice < 1000){
console.log(" You're under a thousand");

} else {

if ( choice < 5000 && choice > 1000){
    console.log("wow high numbers!");
} else if (choice > 5000){
    console.log("\n wow."+choice+"was a high number");
}

}

}

}

} // end func

ask();


var num_of_replies = 20000;

function prompt_user(){
var choose = Math.floor(Math.random() * num_of_replies +1);


user_response(choose); // enter other function
}



function user_response(random_number){

switch (random_number) {
case (random > 1 &&  random_number < 1000):
console.log(" \n Gotchya! number was less that 1000, \n Your number:" +random_number);
    break;

case (random_number > 1000 && random_number < 10000):
console.log(" \n Gotchya! number was greater than  1000, and less than 10k \n Your number:" +random_number);
    break;
    
case (random_number > 10000 && random_number < 50000):
console.log(" \n Gotchya! number was less that 50k but more than 10k, \n Your number:" +random_number);
    break;  

  default:

console.log("\n Well you landed a number outside or swtich and case block!: "+ random_number);
     break;
}

} // end func
