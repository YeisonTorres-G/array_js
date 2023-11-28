//Acceder a los Elementos de un Arrays
document.write("<h1>Elementos de un array</h1>")
const numbers = [1, 2, 3, 4, 5]
document.write(numbers[0] +"<br>")
document.write(numbers[1] +"<br>")

//usar variables para acceder a los elementos de un array.
let index = 4
document.write(numbers[index] +"<br>")

//Modificar elementos de un array
numbers[1] = 50
numbers[0] = 30
document.write(numbers[1] +"<br>"+ numbers[0] +"<br>")
document.write("Orden de los Numeros: " + numbers)

//Longitud de un array
document.write("<h1>La longitud de un array</h1>")

const frutas = ["manzana", "pera", "plátano", "fresa", "maduro"]
document.write("El array de frutas: " +frutas +"<br>")
document.write("El Array de frutas tiene una logitud de: " +frutas.length)