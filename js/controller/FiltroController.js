class FiltroController{
    constructor(){
        this._resetarFiltro()
        this._valores = new InputValores()._valoresFiltro();
        this._aplicarFiltro = new AplicarFiltro(this._valores[0], this._valores[1], this._valores[2])
    } 
    _resetarFiltro(){
        let banheiros = document.querySelectorAll('.banheiros');
        for (let i = 0; i < banheiros.length; i++) {
            let filho = banheiros[i].parentNode;
            let pai = filho.parentNode;
            
            pai.classList.remove('remove');
        }
    }
}