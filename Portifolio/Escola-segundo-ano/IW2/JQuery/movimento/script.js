$("body").on("click", () =>{
    $(".personagem").animate({top: '-200px'});
    setTimeout(() => {
    $(".personagem").animate({top: '0px'});
	}, 650);
    
});
