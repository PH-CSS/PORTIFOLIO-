const info = document.querySelector(".info");
const titulos = document.querySelector("tbody");


const aluno = {
    // em portugues {chaves} / {key em eng}
    nome : "Pedro Alvares Cabral",
    idade : 557,
    escola: "Etec sla ok n sei ok la",
    curso : "n sei",

    Materias : [
   { 
    nomeMateria : "IW",
    notasBi : ["R", "I", "R", "R", "",],
    aprovado: true
   },
    {
        nomeMateria : "Matematica",
        notasBi : ["R", "B", "R", "R", "",],
        aprovado: false
    },
    { 
        nomeMateria : "BD",
        notasBi : ["B", "MB", "R", "R", "",],
        aprovado: true
       },
        {
            nomeMateria : "DDM",
            notasBi : ["I", "B", "R", "R", "",],
            aprovado: false
        }, 
        { 
            nomeMateria : "ARTES",
            notasBi : ["B", "MB", "R", "R", "",],
            aprovado: true
           },
            {
                nomeMateria : "PT",
                notasBi : ["I", "B", "R", "R", "",],
                aprovado: false
            },
]
};

info.innerHTML = "Nome : Pedro Alvares Cabral <br >Idade : 557 <br> Escola: Etec sla ok n sei ok la <br> Curso : n sei ";


aluno.Materias.forEach(notas => {

    
        const nomM = document.createElement("tr");
        titulos.appendChild(nomM)
        const check = document.createElement("td");
        nomM.appendChild(check)
        check.innerHTML = notas.nomeMateria

        console.log(notas.notasBi);

        let notaPasse = 0 ;

        for (let i = 0; i < 3; i++) {
            
            if (notas.notasBi[i] == "I") {
                notaPasse = notaPasse + 1;
            } else if(notas.notasBi[i] == "R"){
                notaPasse = notaPasse + 2;
            }
            else if(notas.notasBi[i] == "B"){
                notaPasse = notaPasse + 4;
            }
            else if(notas.notasBi[i] == "MB"){
                notaPasse = notaPasse + 5;
            }
             console.log(notaPasse); 
              
        };
        
        if (notaPasse <= 5) {
            notas.notasBi[4] = "I" 
        } else if (notaPasse <= 7) {
            notas.notasBi[4] = "R" 
        } else if (notaPasse <= 10) {
            notas.notasBi[4] = "B" 
        }
        else if (notaPasse > 10) {
            notas.notasBi[4] = "MB" 
        };

        
        if (notas.notasBi[4] == "I" ) {
            notas.aprovado = false;
        } else if (notas.notasBi[4] == "R" ) {
            notas.aprovado = true;
        } else{
            notas.aprovado = true;  
        }

        notas.notasBi.forEach(notes => {
            const content = document.createElement("td");
            nomM.appendChild(content);
            content.innerHTML = notes;
        });

        if (notas.aprovado == true) {
            notas.aprovado = "sim";
        } else{
            notas.aprovado = "não";
        }
        
        const mate = document.createElement("td");
        nomM.appendChild(mate)
        mate.innerHTML = notas.aprovado



    });



console.table(aluno);

console.table(aluno.Materias);
// console.log(`A nota do 4 bimestre de matematica é ${aluno.Materias[1]}`);
