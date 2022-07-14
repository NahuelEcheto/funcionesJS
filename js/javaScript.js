const precio = prompt("Ingresar el valor del producto");
let valorProducto = Number(precio);
const formaDePago = prompt("¿De que forma se va a realizar el pago?");

const valorFinalDelProducto = (valorProducto, formaDePago) => {

    if(formaDePago.toLowerCase() === "contado") {
        return valorProducto * 0.90
    }
    else if(formaDePago.toLowerCase() === "cuotas") {
        return valorProducto * 1.30
    }
    else {
        console.log("Dato incorrecto.")
    }
}

console.log( valorFinalDelProducto(valorProducto, formaDePago))


