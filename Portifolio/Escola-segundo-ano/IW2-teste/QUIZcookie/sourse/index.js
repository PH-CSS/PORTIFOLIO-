const changeMode = document.querySelectorAll(".change");
const root = document.documentElement;

// console.log(getComputedStyle(root).getPropertyValue("--bg-color"))
changeMode.forEach(mode => {
  mode.addEventListener("click", (e) => {
    console.log(mode.name);
    const dayNight = {
      day:"rgb(0, 143, 143)",
      night:"rgb(2, 68, 68)"
    };
    const bgMode = {
      day:"rgb(157, 253, 253)",
      night:"rgb(134, 185, 185)"
    }
    let nomeDoEscolhido = mode.name;
    root.style.setProperty('--bg-color', dayNight[nomeDoEscolhido])
    root.style.setProperty('--bg-body', bgMode[nomeDoEscolhido])

})
});




