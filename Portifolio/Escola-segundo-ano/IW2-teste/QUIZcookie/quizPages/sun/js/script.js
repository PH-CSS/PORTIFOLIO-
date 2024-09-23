const resps = document.querySelectorAll(".respostas div")
let chose = "";
resps.forEach(resp => {
  resp.addEventListener("click", (e) => {

      if (chose !== "") {
        if (e.target.className !== chose.className) {
          chose.style.backgroundColor = "#B3E5FC"
        }
      }
    
    chose = e.target;
    chose.style.backgroundColor = "green";
  })
});