class ImovelController{
    constructor(){
        let div = document.querySelector('.container')
        this._listaImovel = new ListaImovel();
        this._imovelView = new ImovelView(div);
        this._imovelView.update(this._listaImovel);
        
    }

    adiciona(){
        this._listaImovel.adiciona(this._retornaJson());
        //this._imovelView.update.bind((this._listaImovel))
    }
    _retornaJson(){
        let xhr = new XMLHttpRequest;
        xhr.overrideMimeType('application/json');
        xhr.open("get", 'http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed');

        xhr.onload = function(){
                 let  json = JSON.parse(xhr.response);
                 console.log(json)
                
            }  
       
        xhr.send(null)
    }
}
window.onload = new ImovelController().adiciona()

