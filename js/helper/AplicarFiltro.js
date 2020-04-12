class AplicarFiltro{
    constructor(el1, el2, el3){
        this._aplicar(el1, el2, el3);
    }
    _aplicar(valor1, valor2, valor3){
        
        let banheiros = document.querySelectorAll('.banheiros');
        let vagas = document.querySelectorAll('.vagas');
        let quartos = document.querySelectorAll('.quartos');
       
        for (let i = 0; i < banheiros.length; i++) {

           if(banheiros[i].textContent != valor1){

            this._removerElemento(banheiros[i]);
           }
           if(vagas[i].textContent != valor3){
               this._removerElemento(vagas[i])
           }
           if(quartos[i].textContent !=valor2){
               this._removerElemento(quartos[i])
           }
        }
    }

    _removerElemento(elemento){
        let filho = elemento.parentNode;
        let pai = filho.parentNode;
        pai = pai.parentNode;
        let valor = pai.parentNode
       
       console.log(valor.className)
    }
    _adcionarElemento(elemento){
        let filho = elemento.parentNode;
        let pai = filho.parentNode;
       

        pai.classList.remove('remove');
    }
    
}