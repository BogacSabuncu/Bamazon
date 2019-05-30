$(document).ready(function() {
    
   $(document).on("click", ".buy-button", handleBuy);

    function createCard(product){

        const card = $(`<div class="card m-3" style="width: 18rem; display:inline-block;">
        <img src="${product.product_image}" class="card-img-top" alt="#">
        <div class="card-body">
          <h5 class="card-title">${product.product_name}</h5>
          <p class="card-text">${product.department_name}</p>
          <h6 class="card-text">${product.price}$</h6>
          <p class="card-text">${product.stock_quantity} Left in stock!</p>
          <button class="btn btn-primary buy-button" attr-id="${product.id}">Buy Now!</button>
        </div>
      </div>`)

        return card
    }

    function getProducts(){
        $.get("/api/products", function(products){
            console.log(products);
        
            let productCard = $("#product-container");

            products.forEach(product => {
                let newCard = createCard(product);
                productCard.append(newCard);
            });

        });
    }


    function handleBuy(){
        let productId = $(this).attr("attr-id");

        $.ajax({
            method: "PUT",
            url:`/api/buyitem/${productId}`
        }).then(function(){
            location.reload();
        });
    }

    // $(".buy-button").click(function() {
    //     console.log("here");

    //     console.log($(this).attr("attr-id")); 
    // });

    getProducts();
});