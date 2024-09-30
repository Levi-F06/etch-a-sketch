// get form elements
const inputs = document.querySelectorAll("input");

for (const input of inputs) {
  if (input.type === "submit") {
    continue;
  }
  input.addEventListener("input", (e) => {
    for (const newInputValue of inputs) {
      if (e.target.value > 100) {
        e.target.value = 100;
      }
      newInputValue.value =
        newInputValue.type === "submit" ? "go draw!" : e.target.value;
    }
  });
}
