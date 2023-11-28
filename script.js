//Acceder a los elementos de un Array
document.write("<h3>ELEMENTOS  DE UN ARRAY</h3>")
const numbers = [1, 2, 3, 4, 5]
document.write("El Array es: "+numbers+"<br>")
document.write("El Array en su primera posición es: "+numbers[0]+"<br>")
document.write("El Array en la posición dos es: "+numbers[2]+"<br>")

//Usar variables para acceder a los elementos de un Array
let index = 4
document.write("La variable index corresponde a: "+numbers[index]+"<br>")

//Modificar elementos de un Array
numbers[0] = 10
numbers [2] = 30
document.write("Modificación al Array en la primera posición: "+numbers[0]+"<br>")
document.write("Modificación al Array en la segunda posición: "+numbers[2]+"<br>")
document.write("El Array modificado es: "+numbers+"<br>")

//Longitud de un Array
document.write("<h3>LA LONGITUD DE UN ARRAY</h3>")
let frutas = ["manzana", "pera", "plátano", "fresa"]
document.write("El Array de frutas es: "+frutas+"<br>")
document.write("El Array de frutas tiene una longitud de: "+frutas.length+"<br>")

//MÉTODOS DE ARRAY
document.write("<h3>MÉTODOS DE ARRAY</h3>")

//MÉTODO .PUSH
/*El método .push() nos permite añadir un elemento al final de un array*/
document.write("<h3>Método .push</h3>")
let frutass = ["plátano", "fresa"]
document.write("El Array de frutass es: "+frutass+"<br>")
frutass.push("naranja")
document.write("El Array de frutass con el método .push es: "+frutass+"<br>")
document.write("El Array de frutass tiene una longitud de: "+frutass.length+"<br>")

//MÉTODO .POP
/*El método .pop() elimina y devuelve el último elemento de un array */ 
document.write("<h3>Método .pop</h3>")
document.write("El Array de frutass es: "+frutass+"<br>")
let ultimaFruta = frutass.pop("plátano", "fresa", "naranja")
document.write("El Array de frutass con el método .pop es: "+ultimaFruta+"<br>")

//MÉTODO .SHIFT
/*El método .shift() elimina y devuelve el primer elemento de un array. Es lo mismo que .pop(), pero con el primer elemento en lugar del último*/
document.write("<h3>Método .shift</h3>")
document.write("El Array de frutass es: "+frutass+"<br>")
let primeraFruta = frutass.shift("plátano", "fresa", "naranja")
document.write("El Array de frutass con el método .shift es: "+primeraFruta+"<br>")

//MÉTODO UNSHIFT
/*El método .unshift() añade un elemento al principio de un array. Es lo mismo que .push(), pero con el primer elemento en lugar del último*/ 
document.write("<h3>Método .unshift</h3>")
frutas.unshift("mango")
document.write("El Array de frutas con el método .unshift es: "+frutas+"<br>")

//CONCATENAR ARRAYS
document.write("<h3>CONCATENAR ARRAYS</h3>")

//MÉTODO CONCAT
document.write("<h3>Método concat</h3>")
let nums = [1, 2, 3]
document.write("El primer Array es: "+nums+"<br>")
let nums1 = [4, 5]
document.write("El segundo Array es: "+nums1+"<br>")
let allnums = nums.concat(nums1)
document.write("Los Arrays concatenados son: "+allnums+"<br>")

//OPERADOR ... (Spread operator)
document.write("<h3>Operador ... (Spread operator)</h3>")
let nums2 = [1, 2, 3]
document.write("El primer Array es: "+nums2+"<br>")
let nums3 = [4, 5]
document.write("El segundo Array es: "+nums3+"<br>")
let allnums1 = [...nums2, ...nums3]
document.write("Los Arrays concatenados son: "+allnums1+"<br>")

//EJERCICIO
/* En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:
El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.*/

document.write("<h3>EJERCICIO</h3>")
function procesarPedido(pedido) {
    const nombreCliente = pedido.shift();
    pedido.unshift("bebida");
    pedido.push(nombreCliente);
    return pedido;
  }
  const pedidos = ["Pedro", "Café", "Huevos", "Pan"]
  document.write("El Array modificado es: "+procesarPedido(pedidos)+"<br") 

