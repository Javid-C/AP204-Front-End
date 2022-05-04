let success= (e)=>{
    console.log(e);
}
let error= (e)=>{
    console.log(e);
}

// window.navigator.geolocation.getCurrentPosition(success,error)

// setTimeout(() => {
//     console.log("This is text which has been written after 5 seconds");
// }, 1000);

// setInterval(() => {
//     console.log("Interval");
// }, 1500);


// let heading = document.querySelector('.container .title');

// // heading.style.color = 'red';

// let headings = document.querySelectorAll('.container .title')

// headings.forEach((h1)=>{
//     h1.style.backgroundColor = 'green'
// })
// console.log(headings);

// let firstH1 = document.getElementById('first');
// console.log(firstH1);

// let headings = Array.from(document.getElementsByClassName("title"));

// headings.forEach(h1 => {
//     h1.style.color = 'blue'
// });

// console.log(headings[0]);

// let headings = document.getElementsByTagName('h1');

// console.log(headings);


// let p = document.createElement("p");
// let span = document.createElement("span")

// p.className = "paragraph info"
// p.className = "desc"
// p.id = "test"
// p.classList.add("paragraph")
// p.classList.add("desc")
// p.classList.add("info")
// p.classList.remove("desc")

// p.classList.toggle("desc")
// span.innerText = "This is span element"
// p.innerHTML = "<strong>Hello world</strong>"
// p.innerText = "<strong>Hello world</strong>"

// let container = document.querySelector(".container")

// let firstH1 = document.getElementById('first')
// let result = container.removeChild(firstH1)

// let result = container.append("This is append event",p,span);

// let resultChild = container.appendChild(span);
// container.appendChild(p)
// console.log(result);

// let container =  document.querySelector('.container')
// container.append("This is just text")


// console.log(container.childNodes);

let h1 = document.getElementById("first")

// console.log(document.documentElement.parentNode);

let id = h1.getAttribute("id")
h1.setAttribute('data-custom','random');

console.log(h1.getAttribute('data-custom'));
