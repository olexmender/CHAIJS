
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("R");
}

// console.log(sayMyName);

// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2);
// }

// addTwoNumbers(3,3);//arguments

function addTwoNumbers(number1,number2){//parameters
    console.log("sameer");
    return number1+number2;
    //console.log("sameer"); //this console.log would never work because after return function do not do any work
}

// const result=addTwoNumbers(3,3);

// console.log(result);

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("sameer choudhary"));
console.log(loginUserMessage());