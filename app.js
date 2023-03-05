let botonSum = document.getElementById('sumar');
let botonRes = document.getElementById('restar');
let botonMult = document.getElementById('multiplicar');
let botonDiv = document.getElementById('dividir');
let respuesta = document.getElementById('respuesta');

botonSum.addEventListener('click', hacerSuma);
botonRes.addEventListener('click', hacerResta);
botonMult.addEventListener('click', hacerMultiplicacion);
botonDiv.addEventListener('click', hacerDivision);

function hacerSuma() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 + n2;
    respuesta.innerHTML = `El resultado de la suma es: ${n3}`;
}

function hacerResta() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 - n2;
    respuesta.innerHTML = `El resultado de la resta es: ${n3}`;
}

function hacerMultiplicacion() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 * n2;
    respuesta.innerHTML = `El resultado de la multiplicacion es: ${n3}`;
}

function hacerDivision() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    if (n2 != 0) {
        let n3 = n1 / n2;
        respuesta.innerHTML = `El resultado de la division es: ${n3}`;
    } else
        respuesta.innerHTML = `Error. No se puede dividir entre 0`;

}