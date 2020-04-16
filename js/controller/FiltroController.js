class FiltroController{
    constructor(){
        this._resetarFiltro()
        this._valores = new InputValores()._valoresFiltro();
        this._aplicarFiltro = new AplicarFiltro(this._valores[0], this._valores[1], this._valores[2])
    } 
    _resetarFiltro(){
        let retira = document.querySelector('.cards-aps')
        retira = retira.children
        
        for (let i = 0; i < retira.length; i++) {
           retira[i].classList.remove('remove')
        }
    }
}