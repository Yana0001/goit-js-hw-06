// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(event) {
  outputEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputEl.textContent = "Anonymous";
  }
}

let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");
