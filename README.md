Actividad 2  
¿Cómo la resolví?

1)
Primero cree una variable con el nombre "mes" la cual tendría un prompt donde se le mostrará el mensaje al usuario: "Ingrese el numero de un mes"

let mes = prompt('Ingrese el numero de un mes: ');

2)
luego creé una variable que convertiría el dato que el usuario ingresó a un Integer (Número) 
Ya que si el usuario ingresaba letras (string) en vez de un número(Int), lo podría validad si era o no un número de 1 a 12. Al mismo tiempo si el usuario ingresaba una letra, esto lanzaría una alerta diciendo: "Valor invalido" 

if (isNaN(numero_mes)) {
    throw alert("Valor invalido");

3) 
Después empecé creando condicionales If donde validaba si el número era mayor de 1 y menor que 3, esto le mostraría al usuario un mensaje que diría: "Es Invierno". 
Si no se cumplian las 2 condiciones, entonces con un else if continuaba a la siguiente condicional

if (numero_mes > 0 && numero_mes < 3)
    alert("Es Invierno");

4) 
Usando else if, evaluaría entonces si el número ingresado es menor de 6, si sí era menor que 6 entonces mostraría el mensaje al usuario: "Es Primavera"
(La validación si era o no mayor a 2 ya no era necesario ya que en la anterior condicional If ya se habia evaluado y como no cumplía, fue cómo llegó a pasarse a esta 2da condicional)

else if (numero_mes < 6)
    alert("Es Primavera");


5)
Realicé lo mismo que el pasó 2, pero esta vez validando si el número ingresado era o no menor a 9.
Si así era entonces se le mostraría al usuario el mensaje: "Es Verano"

else if (numero_mes < 9)
    alert("Es Verano");

6) 
Nuevamente de no haber cumplido con los anteriores condicionales, cree una tercera Else if condicional, que validara si el número ingresado era o no menor a 12; De serlo, se mostraría el mensaje: "Es Otoño"

else if (numero_mes < 12)
    alert("Es Otoño");

7)
Continué con la misma lógica en otro condicional, verificando si el número era igual a 12, de así serlo, se le mostraría al usuario el mensaje: "Es Invierno".

else if (numero_mes === 12)
    alert("Es Invierno");

8)
Finalmente en un último condicional, en vez de usar Else if, utilicé un else, que se puede entender cómo: -Si todo lo anterior no aplica, entonces...- 
Así logré validad que si el número ingresado NO era ninguno entre 1 a 12, entonces mostraría el mensaje: "Valor invalido, por favor ingrese un digito entre 1 a 12"

else
    alert("Valor invalido, por favor ingrese un digito entre 1 a 12");


9)
Como requisito de la actividad, a la hora de que exitosamente se compliera una de las anteriores condicionales, mostraría una segunda alerta con mi nombre y número de carné:

alert("Billy Joel Belteton - 23004361")





