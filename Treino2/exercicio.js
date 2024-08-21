//exercicio1
dia=prompt("Insira o dia")
if(dia=="domingo"){
    console.log("zero");
}
else{
    if(dia=="segunda"){
        console.log("um");
    }
    else{
        if(dia=="terça"){
        console.log("dois");
        }
         else{
            if(dia=="quarta"){
            console.log("tres");
        }
         else{
            if(dia=="quinta"){
                console.log("quartro");
            }
            else{
                console.log("resto");
            }
         }
        }
    }
}

//exercicio2
dia=prompt("Insira o dia")
switch(dia){
    case "domingo": console.log("zero"); break;
    case "segunda": console.log("um"); break;
    case "terça": console.log("dois"); break;
    case "quarta": console.log("tres"); break;
    case "quinta": console.log("quatro"); break;
    default: console.log("fim");
}
console.log("fim");