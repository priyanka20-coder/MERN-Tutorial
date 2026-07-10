let url = "https://dummyjson.com/products?limit=500";

let main = document.getElementById("product");

fetch(url)
    .then((res) => {
        console.log(res)
        return res.json();
    })
    .then((data) => {
        console.log(data)

        for (let product of data.products) {

            let card = document.createElement("div");
            card.classList.add("card");

            let img = document.createElement("img");
            img.src = product.thumbnail;

            let title = document.createElement("h2");
            title.innerText = product.title;

            let desc = document.createElement("p");
            desc.innerText = product.description;

            let Addcart = document.createElement("div");
            Addcart.classList.add("Addcart");

            let price = document.createElement("h3");
            price.innerText = `${Math.round(product.price * 86)}/-`;

            let button = document.createElement("button");
            button.classList.add("btn");
            button.innerText = "Add to cart";

            Addcart.append(price, button);

            card.append(img, title, desc, Addcart);

            card.addEventListener("click", () => {
                console.log(product.id);
                window.location.href = `detailProduct.html?id=${product.id}`;
            });

            main.append(card);
        }

    })
    .catch((err) => {
        console.log(err);
    });