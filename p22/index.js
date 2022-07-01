const section = document.querySelector("section");
const showCostBtn = document.getElementById("showCostBtn");
const nameEntered = document.getElementById("nameInput");
const label = document.getElementById("label");
const errorDiv = document.querySelector("div");

const message = document.createElement("p");
message.classList.add("message");

const price = document.createElement("p");
price.classList.add("price");

const div = document.createElement("div");
div.classList.add("sign");
div.appendChild(price);

let sum = 0;

const handleSubmit = (e) => {
  e.preventDefault();
  if (nameEntered.value.length > 0) {
    const signName = nameEntered.value.split("");
    sum = nameEntered.value.length *= 5;
    signName.map((letter) => {
      const p = document.createElement("p");
      p.classList.add("letters");
      p.textContent = letter;
      div.appendChild(p);
    });
    section.appendChild(div);
    price.textContent = `$${sum}`;
    showCostBtn.hidden = true;
    nameEntered.hidden = true;
    message.hidden = true;
    label.hidden = true;
  } else {
    errorDiv.appendChild(message);
    message.textContent = "please enter a name";
    nameEntered.classList.add("wrong");
  }
};

showCostBtn.addEventListener("click", handleSubmit);
