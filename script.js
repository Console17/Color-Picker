let colorsContainer = document.querySelector(".colors");

for (i = 0; i < 12; i++) {
  let div = document.createElement("div");
  let btn = document.createElement("button");

  div.className = "card";
  btn.className = "btn";

  btn.textContent = "Copy";

  colorsContainer.appendChild(div);
  div.appendChild(btn);
}

const cards = document.querySelectorAll(".card");
const btns = document.querySelectorAll(".btn");

cards.forEach((card) => {
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  card.style.background = `rgb(${random1}, ${random2}, ${random3})`;
  let input = document.createElement("input");
  input.value = `rgb(${random1},${random2},${random3})`;
  card.appendChild(input);
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let selectedBtn = e.target;
    let copyText = selectedBtn.parentElement.lastChild;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  });
});
