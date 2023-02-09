let mes = prompt('Ingrese el numero de un mes: ');
let numero_mes = parseInt(mes)
if (isNaN(numero_mes)) {
    throw alert("Valor invalido");
}

if (numero_mes > 0 && numero_mes < 3)
    alert("Es Invierno");


else if (numero_mes < 6)
    alert("Es Primavera");

else if (numero_mes < 9)
    alert("Es Verano");

else if (numero_mes < 12)
    alert("Es Otoño");

else if (numero_mes === 12)
    alert("Es Invierno");

else
    alert("Valor invalido, por favor ingrese un digito entre 1 a 12");


alert("Billy Joel Belteton - 23004361")
