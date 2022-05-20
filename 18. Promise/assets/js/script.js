// let number = Math.random() * 10;

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (number <= 5) {
//       resolve("Promise successfuly finished");
//     } else {
//       reject("Promise failed");
//     }
//   }, 5000);
// });

// console.log("Before promise");

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("After promise");

// let p1 = Promise.resolve("First promise");
// let p2 = Promise.resolve("Second promise");
// let p3 = Promise.reject("Third promise error");

// Promise.all([
//   p1,
//   p2,
//   p3.catch((err) => {
//     console.log(err);
//   }),
// ]).then((res) => {
//   console.log(res);
// });

async function fetchPost() {
  let result = await fetch("https://jsonplaceholder.typicode.com/posts");
  let response = await result.json();
  response.forEach((data) => {
    console.log(data);
  });
  //   console.log(result);
}

console.log("before result");

fetchPost();
console.log("after result");
