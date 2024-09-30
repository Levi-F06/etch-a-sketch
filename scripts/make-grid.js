const form = document.querySelector("form");
const value = document.querySelector("input");
const grid = document.querySelector("#grid");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (grid.innerHTML) {
    grid.innerHTML = "";
  }
  for (let i = 0; i < value.value; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < value.value; j++) {
      const block = document.createElement("div");
      row.appendChild(block);
    }
    grid.appendChild(row);
  }
});
