//functions with parameters
//parameters are values that get passed as arguements
//they help us to create functions that can be be reused through out a program

function greeting(name){
    console.log('Hello',name,'How have you been?')

}

greeting('Bernard Kim')
greeting('John James')
greeting('Kaire Lewis')

console.log('===============')
//below is a function with parameter to calculate the sum of two numbers
function addition(num1,num2){
    sum=num1+num2
    console.log('The sum of the number is',sum)

}
addition(45,60)

console.log('==================')

//area
function area(base,height){
    areaa=1/2*base*height
    console.log('The area of the triangle is',areaa)

}
area(20,12)
console.log('==================')


//si
function si(p,r,t){  
    interest=p*r/100*t
    console.log('The simple interest is',interest)

}
si(50000,5,8)
console.log('==================')