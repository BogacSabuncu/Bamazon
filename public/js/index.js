$(document).ready(function () {

    $(document).on("click", ".buy-button", handleBuy);

    function createCard(product) {

        if (product.stock_quantity <= 0) {
            const card = $(`<div class="card m-4" style="width: 18rem; display:inline-block;">
            <img src="${product.product_image}" class="card-img-top" alt="#">
            <div class="card-body">
              <h5 class="card-title">${product.product_name}</h5>
              <p class="card-text">${product.department_name}</p>
              <h6 class="price">$${product.price}</h6>
              <p class="card-text">Sorry we are out of Stock!</p>
            </div>
              
        <button class="btn-secondary buy-button" attr-id="${product.id}" disabled>Buy Now!</button >
          </div>`)

            return card
        }
        else {
            const card = $(`<div class="card m-4" style="width: 18rem; display:inline-block;">
            <img src="${product.product_image}" class="card-img-top" alt="#">
            <div class="card-body">
              <h5 class="card-title">${product.product_name}</h5>
              <p class="card-text">${product.department_name}</p>
              <h6 class="price">${product.price}$</h6>
              <p class="card-text">${product.stock_quantity} Left in stock!</p>
            </div>
            <button class="buy-button" attr-id="${product.id}">Buy Now!</button>
          </div>`)


            return card
        }

    }

    function getProducts() {
        $.get("/api/products", function (products) {
            console.log(products);

            let productCard = $("#product-container");

            products.forEach(product => {
                let newCard = createCard(product);
                productCard.append(newCard);
            });

        });
    }


    function handleBuy() {
        let productId = $(this).attr("attr-id");

        $.ajax({
            method: "PUT",
            url: `/api/buyitem/${productId}`
        }).then(function () {
            location.reload();
        });
    }

    getProducts();
});