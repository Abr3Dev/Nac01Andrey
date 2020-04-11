class InputValores{
    constructor(){
    }

    _valoresFiltro(){
        let quarto = document.querySelector('#inputQuarto')
        let vagas = document.querySelector('#inputVagas')
        let banheiro = document.querySelector('#inputBanheiro')
        quarto = 'Quartos : ' + quarto.value
        vagas = 'Vagas : ' + vagas.value
        banheiro = 'Banheiros : ' + banheiro.value
       
        return [banheiro, quarto, vagas]
    }
}