//exercicio 1
numero1 = prompt("Entre com um Numero"); //o numero inserido sera "texto"
numero1 = parseInt(numero1); //converte o texto em numero
numero2 = prompt("Entre com outro Numero"); //o numero inserido sera "texto"
numero2 = parseInt(numero2); //converte o texto em numero
numero = numero1 % numero2; //% mostra o resto da divição dos numeros

//exercicio 2
numero = prompt("entre com um numero");
numero = parseInt(numero); //converte o texto em numero
if (numero % 2 == 0) {
  console.log(numero, "Par");
} else {
  console.log(numero, "impar");
}

//exercicio 3
numero = prompt("entre com um numero");
numero = parseInt(numero); //converte o texto em numero
if (numero % 2 == 0) {
  console.log(prompt("par"));
} else {
  console.log(prompt(numero, "impar"));
}

//exercicio 4
numero1 = prompt("Entre com um Numero");
numero1 = parseInt(numero1); //converte o texto em numero
numero2 = prompt("Entre com outro Numero");
numero2 = parseInt(numero2); //converte o texto em numero
if (numero1 % numero == 0) {
  prompt(numero, "multiplo");
} else {
  prompt(numero, "não é multiplo");
}


//exercicio 4
numero1 = prompt("Entre com um Numero");
numero1 = parseInt(numero1); //converte o texto em numero
numero2 = prompt("Entre com outro Numero");
numero2 = parseInt(numero2); //converte o texto em numero
if (numero1 > numero2) {
  prompt(numero1);
} else {
  prompt(numero2);
}

//exercicio 5
numero = prompt("Entre com sua idade");
numero = parseInt(numero); //converte o texto em numero
if (numero < 18) {
  console.log("menor de idade");
} else {
  console.log("maior de idade");
}

//exercicio 6
a = prompt("Entre com um Numero");
a = parseInt(a); //converte o texto em numero
b = prompt("Entre com outro Numero");
b = parseInt(b); //converte o texto em numero
c = prompt("entre com mais um numero");
c = parseInt(c); //converte o texto em numero
if (a <= b && b <= c) {
  console.log("maior", c);
} else {
  if (a <= b && c <= b) {
    console.log("maior", b);
  } else {
    console.log("maior", a);
  }
}
console.log("Fim do Programa");

//exercicio 7
temperatura = prompt("entre com sua temperatura corporal:");
temperatura = parseInt(temperatura);
if (temperatura <= 35) {
  console.log("hipotermia");
} else {
  if (temperatura <= 37.7) {
    console.log("normal");
  } else {
    if (temperatura <= 39.5) {
      console.log("febre");
    } else {
      if (temperatura <= 41) {
        console.log("febre alta");
      } else {
        console.log("hipotermia");
      }
    }
  }
}

//exercicio 8
peso=prompt("entre com o peso (kg):")
peso=parseFloat(peso)//parsefloat é para converter p/ numeros quebrados ex:65.4
altura=prompt("entre com a altura (M):")
altura=parseFloat(altura)
imc=peso/(altura*altura)
if(imc<18.5){
console.log("abaixo do peso")
}
else{
  if(imc<24,9){
    console.log("peso ideal")
  }
  else{
    if(imc<29.9){
      console.log("levemente acima do peso")
    }
    else{
      if(imc<34.9){
        console.log("obesidade grau I")
      }
      else{
        if(imc<39.9){
          console.log("obesidade grau II")
        }
        else{
          console.log("obesidade grau III")
        }
      }
    }
  }
}
console.log("fim do programa")

//exercicio 9