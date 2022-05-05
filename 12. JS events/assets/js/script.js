let btn = document.querySelector(".clickBtn")
let box = document.querySelector('.box');

// btn.onclick = function(){
//     console.log("click");
// }

// btn.ondblclick = function(){
//     console.log("Double click");
// }

// btn.ondblclick = ()=>{
//     console.log("Arrow func double click");
// }

// btn.onmousedown = function(){
//     btn.className = "mt-5 ms-5 btn clickBtn btn-danger"
// }


// btn.onmouseup = function(){
//     btn.className = "mt-5 ms-5 btn clickBtn btn-primary"
// }

// box.onmouseover = function(){
//     console.log("Mouse over");
// }

// box.onmouseout = function(){
//     console.log("Mouse out");
// }
// box.onmousemove = function(){
//     console.log("Mouse moving");
// }

// box.onwheel = function(){
//     console.log("Scrolling");
// }

// window.onscroll = function(e){
//     console.log(window.scrollY);
// }


// window.onclick = function(e){
//     console.log('page Y value: ' + e.clientY);
// }

window.onclick = function(){
    let lastContext = document.querySelector(".contextMenu")
    lastContext ? document.body.removeChild(lastContext) : null
}

window.oncontextmenu = function(e){
    e.preventDefault();
    let lastContext = document.querySelector(".contextMenu")
    lastContext ? document.body.removeChild(lastContext) : null
    let context = document.createElement("div");
    context.className = "contextMenu"
    context.style.height = "250px"
    context.style.width = "150px"
    context.style.backgroundColor = "blue"
    context.style.position = 'absolute'
    context.style.top = `${e.pageY}px`
    context.style.left = `${e.pageX}px`
    document.body.append(context)
}
//e - Event object
// window.onkeydown = function(e){
//     e.preventDefault();
//     console.log("Key down");
// }

// window.onkeypress = function(e){
//     e.preventDefault()
//     console.log("Key press")
// }

// window.onkeyup = function(){
//     console.log("Key up");
// }

let input = document.getElementById("textInp");

let select = document.getElementById("formSelect")
let ul = document.getElementById("searchList")
let form = document.getElementById("form")

// input.onblur = function(){
//     console.log("Blur");
// }

// select.onchange = function(){
//     console.log("changed");
// }

// input.oninput = function(){
//     let li  = document.createElement("li")
//     li.className = "list-item"
//     li.innerText = this.value
//     ul.append(li)
// }

// input.onselect = function(){
//     console.log("selected");
// }



// form.onsubmit = function(e){
//     e.preventDefault()
//     console.log("Hello");
//     setTimeout(() => {
//         form.submit();
//     }, 2000);
// }

let bubble = document.querySelector(".bubbling")
// let container = document.querySelector(".container")
// let row = document.querySelector(".row")

// bubble.onclick = function(e){
//     // console.log(this);
//     console.log("btn");
// }

// container.onclick = function(e){
//     // console.log(this);
//     console.log("container");
// }

// row.onclick = function(e){
//     console.log(this);
//     console.log("row");
// }


// bubble.onclick = function(){
//     console.log("first");
// }
// bubble.onclick = function(){
//     console.log("second");
// }
// bubble.onclick = function(){
//     console.log("third");
// }

// bubble.ondblclick = function(){
//     console.log("dblclick");
// }

// let third = function(){
//     console.log('third');
// }

// bubble.addEventListener('click', function(){
//     console.log('first');
// })

// bubble.addEventListener('click', function(){
//     console.log('second');
// });

// bubble.addEventListener('click',third)



// bubble.removeEventListener('click', third) 

let buttons = document.querySelectorAll(".btn")
let items = document.querySelectorAll(".item")

let lastItem;

buttons.forEach(btn=>{
    btn.addEventListener("click",function(){
        //worst case
        // items.forEach(item=>{
        //     item.style.backgroundColor = "transparent"
        // })
        lastItem ? lastItem.style.backgroundColor = "transparent" : null

        
        let color = btn.getAttribute("data-color")
        let box = document.getElementById(color)
        box.style.backgroundColor = color;
        lastItem = box;
    })
})
