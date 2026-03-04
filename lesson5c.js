//exporting modules
//we export modules so that we use /utilise them in other files/modules in our program

export const calc=(x,y)=>{
    let diff=x - y
    console.log('The diff is',diff)
};

export const si =(p,r,t) =>{
    let interest=p*r/100*t
    console.log('The interest is',interest)
};

const bmi = (weight,height)=>{
    let ans=weight/(height**2)
    console.log('the bmi is',ans)

}
export{bmi};
