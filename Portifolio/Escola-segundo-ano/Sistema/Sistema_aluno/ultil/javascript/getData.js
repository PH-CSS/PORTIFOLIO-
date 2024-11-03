// const stickColor = document.querySelectorAll(".stick")
// console.log(stickColor);

const changeInfo = document.querySelectorAll(".areaIdent")
const chageSet = document.querySelectorAll(".serIdent")

for (let index = 0; index < changeInfo.length; index++) {
  
  changeInfo[index].addEventListener('input', (e) => {
    console.log(`alteação em ${changeInfo[index].placeholder} para: ${e.target.value}` );
    for (let y = 0; y < chageSet.length; y++) {
      
      let indexFormVal = changeInfo[index].placeholder;
      let indexPathVal = chageSet[y].placeholder;
      
      if (indexFormVal == indexPathVal) {
        if (indexPathVal !== "CPF") {     
          chageSet[y].value = e.target.value; 
          console.log(chageSet[y].value);
        }
        else{
          function cpfMask(value) {
            return value
                .replace(/\D/g, '')                     // Remove caracteres não numéricos
                .replace(/(\d{3})(\d)/, '$1.$2')        // Adiciona o primeiro ponto
                .replace(/(\d{3})(\d)/, '$1.$2')        // Adiciona o segundo ponto
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o traço
        }

        changeInfo[index].value = cpfMask(e.target.value)
        chageSet[y].value = cpfMask(e.target.value) ; 
        console.log(chageSet[y].value);
        
        }
      }
  }

   } 
 )
}
