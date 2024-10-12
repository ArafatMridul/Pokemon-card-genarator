const container = document.querySelector(".container");
const card = document.querySelector(".card");
const btn = document.querySelector("button");
const input = document.querySelector("#_input");

btn.addEventListener("click", ()=> {
    for(let i=1; i<=100; i++) {
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        const newImg = document.createElement("img");
        const h1 = document.createElement("h1");
        h1.innerText = i;

        newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
        newCard.append(newImg, h1);

        container.appendChild(newCard);
    }
})

container.addEventListener("click", (e) => {
    if (e.target.className === "card") {
        e.target.remove();
    } else if (e.target.parentElement.className === "card") {
        e.target.parentElement.remove();
    }
})