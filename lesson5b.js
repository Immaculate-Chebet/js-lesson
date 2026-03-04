//arrow function with parameters
//1
const greet =(name)=>{
    console.log('Hello'+name+'How have you been? I trust that you are good.')

}
greet('James');
greet('Joseph');


//2
const pi=22/7
const circleArea=(pi,radius)=>{
    let area=pi*radius**2
    console.log('The area of the circle is;'+area+'cm\u0002')

}
circleArea(pi,7);
circleArea(pi,28);

console.log('==================')

//3
const volume=(h,b,w)=>{
    let v=h*b*w
    console.log('The volume is',v)
}
volume(10,5,8);

console.log('=================')