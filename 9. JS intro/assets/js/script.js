// console.log(age);

// var age = 20;

// console.log(age);

let number = 5;

// number = "text";

// console.log(number);

let string = "Hello world";

let bool = true;

let nullable = null;

let bigInt = 889292n;

let Undefined = undefined;

let exp = 5 ** 3;

// console.log(Math.pow(5, 2));
// console.log(typeof typeof number);
// console.log(typeof typeof string);
// console.log(typeof typeof bool);
// console.log(typeof typeof nullable);
// console.log(typeof typeof bigInt);
// console.log(typeof Undefined);

// console.log(exp);

// let five = 5;
// let fiveStr = "5";

// console.log(five == fiveStr);

// if (null) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// 0 || "l" && console.log("Hello");


// || false


// let example = 0 || 5 ||false || "" || 100;

// let andExample = 100 && 200 && -10 && console.log("falsy");

// console.log(example);

// console.log(andExample);


// let  arr = [1,2,3,5,6,"Tural", {firstname:"Islam"}, null, undefined]


// for(let name of arr){
//     console.log(name);
// }


// console.log("Indexs");

// for(let name in arr){
//     console.log(name)
// }

// switch (key) {
//     case value:
//     case second:
//             break;
        
    

//     default:
//         break;
// }

console.log(Sum(1,2,3,4,5));

function Sum(){
    return arguments
}


// arrowFunc();



let arrowFunc = () =>{
    console.log("Tural");
}

let arrFunc2 = a =>{
    return a
}

let arrFunc3 = (a,b,c) =>{
    console.log(a+b+c);
}

// console.log(arrFunc2(5));
arrFunc3(5,"Malik","okay");

let arrFunc4 = ()=>{
    return {
        Firstname:"Ilkin"
    }
}

let arrFunc5 = (firstname)=>({Firstname:firstname})
let obj = arrFunc4();

let arrFunc6 = (firstname,age)=>({firstname,age})

// console.log(obj);

console.log(arrFunc6("Rashid",19));
// console.log(arrowFunc);


