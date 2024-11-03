$("button").on("click", (e) =>{
    
let tipoDeinput = e.currentTarget.className;

if (tipoDeinput == "justify"){
    $(".container").css("align-items", "center")
    $(".container").css("text-align", tipoDeinput)
};
$(".container").css("justify-content", tipoDeinput);

if (e.currentTarget.id == "justify") {
    $(".container").css("align-items", tipoDeinput);
}
});