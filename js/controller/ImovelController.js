class ImovelController{
    constructor(){
        this._data = new Data();
        
        this._organizarJSON = new Organizar();
        this._jsonFormatado = this._organizarJSON._organizar(this._data.arr)
        this._lista = new ListaImoveis();
        this._view = new ImovelView(document.querySelector('.cards-aps'));
        this._infosAdcionais = new ImovelView(document.querySelector('.modais'));
        this._paginacao = new Paginacao();
        this._pag1 = this._paginacao.pagina1(this._jsonFormatado);
        this._pag2 = this._paginacao.pagina2(this._jsonFormatado);
        this.count = 1;
        this._pag3 = this._paginacao.pagina3(this._jsonFormatado);
        this._instanciarObj(this._pag1);
    }

    adcionar(valor){
        this._lista._adiciona(valor);
        this._view.update(this._lista);
        this._infosAdcionais.updateInfos(this._lista);
    }
    _instanciarObj(array){
        console.log(array)
        for (let i = 0; i < array.length; i++) {
            this._imovel = new Imovel();
                this._imovel.id = array[i].id;
                    this._imovel.endereco = array[i].address.formattedAddress;
                        this._imovel.imagens = array[i].images;
                            this._imovel.preco = array[i].price;
                            this._imovel.banheiros = array[i].bathrooms;
                        this._imovel.quartos = array[i].bedrooms;
                    this._imovel.estacionamento = array[i].parkingSpaces;
                this._imovel.area = array[i].usableArea;
            this._imovel.publicavel = array[i].publish; 
            this.adcionar(this._imovel)
        }
    }
    _paginar(){
        this.count++
        if(this.count == 2){
            this._instanciarObj(this._pag2)
        }
        if(this.count == 3){
            this._instanciarObj(this._pag3)
            let botao = document.querySelector('.p');
            botao.classList.add('remove')
        }
        
    }
   










    // _retornaValores(){
        
    //     let request = new XMLHttpRequest;
    // request.open('GET', 'http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed')
    // request.setRequestHeader('Access-Control-Allow-Origin', '*');
    // request.setRequestHeader('Access-Control-Allow-Methods', '*');
    // request.setRequestHeader('Access-Control-Allow-Headers', ' api-key, Content-Type');
    // request.setRequestHeader('Access-Control-Allow-Credentials', true);
    // request.send(null)
    //     request.onload = function(){

    //         let jsson = JSON.parse(request.responseText);
    //         let lista = new ListaImoveis();
    //         let view = new ImovelView(document.querySelector('.cards-aps'))
    //         let view2 = new ImovelView(document.querySelector('.modais'))
    //         let org = new Organizar();
    //        let contador = 0;
    //         jsson =  org._organizar(jsson);
           
    //         jsson.forEach(function(imoveis) {
	// 			let i = new Imovel();
    //         i.id = imoveis.id;
    //             i.estacionamento = imoveis.parkingSpaces;
    //                 i.preco = imoveis.price;
    //                     i.publicavel = imoveis.publish;
    //                         i.area = imoveis.usableArea;
    //                     i.banheiros = imoveis.bathrooms;
    //                 i.quartos = imoveis.bedrooms;
    //             i.imagens = imoveis.images;
    //         i.endereco = imoveis.address.formattedAddress;
    //         if(contador <= 7){

    //         }
    //          lista._adiciona(i);
    //          view.update(lista);
    //          view2.updateInfos(lista, i.imagens);
    //          contador++;
	// 		})
    //     };
    // }
}
