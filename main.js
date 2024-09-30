const grid = document.querySelector("#grid");
const inputs = document.querySelectorAll(".mainInput");
const mouseStatusText = document.querySelector("#mouseStatusText");

let mouse = false;

function createGrid(size) {
  if (grid.innerHTML) {
    grid.innerHTML = "";
  }
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
    for (const newInputValue of inputs) {
      if (e.target.value > 100) {
        e.target.value = 100;
      }
      newInputValue.value = e.target.value;
    }
    createGrid(e.target.value);
  });
}

createGrid(16);
