const carousel = document.querySelector(".carousel");
// seguindo para a funciol=nalidade dos botões que levam as partes dem scroll
firstImg = carousel.querySelectorAll("img")[0]; // pegando a primeira imagem
arcosMov = document.querySelectorAll(".wrapper i");


// var de arrastar 
let taArrastando = false, prevPageX, prevScrollLeft;
// var de arrastar 


let firstImgWidth = firstImg.clientWidth + 14; //adiciona margem

arcosMov.forEach(icon => {
    icon.addEventListener( "click", ()=>{
       carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    //    left ? === (if (icon == "left"))
    //      -firstImgWidth
    //        : === (else)
    //         firstImgWidth
       console.log(icon.id);
    });
});


    
const arrIni = (e) => {
    taArrastando = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
    console.log("mexeu")
}


const arrPare = () => {
   taArrastando = false;
        console.log("parou")
}


const arrastar = (e) => {
    if (!taArrastando) return;
        e.preventDefault();
        let difPosi = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - difPosi ;
    console.log("ta arrastando")
}


carousel.addEventListener( "mousedown", arrIni );
// precionar o mouse = mousedown
carousel.addEventListener( "mousemove", arrastar );
// mouse de um lado para o outro
carousel.addEventListener( "mouseup", arrPare );
// mouse sem  pressionar = mouseup  



carousel.addEventListener("mouseout", arrPare)








// Esta parte toda é para o ajuste do scroll horizontal no eixo X de acordo com o cursor









