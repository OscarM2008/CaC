// valor del ticket.
const ticket = 200; 
// descuentos.
let descEstudiantes = 0.20;
let descTrainee = 0.50;
let descJunior = 0.85;

// obtenemos los elementos.
const cantidad = document.getElementById("ImputQ");
const categoria = document.getElementById("Imputcategoria");
const total = document.getElementById("total");
const btnResumen = document.getElementById("resumen");

//funcion para tomar los datos de la página y calcular.
function calculaPago() {
    let total = cantidad.value * ticket;
    switch (categoria.value) {
        case "estudiante":
            total = total * descEstudiantes;
            break;              
        case "trainee":
            total = total * descTrainee;
            break;
        case "junior":
            total = total * descJunior;
            break;
        case "ninguna":
            total = total1 * 1;
            break;
    }
    totalPagar.textContent = ("Total a Pagar: $ " + total);
    total.textContent = `Total a Pagar: $ ${total}`

}

btnResumen.addEventListener(`click`,(evento)=>{
    evento.preventDefault();
    calculaPago();
}); 