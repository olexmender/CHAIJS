// const tinderUser=new Object();
// console.log(tinderUser);
const tinderUser={};

tinderUser.id="123abc";
tinderUser.name="sam";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);    

const regularUser={
    email:"sameer@google.com",
    fullname:{
        userfullname:{
            firstname:"sameer",
            lastname:"choudhary",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3=Object.assign(obj1,obj2);

// const obj3={...obj1,...obj2};

// console.log(obj3);

//values from data bases come like arrays with objects in it

const users=[
    {
        id:1,
        email:"sameer@gmail.com",
    },

    {
        id:1,
        email:"sameer@gmail.com",
    },

    {
        id:1,
        email:"sameer@gmail.com",
    },

    {
        id:1,
        email:"sameer@gmail.com",
    },
];

// console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));