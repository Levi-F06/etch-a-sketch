const grid = document.querySelector("#grid");
const inputs = document.querySelectorAll(".mainInput");
const mouseStatusText = document.querySelector("#mouseStatusText");

let currentSize = 16;
let mouse = false;

function createGrid(size) {
  grid.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      const block = document.createElement("div");

      block.addEventListener("mouseenter", () => {
        if (mouse) {
          block.style.backgroundColor = "black";
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

createGrid(currentSize);
