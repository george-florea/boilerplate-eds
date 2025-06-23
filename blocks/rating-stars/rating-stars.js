// window.addEventListener('DOMContentLoaded', (event) => {
    let block = document.querySelector(".rating-stars div");
    console.log("here");
    let rating = block.querySelector("div:nth-child(3)");
    console.log(rating)
    debugger
    rating.innerHTML = "*".repeat(parseInt(rating.innerText));
    
// });