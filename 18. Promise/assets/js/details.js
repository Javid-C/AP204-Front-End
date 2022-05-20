let params = new URL(document.location).searchParams;
let id = params.get("data-id");
let url = `https://jsonplaceholder.typicode.com/photos/${id}`;
fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    let html = `<div class="image col-lg-5">
      <img style="width: 100%;" src="${data.url}" alt="">
  </div>
  <div class="info col-lg-6">
      <div class="title">
          <h1>${data.title}</h1>
      </div>
      <div class="mt-5 price">
          <span>$ ${data.id}30.00</span>
      </div>
      <div class="details mt-5">
          <ul>
              <li><span>Brand: <span class="common">Common Good</span></span></li>
              <li><span>SKU: CGLD</span></li>
              <li><span>Weight: 1.00 kgs</span></li>
              <li><span>Shipping: ${data.thumbnailUrl}</span></li>
          </ul>
      </div>
      <hr>

      <div class="quantity mt-4">
          <span>Quantity:</span><br>
          <input style="width: 70px;" value="1" class="form-control" type="number" max="50" size="1"
              maxlength="1">
      </div>

      <div class="buttons d-flex mt-3" style="justify-content: space-evenly;">
          <div class="add">
              <a href="" class="btn btn-danger">Add to cart</a>
          </div>
          <div class="wishlist">
              <a href="" class="btn btn-dark">Add to wish list</a>
          </div>
      </div>

  </div>`;
    let row = document.querySelector(".row");
    row.innerHTML = html;
  });
