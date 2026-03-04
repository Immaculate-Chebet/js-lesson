//arrow function
//this is a function that was introduced in the EGMa script 6 and they give us the latest/mordern way of defining functions in compact manner
//at times the arrow function can be said to be anonymous functions why? this is because they use the names of the variable they are contained in.

const sayHello=()=> {
    console.log('This is an arrow function')
}
sayHello();  
console.log('===================')

//create an arrow function that is able to find the product of three
const product=() =>{
    let num1=3
    let num2=5
    let num3=4
    prod=num1*num2*num3
    console.log('This is the product ',prod)
}
product()