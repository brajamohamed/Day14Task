const title = document.createElement("h1");
title.id = "title";
title.innerText = "Calculator";
document.body.appendChild(title);

const desc = document.createElement("p");
desc.id = "description";
desc.innerText = "This is a DOM Calculator";
document.body.appendChild(desc);

const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const display = document.createElement("input");
display.className = "display";
display.id = "result";
display.placeholder = "0";
container.appendChild(display);

const keypad = document.createElement("div");
keypad.className = "keypad-container";
container.appendChild(keypad);

const button_C = document.createElement("button");
button_C.classList.add("button", "operator");
button_C.id = "clear";
button_C.innerText = "C";
keypad.appendChild(button_C);

const button_DEL = document.createElement("button");
button_DEL.classList.add("button", "operator");
button_DEL.innerText = "DEL";
keypad.appendChild(button_DEL);

const button_DOT = document.createElement("button");
button_DOT.classList.add("button", "operator");
button_DOT.innerText = ".";
keypad.appendChild(button_DOT);

const button_Mul = document.createElement("button");
button_Mul.classList.add("button", "operator");
button_Mul.innerText = "*";
keypad.appendChild(button_Mul);

const button_7 = document.createElement("button");
button_7.classList.add("button", "number");
button_7.innerText = "7";
keypad.appendChild(button_7);

const button_8 = document.createElement("button");
button_8.classList.add("button", "number");
button_8.innerText = "8";
keypad.appendChild(button_8);

const button_9 = document.createElement("button");
button_9.classList.add("button", "number");
button_9.innerText = "9";
keypad.appendChild(button_9);

const button_Div = document.createElement("button");
button_Div.classList.add("button", "operator");
button_Div.innerText = "/";
keypad.appendChild(button_Div);

const button_4 = document.createElement("button");
button_4.classList.add("button", "number");
button_4.id = "4";
button_4.innerText = "4";
keypad.appendChild(button_4);

const button_5 = document.createElement("button");
button_5.classList.add("button", "number");
button_5.innerText = "5";
keypad.appendChild(button_5);

const button_6 = document.createElement("button");
button_6.classList.add("button", "number");
button_6.innerText = "6";
keypad.appendChild(button_6);

const button_min = document.createElement("button");
button_min.classList.add("button", "operator");
button_min.id = "subtract";
button_min.innerText = "-";
keypad.appendChild(button_min);

const button_1 = document.createElement("button");
button_1.classList.add("button", "number");
button_1.id = "1";
button_1.innerText = "1";
keypad.appendChild(button_1);

const button_2 = document.createElement("button");
button_2.classList.add("button", "number");
button_2.id = "2";
button_2.innerText = "2";
keypad.appendChild(button_2);

const button_3 = document.createElement("button");
button_3.classList.add("button", "number");
button_3.id = "3";
button_3.innerText = "3";
keypad.appendChild(button_3);

const button_plus = document.createElement("button");
button_plus.classList.add("button", "operator");
button_plus.id = "add";
button_plus.innerText = "+";
keypad.appendChild(button_plus);

const button_0 = document.createElement("button");
button_0.classList.add("button", "number");
button_0.innerText = "0";
keypad.appendChild(button_0);

const button_00 = document.createElement("button");
button_00.classList.add("button", "number");
button_00.innerText = "00";
keypad.appendChild(button_00);

const button_equals = document.createElement("button");
button_equals.classList.add("button", "equals");
button_equals.id = "equal";
button_equals.innerText = "=";
keypad.appendChild(button_equals);

const buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
  btn.addEventListener("mousedown", (e) => {
    btn.style.transform = "scale(0.95)";
  });
  btn.addEventListener("mouseup", (e) => {
    btn.style.transform = "scale(1.0)";
  });
});

let keyboard_press = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let keypad_press = [".", "*", "/", "-", "+"];

document.addEventListener("keydown", (e) => {
  if (keyboard_press.includes(e.key)) {
    calculate(e.key);
  } else {
    if (e.key == "Enter") {
      e.preventDefault();
    }
    alert("enter only numbers");
  }
});
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.textContent);
  });
});
let output = "";
function calculate(event) {
  if (keyboard_press.includes(event)) {
    output += event;
  } else if (keypad_press.includes(event) && output !== "") {
    output += event;
  } else if (event === "=" && output !== "") {
    output = eval(output);
  } else if (event == "C") {
    output = "";
  } else if (event == "DEL") {
    output = output.toString().slice(0, -1);
  }
  display.value = output;
}
