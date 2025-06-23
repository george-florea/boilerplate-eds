let block = document.querySelector(".rating-stars div");
let rating = block.querySelector("div:nth-child(3)");
rating.innerHTML = "*".repeat(parseInt(rating.innerText));
