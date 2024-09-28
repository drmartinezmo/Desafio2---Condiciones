//codigo requerimiento 1
const imagen = document.getElementById('imagen1');
let bordeActivo = false;

imagen.addEventListener('click', () => {
    if (bordeActivo) {
        imagen.style.border = 'none';
    } else {
        imagen.style.border = '2px solid red';
    }
    bordeActivo = !bordeActivo;
});

//codigo requerimiento 2
const boton_verificar = document.getElementById('btn-verificar');

boton_verificar.addEventListener('click', () => {
    const num1 = document.querySelector("#card-1");
    const num2 = document.querySelector("#card-2");
    const num3 = document.querySelector("#card-3");


    const suma = Number(num1.value) + Number(num2.value) + Number(num3.value);

    if (suma > 10) {
        document.querySelector("#txt-verificar").innerHTML = "Llevas demasiados stickers";
    } else {
        document.querySelector("#txt-verificar").innerHTML = `Llevas ${suma} stickers.`;
    }
});

//codigo requerimiento 3
const boton_ingresar = document.getElementById('btn-ingresar');

boton_ingresar.addEventListener('click', () => {
    const digito0 = document.getElementById("digito-0").value;
    const digito1 = document.getElementById("digito-1").value;
    const digito2 = document.getElementById("digito-2").value;
    const password = Number(digito0 + digito1 + digito2);

    if (password === 911) {
        document.querySelector("#txt-password").innerHTML = "Password 1 correcto";
    } else if(password === 714) {
            document.querySelector("#txt-password").innerHTML = "Password 2 correcto";
            }
            else {
                document.querySelector("#txt-password").innerHTML = "Password Incorrecto";
            }
});