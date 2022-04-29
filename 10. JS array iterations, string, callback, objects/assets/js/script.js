function Sum(arr,func){
    let result = 0;
    for(let num of arr){
        if(func(num)){
            result+=num;
        }
    }
    console.log(result);
}

function isEven(number){
    return number % 2 == 0
}

let func = "Okay"

function isOdd(number){
    return number % 2 == 1
}

let arr = [1,1,5,6,7,0,-0,"",false,null,undefined,8,10,19,"Okay",{firstname:"Rashid"}]

// Sum(arr,isOdd)

// let anonymousFunc = function(){
//     console.log("Anonymous")
// }

// anonymousFunc();

// Array iterations

// let result= arr.forEach((val,i,array) => {
// //     arr[i] = val+5;
//     console.log(val);
// });

// console.log(arr);

// console.log(result);

// let result = arr.map((val,i,array)=>{
//     return val+5
// })

// console.log(result);
// console.log(arr);


// let result = arr.filter((val,i,array)=>{
//     return val % 2 == 0;
// })

// let result = arr.filter(Boolean && Number)
// console.log(result);


// let total = result.reduceRight((t,val,i,array)=>{
//     return t+=val;
// },20)

// console.log(total);


// let result = arr.every(val=>{
//     return val % 2 ==0
// })

// let result = arr.some(val=>{
//     return val%2==0;
// })

// let result = arr.findLastIndex(val=>{
//     return val==1;
// })

// function SumArgs(){
//     let args = Array.from(arguments)
//     let result = args.reduce((t,val)=>{
//         return t+val;
//     })

//     console.log(result);
// }


// SumArgs(5,10,20,30);

// let result = arr.entries();

// for(let key of result){
//     console.log(key);
// }


let result = arr.includes(20);

console.log(result);

//String methods

let str = "Hello AP204, Hello World"

// console.log(str.slice(2,5));
// console.log(str);

// console.log(str.substring(5,2));
// console.log(str);

// console.log(str.substr(-2));

// console.log(str.replace(/hello/ig,"Salam"));
// console.log(str);

// console.log(str.toString());


// const num = 5;
// try {
//     num = 10;
// } catch (error) {
//     // console.log(error);
//     throw new Error("Hey kamal whats up")
// }finally{
//     console.log("Goodbye Kamal");
// }

// Objects

let OBJECT_KEY = "GroupNo"



let stu = {
    Name:"Kamal",
    Surname:"Abishov",
    Age: 20,
    [OBJECT_KEY]: "AP204",
    getFullname: function(){
        return `${this.Name} ${this.Surname}`
    },
    getAge: ()=>{
        // return `${Age}` arrow function-da arguments keywordu yoxdur ve this keywordu window-a baglidir
    }
}

// stu.groupNo = "AP204"


// stu[OBJECT_KEY] = "AP204"

// console.log(stu.getAge());

//Function constructor

// Test("Vahid","Salimov")

// function Test(name, surname){
//     console.log(`${name} ${surname}`);
// }

function Person(name, surname){
    this.Firstname = name;
    this.Surname = surname;
}

// let person = new Person("Vahid","Salimov");

// console.log(person);


// Object create and copy

let user ={
    nickname: "shootza",
    password:"12345"
}

// Object.defineProperty(user,"age",{value:"30", writable:true})

// user.age = "50"

// console.log(user);


// Worst copy
// let user2 = user;

// user2.password = "54321" 

// console.log(user);
// console.log(user2);

// let user3 = Object.assign({},user);

// user3.password = "54321"
// console.log(user);
// console.log(user3);

// let user4 = Object.assign(user3,{type:"Hello"})
// console.log(user4);

// let user5 = Object.create(user)

// let user6 = {

// }
// user5.password = "71238123"
// console.log(user);
// console.log(user5);


// let user6 = {...user};

// let {nickname:ad,password} = user// let nickname = user.nickname

// console.log(ad);
// user6.password = "18238";
// console.log(user);
// console.log(user6);

// let user7 = JSON.parse(JSON.stringify(user))
// user7.nickname = "Kamal"
// console.log(user7);
// console.log(user);


// function Student(no, type)
// {
//     this.No = no;
//     this.Type = type;
// }

// let student = new Student("AP204","P")
// console.log(student);

// Object.setPrototypeOf(student,new Person("Malik","Safarov"))

//Class

class Human{
    constructor(name,surname){
        this.Name= name;
        this.Surname = surname;
    }

    // getName(){
    //    return this.Name
    // }
}


class Worker extends Human{
    constructor(name,surname,power){
        super(name,surname)
        this.Power = power;
    }
}

let human = new Human("Fatima","Hasanzade")
// console.log(human.getName());
let worker = new Worker("Fatima","Hasanzade","Strong")

console.log(worker);
