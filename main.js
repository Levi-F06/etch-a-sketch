const grid = document.querySelector("#grid");
const inputs = document.querySelectorAll(".mainInput");

function createGrid(size) {
  if (grid.innerHTML) {
    grid.innerHTML = "";
  }
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      const block = document.createElement("div");
      row.appendChild(block);
    }
    grid.appendChild(row);
  }
}

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
