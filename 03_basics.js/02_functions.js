//functions part 2
//functions with objects
function calculateCartPrice(...num1){/*this 3 dots refer to rest operator 3 dots is also used in spread operator it depends on the situation weather it would be called rest or spread*/
    return num1;
}

// console.log(calculateCartPrice(200,300,400,500,600,700,800,900));

const user={
    name:"sameer",
    price:199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

/*we can also pass this instead of creating that user object we can write 

handleObject({
username:"sam",
price:199,
}); 

*/

// handleObject(user);

const myNewArray=[200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));
/* we can also do this instead of console.log(returnSecondValue(myNewArray));
this we can do this by passing array in argument
console.log(returnSecondValue([200,400,100,600]));
*/