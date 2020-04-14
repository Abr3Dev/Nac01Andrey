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
           if(quartos[i].textContent !=valor2){
            this._removerElemento(quartos[i])
        }
           if(vagas[i].textContent != valor3){
               this._removerElemento(vagas[i])
           }
        }
    }
    _removerElemento(elemento){
        let filho = elemento.parentNode;
        let id = filho.id;
        filho = document.getElementById(id);
        filho.classList.add('remove');
    }
   
}