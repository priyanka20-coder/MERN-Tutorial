let id = new URLSearchParams(window.location.search).get("id");

console.log(id);

let url = `https://dummyjson.com/products/${id}`;

let detailProduct = document.getElementById("detailProduct");

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((product) => {

        console.log(product);

        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.src = product.thumbnail;

        let card1 = document.createElement("div");
        card1.classList.add("card1");

        let title = document.createElement("h1");
        title.innerText = product.title;

        let desc = document.createElement("p");
        desc.innerText = product.description;

        let price = document.createElement("h3");
        price.innerText = `${Math.round(product.price * 86)}/-`;

        let discountPercentage = document.createElement("h4")
        discountPercentage.innerText = "Discount : " + product.discountPercentage;

        let category = document.createElement("h4");
        category.innerText = "Category : " + product.category;

        let rating = document.createElement("h4");
        rating.innerText = "Rating : " + product.rating;

        let stock = document.createElement("h4");
        stock.innerText = "Stock : " + product.stock;

        let button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = "Add to cart";

        let button1 = document.createElement("button");
        button1.classList.add("btn");
        button1.innerText = "Buy Now";

        card.append(img, card1);

        card1.append(title, desc, price, discountPercentage, category, rating, stock, button, button1);

        button.addEventListener("click", () => {
            console.log(product.id)
            window.location.href = `cart.html?id=${product.id}`;
        });

        detailProduct.append(card);

    })
    .catch((err) => {
        console.log(err);
    });