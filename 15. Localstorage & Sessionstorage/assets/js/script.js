// localStorage.setItem("count", "1");
// localStorage.setItem("product", "1");

// let count = localStorage.getItem("count");

// console.log(count);

// localStorage.removeItem("product");

// sessionStorage.setItem("count", 1);

let btn = document.querySelector(".btn");

document.addEventListener("DOMContentLoaded", function () {
  let mode = localStorage.getItem("mode");

  if (mode === "dark") {
    document.body.style.backgroundColor = "black";
    btn.innerText = "Turn on the light mode";
    btn.className = "btn btn-outline-light";
  } else if (mode === null) {
    document.body.style.backgroundColor = "transparent";
  } else {
    document.body.style.backgroundColor = "transparent";
  }
});

btn.addEventListener("click", function () {
  let mode = localStorage.getItem("mode");
  if (mode === "dark") {
    localStorage.setItem("mode", "light");
    document.body.style.backgroundColor = "transparent";
    this.innerText = "Turn on the dark mode";
    this.className = "btn btn-outline-dark";
  } else if (mode === null) {
    localStorage.setItem("mode", "dark");
    document.body.style.backgroundColor = "black";
    this.innerText = "Turn on the light mode";
    this.className = "btn btn-outline-light";
  } else {
    localStorage.setItem("mode", "dark");
    document.body.style.backgroundColor = "black";
    this.innerText = "Turn on the light mode";
    this.className = "btn btn-outline-light";
  }
});
