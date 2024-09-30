const inputs = document.querySelectorAll(".mainInput");

for (const input of inputs) {
  input.addEventListener("input", (e) => {
    for (const newInputValue of inputs) {
      if (e.target.value > 100) {
        e.target.value = 100;
      }
      newInputValue.value = e.target.value;
    }
  });
}
