let toggleButton = document.getElementById("toggleButton");
let navList = document.getElementById("navList");

export function menu() {
  toggleButton.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}
