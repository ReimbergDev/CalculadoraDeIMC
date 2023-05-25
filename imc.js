
const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso =  document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        const valorImc = (peso / (altura * altura)).toFixed(2);

        let classificação = '';

        if (valorImc < 18.5){
            classificação = 'abaixo do peso, precisa ganhar massa!';
        } else if (valorImc < 25){
            classificação ='no peso ideal, parabéns!';
        } else if (valorImc < 30){
            classificação = "levemente acima do peso";
        } else if (valorImc < 35){
            classificação = 'você está com obessidade grau 1';
        } else if (valorImc < 40){
            classificação = "com obessidade grau 2";
        } else {
            classificação = "com obessidade grau 3, Cuidado!!!";
        }

        resultado.textContent = `Olá ${nome}, seu IMC é de ${valorImc} e voce se encontrs ${classificação}`;
    } else {
        alert("preencha todos os campos para continuar");
    }
}

calcular.addEventListener('click', imc);