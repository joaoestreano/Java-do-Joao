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

//exercicio3
fruta=prompt("Insira nome da fruta");
switch(fruta) {
    case "laranja": console.log("R$3,50"); break;
    case "limão": console.log("R$3,00"); break;
    case "acerola": console.log("R$3,50"); break;
    case "manga": console.log("R$4,00"); break;
    case "melancia": console.log("R$4,00"); break;
    case "morango": console.log("R$5,00"); break;
    case "maracujá": console.log("R$4,50"); break;
    case "açaí": console.log("R$6,00"); break;
    default: console.log("Não temos esse suco");
}
console.log("fim");

//exercicio4
let numero = 10;
while (numero <= 20) {// Inicia o loop while
    console.log(numero);// Imprime o número atual
    numero++;// Incrementa a variável
}

//esboço
menor=prompt("entre com o numero")
maior=prompt("entre com o numero")
menor=parseInt(menor)
maior=parseInt(maior)
if(maior<menor){ 
    aux=menor
    menor=maior
    maior=aux
}
console.log("Menor valor:", menor);
    console.log("Maior valor:", maior);