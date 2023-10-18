function Habitacion (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const Habitacion1 = new Habitacion ("Suite Buenos Aires", "$1.800")
const Habitacion2 = new Habitacion ("Suite The Grand Palace", "$2.400")
const Habitacion3 = new Habitacion ("Suite Sao Pablo", "$1.600")
const Habitacion4 = new Habitacion ("Suite Bogota", "$1.400")
const Habitacion5 = new Habitacion ("Suite Santiago", "$1.400")
const Habitacion6 = new Habitacion ("Suite Montevideo", "$1.200")
const Habitacion7 = new Habitacion ("Suite Asuncion", "$1.400")
const Habitacion8 = new Habitacion ("Suite Buenos Aires", "$1.300")
const Habitacion9 = new Habitacion ("Suite Buenos Aires", "1.100")

const Habitaciones = [Habitacion1,Habitacion2,Habitacion3,Habitacion4,Habitacion5,Habitacion6,Habitacion7,Habitacion8,Habitacion9]

let cardsEnJs = document.getElementsByClassName("cards") //esta clase es un ejemplo ir a html y fijarse cual va
cardsEnJs.innerHTML = "<h3> Room: ${Habitacion.nombre}</h3>"
                        "<p> $: ${Habitacion.precio}</p>";
document.body.appendChild(cardsEnJs);