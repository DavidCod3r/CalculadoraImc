

const form = document.querySelector("#formulario");

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const peso = Number(document.querySelector("#peso").value);
    const altura = Number(document.querySelector("#altura").value);

    if(!peso){
        setResultado("Peso invalido", false);
        return;
    }

    if(!altura){
        setResultado("Altura invalida", false);
        return;
    }

    const imc = getImc(peso, altura);
});


function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obsidade grau 2', 'Obsidade grau 3'];

    if(imc >= 39.9){
        return nivel[5];
    }else if(nivel >= 34.9){
        return nivel[4];
    }else if(nivel >= 29.9){
        return nivel[3];
    }else if(nivel >= 24.9){
        return nivel[2];
    }else if(nivel >= 18.5){
        return nivel[1];
    }else if(imc < 18.5){
        return nivel[0];
    }
}


function getImc(peso, altura){
    const imc = peso / (altura * altura);
    imc.toFixed(2);
}


function criaP(){
    const p = document.createElement('p');
    return p;
}


function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}