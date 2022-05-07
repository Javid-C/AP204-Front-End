// let tasks = document.querySelectorAll(".task") 

// let zones = document.querySelectorAll(".dropZone")

// tasks.forEach(task=>{
//     // task.addEventListener('drag',()=>{
//     //     console.log("dragging");
//     // })

//     task.addEventListener('dragstart',(e)=>{
//         e.dataTransfer.setData("text",e.target.id)
//         task.classList.add("element-opacity")
//     })

//     task.addEventListener('dragend',()=>{
//         console.log("Drag process is finished by me");
//         task.classList.remove("element-opacity")

//     })
// })


// zones.forEach(zone=>{
//     zone.addEventListener('dragenter',function(){
//     })

//     zone.addEventListener('dragleave',function(){
//         this.parentNode.classList.remove("zone-shadow")

//     })
//     zone.addEventListener('dragover',function(e){
//         e.preventDefault();
//         this.parentNode.classList.add("zone-shadow")

        

//         // console.log("Item is dragging over drop zone");
//     })

//     zone.addEventListener('drop',function(e){
//         let droppedItemId = e.dataTransfer.getData("text");

//         this.parentNode.classList.remove("zone-shadow")
//         let item  =  document.getElementById(droppedItemId);
//         zone.appendChild(item)

//     })

// })

let input = document.getElementById("inp")

let list = document.querySelector("ul")

input.addEventListener("keypress",function(e){
    if(e.keyCode ==13){
        let li = document.createElement("li")
        li.className = "list-item mt-3 border py-2"
        li.innerText = this.value;
        list.appendChild(li);
        this.value = ""
    }
})