fetch("https://jsonplaceholder.typicode.com/photos", {
  method: "GET",
})
  .then((resp) => resp.json())
  .then((data) => {
    let container = document.querySelector(".container");
    let row = document.createElement("div");
    row.className = "row justify-content-between mt-5";

    for (let i = 0; i < data.length - 4952; i++) {
      let card = document.createElement("div");
      let forimg = document.createElement("div");
      let images = document.createElement("img");
      let thumbnail = document.createElement("img");
      let card_body = document.createElement("div");
      let title = document.createElement("h5");
      let text = document.createElement("p");
      let body_link = document.createElement("div");
      let form = document.createElement("form");
      let inp = document.createElement("input");
      let submit = document.createElement("button");

      card.className = "card mt-5 ";
      card.style.width = "18rem";
      forimg.className = "tural d-flex";
      images.className = "card-img-top mt-2";
      images.style.width = "150px";
      thumbnail.className = "card-thm-top ms-3";
      thumbnail.style.width = "100px";
      card_body.className = "card-body";
      title.className = "card-title";
      text.className = "card-text";
      body_link.className = "card-body-link";
      form.setAttribute("action", "details.html");
      inp.value = data[i].id;
      inp.type = "hidden";
      inp.setAttribute("name", "data-id");
      submit.type = "submit";
      submit.innerText = "Read more";

      images.src = data[i].url;
      thumbnail.src = data[i].thumbnailUrl;
      title.innerText = data[i].id;
      text.innerText = data[i].title;

      forimg.appendChild(images);
      forimg.appendChild(thumbnail);
      card_body.appendChild(title);
      card_body.appendChild(text);
      form.append(inp, submit);

      card.appendChild(forimg);
      card.appendChild(card_body);
      card.appendChild(body_link);
      card.append(form);
      row.appendChild(card);
    }
    container.appendChild(row);
  });
