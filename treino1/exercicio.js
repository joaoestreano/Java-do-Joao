//exercicio 1
numero1 = prompt("Entre com um Numero"); //o numero inserido sera "texto"
numero1 = parseInt(numero1); //converte o texto em numero
numero2 = prompt("Entre com outro Numero"); //o numero inserido sera "texto"
numero2 = parseInt(numero2); //converte o texto em numero
numero = numero1 % numero2; //% mostra o resto da divição dos numeros


//exercicio 2
numero = prompt("entre com um numero");//o numero inserido sera "texto"
numero = parseInt(numero); //converte o texto em numero
if (numero % 2 == 0) {//se o "numero" dividido por 2 tiver resto = a 0
  console.log(numero, "Par");//ele sera par
} else {//se não...
  console.log(numero, "impar");//sera impar
}


//exercicio 3
numero1 = prompt("Entre com um Numero");//o numero inserido sera "texto"
numero1 = parseInt(numero1); //converte o texto em numero
numero2 = prompt("Entre com outro Numero");//o numero inserido sera "texto"
numero2 = parseInt(numero2); //converte o texto em numero
if (numero1 % numero == 0) {//se "numero1" dividido por "numero" = a 0
  prompt(numero, "multiplo");//então sera "multiplo"
} else {//se não...
  prompt(numero, "não é multiplo");//então "não sera multiplo"
}


//exercicio 4
numero1 = prompt("Entre com um Numero");//o numero inserido sera "texto"
numero1 = parseInt(numero1); //converte o texto em numero
numero2 = prompt("Entre com outro Numero");//o numero inserido sera "texto"
numero2 = parseInt(numero2); //converte o texto em numero
if (numero1 > numero2) {//se "numero1"for maior que "numero2"
  prompt(numero1);//o maior sera "numero1"
} else {//se não...
  prompt(numero2);//o maior sera "numero2"
}


//exercicio 5
numero = prompt("Entre com sua idade");//o numero inserido sera "texto"
numero = parseInt(numero); //converte o texto em numero
if (numero < 18) {//se "numero" for menor que 18
  console.log("menor de idade");//sera menor de idade
} else {//se não...
  console.log("maior de idade");//sera maior de idade
}


//exercicio 6
a = prompt("Entre com um Numero");//o numero inserido sera "texto"
a = parseInt(a); //converte o texto em numero
b = prompt("Entre com outro Numero");//o numero inserido sera "texto"
b = parseInt(b); //converte o texto em numero
c = prompt("entre com mais um numero");//o numero inserido sera "texto"
c = parseInt(c); //converte o texto em numero
if (a <= b && b <= c) {//se a for menor ou igual a b, e b menor ou igual a c
  console.log("maior", c);//então c sera o maior
} else {//se não...
  if (a <= b && c <= b) {//se a for menor ou igual a b, e c menor ou igual a b
    console.log("maior", b);//então b sera o maior
  } else {//se não...
    console.log("maior", a);//se a for menor ou igual a b, e c menor ou igual a b
  }
}


//exercicio 7
temperatura = prompt("entre com sua temperatura corporal:");//o numero inserido sera "texto"
temperatura = parseFloat(temperatura);///parsefloat é para converter p/ numeros quebrados ex:65.4
if (temperatura <= 35) {//se a temperatura for menor ou igual a 35
  console.log("hipotermia");//sera "hipotermia"
} else {//se não...
  if (temperatura <= 37.7) {//se a temperatura for menor ou igual a 37.7
    console.log("normal");//sera "normal"
  } else {//se não...
    if (temperatura <= 39.5) {//se a temperatura for menor ou igual a 39.5
      console.log("febre");//sera "febre"
    } else {//se não
      if (temperatura <= 41) {//se a temperatura for menor ou igual a 41
        console.log("febre alta");//sera "febre alta"
      } else {//se não...
        console.log("hipotermia");//sera "hipotermia"
      }
    }
  }
}


//exercicio 8
peso=prompt("entre com o peso (kg):")//o numero inserido sera "texto"
peso=parseFloat(peso)//parsefloat é para converter p/ numeros quebrados ex:65.4
altura=prompt("entre com a altura (M):")//o numero inserido sera "texto"
altura=parseFloat(altura)//parsefloat é para converter p/ numeros quebrados ex:65.4
imc=peso/(altura*altura)//calculo do imc
if(imc<18.5){//se imc for...
console.log("abaixo do peso")//sera "abaixo do peso"
}
else{//se não...
  if(imc<24.9){//se imc for menor que 24.9
    console.log("peso ideal")//sera "peso ideal"
  }
  else{//se não...
    if(imc<29.9){//se imc for menor que 29.9
      console.log("levemente acima do peso")//sera "levemente acima do peso"
    }
    else{//se não...
      if(imc<34.9){//se imc for menor que 34.9
        console.log("obesidade grau I")//sera "obesidade grau I"
      }
      else{//se não...
        if(imc<39.9){//se imc for menor que 39.9
          console.log("obesidade grau II")//sera "obesidade grau II"
        }
        else{//se não...
          console.log("obesidade grau III")//sera "obesidade grau III"
        }
      }
    }
  }
}