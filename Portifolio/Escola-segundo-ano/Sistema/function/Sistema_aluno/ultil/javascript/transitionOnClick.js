const bnt = document.querySelector(".button");

bnt.addEventListener("click", () => {
  const start = document.querySelector(".infoStart")
  const login = document.querySelector(".logInSection")

  start.style.animation = "scale 0.5s ease forwards";
  bnt.style.animation = "scale 0.3s ease forwards";
  bnt.style.animation = "vrum 0.3s ease forwards";

  setInterval(() => {
    start.style.display = "none";
    login.style.display = "flex";
    login.style.animation = "enter 1s ease forwards"
  }, 500);
})

// bnt.click()
