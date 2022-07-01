const section = document.querySelector("section");
let showCostBtn = document.getElementById("showCostBtn");
let nameEntered = document.getElementById("nameInput");
let label = document.getElementById("label");
let errorDiv = document.querySelector("div");

let message = document.createElement("p");
let price = document.createElement("p");
let div = document.createElement("div");
let sum = 0;

const handleSubmit = (e) => {
  e.preventDefault();
  if (nameEntered.value.length > 0) {
    let signName = nameEntered.value.split("");
    sum = nameEntered.value.length *= 5;
    div.classList.add("sign");
    signName.map((letter) => {
      let p = document.createElement("p");
      p.classList.add("letters");
      p.textContent = letter;
      div.appendChild(p);
    });
    price.classList.add("price");
    div.appendChild(price);
    section.appendChild(div);
    price.textContent = `$${sum}`;
    showCostBtn.hidden = true;
    nameEntered.hidden = true;
    message.hidden = true;
    label.hidden = true;
  } else {
    errorDiv.appendChild(message);
    message.classList.add("message");
    message.textContent = "please enter a name";
    nameEntered.classList.add("wrong");
  }
};

showCostBtn.addEventListener("click", handleSubmit);
