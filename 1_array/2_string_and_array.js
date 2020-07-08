//遇到string相关的问题就用split 方法把string 转化成 array ，
//然后用join 将array转化成string

//create a function that reverses a string:
// "hi my name is zhang" should be:
// "gnahz si eman ym ih"

reverse=(str)=>{
    //check input
    //typeof 后面不能打括号
    if(!str || str.length<2 || typeof str!=="string"){
        return "emm not good"
    }

    backwards=[];
    for(let i=str.length;i--;i>=0){
        backwards.push(str[i]);
    }

    return backwards.join("")
}


reverse2=(str)=>{

    //check input
    //typeof 后面不能打括号
    if(!str || str.length<2 || typeof str!=="string"){
        return "emm not good"
    }
    let array=str.split("");
    return array.reverse().join("");
}


//更简单的一种方法
reverse3=str=>{return [...str].reverse().join("")};



console.log(reverse("hi my name is zhang"));

console.log(reverse2("hi my name is zhang"));

console.log(reverse3("hi my name is zhang"));

