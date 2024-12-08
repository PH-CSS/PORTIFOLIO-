setTimeout(() => {
  $(".alert").css({
  "animation": "desaparecer 0.7s ease forwards"
  });
}, 2500);

$(document).on('mouseenter', '.sidepop', function(){
  let posicao = $(this).offset();
  $(".popSecao").text(this.classList[1])
  $(".areaPopup").css({
    "left": posicao.left + 120 + "px",
    "top": posicao.top + (($(this).height() * 0.5) - ($(".popSecao").height()))  + "px",
    "visibility": "visible",
    "animation": "aparecerSecao 0.7s ease forwards"
  });

}).on('mouseleave', '.sidepop', function(){
  $(".areaPopup").css({
    "animation": "desaparecerSecao 0.7s ease forwards"
  });
})

$(".sidepop").on("click", function () {
  // console.log(this.classList[1]);
  let clicado = this.classList[1];

  $(".Display").each(function (index, elemento) {
    // console.log(`elemento ${index} `+$(elemento).attr("id"));

    if (clicado == $(elemento).attr("id")) {
      // console.log("Muda");
      $(elemento).css({
        "display":"grid"
      })
    }else if(clicado !== $(elemento).attr("id")) {
      $(elemento).css({
        "display":"none"
      })
    }
  })
});

$(document).ready(function(){
  $('.Sair').click(function(){
    window.location.replace('../index.php');
      });
  });

