// let xhr = new XMLHttpRequest();

// //Methods - GET,POST,PUT,PATCH,DELETE

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let datas = JSON.parse(this.response);

//     let ul = document.createElement("ul");
//     let container = document.querySelector(".container");
//     datas.forEach((data) => {
//       let li = document.createElement("li");
//       li.innerHTML = `User id: ${data.userId}, <br> Title: ${data.title}, <br> Body: ${data.body}`;

//       ul.append(li);
//     });
//     container.append(ul);
//   }
// };

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/");
// xhr.send();

fetch("https://jsonplaceholder.typicode.com/users/5", {
  method: "GET",
})
  .then((resp) => resp.json())
  .then((datas) => {
    let container = document.querySelector(".container");
    let row = document.createElement("div");
    row.className = "row justify-content-between";
    datas.forEach((data) => {
      let card = document.createElement("div");
      let card_body = document.createElement("div");
      let title = document.createElement("h5");
      let subtitle = document.createElement("h6");
      let text = document.createElement("p");
      let link = document.createElement("a");

      card.className = "card";
      card.style.width = "18rem";
      card_body.className = "card-body";
      title.className = "card-title";
      subtitle.className = "card-subtitle mb-2 text-muted";
      title.className = "card-title";
      text.className = "card-text";
      link.className = "card-link";

      title.innerText = data.name;
      subtitle.innerText = data.username;
      text.innerHTML = `Street: ${data.address.street} <br>
      City: ${data.address.city}`;
      link.innerText = data.email;

      card_body.appendChild(title);
      card_body.appendChild(subtitle);
      card_body.appendChild(text);
      card_body.appendChild(link);
      card.appendChild(card_body);
      row.appendChild(card);
    });
    container.appendChild(row);
  });
