let colorcode = document.getElementById("colorcode");
let genColor = document.getElementById("genColor");
let code = "123456789ABCDEF";

function generateColorCode() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += code[Math.floor(Math.random() * code.length)];
  }
  colorcode.innerHTML = hex;
  colorcode.style.color = hex;
  document.body.style.background = hex;
}
