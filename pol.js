const darkmode = document.querySelector("#mode");
const darkimg = document.querySelector("#darkimg");
if (localStorage.getItem("darkMode") === "dark") {
  document.body.classList.remove("light");
  darkmode.lastChild.textContent = "Dark mode";
  darkimg.setAttribute("src", "./img/night-mode.png");
  localStorage.setItem("darkMode", "dark");
} else {
  document.body.classList.add("light");
  darkmode.lastChild.textContent = "Light mode";
  darkimg.setAttribute("src", "./img/sun.png");
  localStorage.setItem("darkMode", "light");
}
darkmode.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    darkmode.lastChild.textContent = "Dark mode";
    darkimg.setAttribute("src", "./img/night-mode.png");
    localStorage.setItem("darkMode", "dark");
  } else {
    document.body.classList.add("light");
    darkmode.lastChild.textContent = "Light mode";
    darkimg.setAttribute("src", "./img/sun.png");
    localStorage.setItem("darkMode", "light");
  }
});
