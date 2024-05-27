let circle = document.querySelector(".circle");
let shape = document.querySelector(".shape");
let colorBtn = document.querySelector("#changeColor");
let shapeBtn = document.querySelector("#changeShape");

colorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  circle.style.backgroundColor = changingColor();
});

function changingColor() {
  let str = "0123456789abcdef";
  let color = "#";

  for (let index = 0; index < 6; index++) {
    color += str.charAt(Math.floor(Math.random() * str.length));
  }
  return color;
}

let arr = [
  "square",
  "round",
  "diamond",
  "triangle",
  "arrow",
  "frame",
  "star",
  "cross",
  "left-point",
  "right-point",
  "parallal",
  "cheg"
];
function changingShape() {
  let idx = Math.floor(Math.random() * arr.length);
  shape.id = arr[idx];
  console.log(idx);
}

shapeBtn.addEventListener("click", changingShape);
