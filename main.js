const grid = document.querySelector("#grid");
const inputs = document.querySelectorAll(".mainInput");
const mouseStatusText = document.querySelector("#mouseStatusText");
const resetBtn = document.querySelector("#resetBtn");
const controls = document.querySelectorAll(".control");

let currentSize = 16;
let mouse = false;
let currentMode = "black";

function createGrid(size) {
  grid.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      const block = document.createElement("div");

      block.addEventListener("mouseenter", () => {
        if (mouse) {
          switch (currentMode) {
            case "black":
              block.style.opacity = "";
              block.style.backgroundColor = "black";
              break;
            case "rgb":
              block.style.opacity = "";
              block.style.backgroundColor = getRandomColor();
              break;
            case "shade":
              if (!block.style.opacity) {
                block.style.backgroundColor = "rgb(0, 0, 0)";
                block.style.opacity = "0.1";
              } else {
                block.style.opacity = (
                  Number(block.style.opacity) + 0.1
                ).toString();
              }
              break;
          }
        }
      });

      row.appendChild(block);
    }
    grid.appendChild(row);
  }
}

grid.addEventListener("click", () => {
  mouse = !mouse;
  const text = mouse ? "on" : "off";
  mouseStatusText.textContent = `mouse: ${text}`;
});

for (const input of inputs) {
  input.addEventListener("input", (e) => {
    currentSize = e.target.value;
    currentSize = currentSize > 100 ? 100 : currentSize;
    for (const input of inputs) {
      input.value = currentSize;
    }
    createGrid(currentSize);
  });
}

for (const control of controls) {
  control.addEventListener("click", () => {
    for (const control of controls) {
      if (control.classList.contains("active")) {
        control.classList.remove("active");
        break;
      }
    }
    control.classList.add("active");
    currentMode = control.textContent;
  });
}

function getRandomColor() {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

resetBtn.addEventListener("click", () => {
  createGrid(currentSize);
});

createGrid(currentSize);
