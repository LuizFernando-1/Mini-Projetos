const calcular = document.querySelector('#calcular')

function imc () {
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    const resultado = document.querySelector('#resultado')

    if (nome !== '' && peso !== '' && altura !== '') {

        const valorImMC = (peso / (altura ** 2)).toFixed(1)

        let classificacao = ''

        if(valorImMC < 18.5) {
            classificacao = 'você esta abaixo do peso'
        }else if (valorImMC < 25) {
            classificacao = 'com o peso ideal'
        }else if (classificacao < 30) {
            classificacao = 'levemente acima do peso'
        }else if (classificacao < 35) {
            classificacao = 'com obesidade grau I'
        }else if (classificacao < 40) {
            classificacao = 'com obesidade grau II'
        }else {
            classificacao = 'com obesidade grau III. Você está com o pé na cova'
        }

        resultado.textContent = `${nome} seu IMC é ${valorImMC} e você está ${classificacao}`

    }else{
        resultado.textContent = 'Preencha todos os dados!!!!'
    }
}


calcular.addEventListener('click', imc)