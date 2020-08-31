let numArray1 =[];
numArray1[0]=10;
numArray1[0]=20;


let numArray2 = new Array();
numArray2.push(11);
numArray2.push(15);

numArray2.forEach(leElement=>{
    console.log(leElement);
})


let [numValue1, numValue2] = numArray2; // Destructure
console.log(numValue1);
console.log(numValue2);

//Array Destruct
let [numVal1, numVal2, numVal3] = numArray2; // Destructure
console.log(numVal1);
console.log(numVal2);
console.log(numVal3); // undefined

let [numValues1] = numArray2; // Destructure
console.log(numValues1);// 11


// Array collection of Objects

let userModelArrayObj = [
    {
        firstName : "Jueeli",
        lastName : "Sawant"
    },

    {
        firstName : "Riya",
        lastName : "Sawant"
    },

    {
        firstName : "Megha",
        lastName : "Sawant"
    },

    {
        firstName : "rajesh",
        lastName : "Sawant"
    }
]

let [userModel1, userModel2, userModel3] = userModelArrayObj;
console.log(userModel1.firstName);
console.log(userModel1.lastName);


// Object Destuct

let userModel ={
    firstName : "Megha",
    lastName : "Sawant",
    communication :{
        mobileNo : 9833456722,
        emailId : "aa@gmail.com"
    },
    login:{
        userName : "Me@99",
        password : 12344
    }
};

console.log(userModel.firstName);
console.log(userModel.communication);
console.log(userModel.communication.mobileNo);


let {
    firstName,
    lastName,
    communication :{
        mobileNo ,
        emailId 
    },
    login:{
        userName,
        password
    }
} = userModel; // Destructure

console.log(lastName);





