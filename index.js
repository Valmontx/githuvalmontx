import validator from './validator.js';

const btnAbrirModal =
    document.querySelector("#btn-abrir-modal");
const modal =
    document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
    modal.showModal();

let verifica = document.getElementById('btnValidate');
    

        verifica.addEventListener("click", () => {
    
        let newNum = document.getElementById('cardNumber').value;
        let validation = document.getElementById('validar');
        
        
        if (validator.isValid(newNum) === true) {
        
           alert('Su tarjeta '  + validator.maskify(newNum) + ' es valida :)')

        } else {

            alert('Su tarjeta NO es valida, intente de nuevo :(')

        
        }

        // validation.textContent= message;
        validation.textContent = validator.maskify(newNum);
        
    })


});























