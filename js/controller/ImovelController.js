class ImovelController{
    constructor(){
        this._retornaValores();
        this.lista = new ListaImoveis();
    }

    _retornaValores(){
        
        let request = new XMLHttpRequest;
    request.open('GET', 'http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed')
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Access-Control-Allow-Methods', '*');
    request.setRequestHeader('Access-Control-Allow-Headers', ' api-key, Content-Type');
    request.setRequestHeader('Access-Control-Allow-Credentials', true);
    request.send(null)
        request.onload = function(){

            let jsson = JSON.parse(request.responseText);
            let lista = new ListaImoveis();
            let view = new ImovelView(document.querySelector('.cards-aps'))
            let view2 = new ImovelView(document.querySelector('.modais'))
            let org = new Organizar();
           
            jsson =  org._organizar(jsson);
           
            jsson.forEach(function(imoveis) {
				let i = new Imovel();
            i.id = imoveis.id;
                i.estacionamento = imoveis.parkingSpaces;
                    i.preco = imoveis.price;
                        i.publicavel = imoveis.publish;
                            i.area = imoveis.usableArea;
                        i.banheiros = imoveis.bathrooms;
                    i.quartos = imoveis.bedrooms;
                i.imagens = imoveis.images;
            i.endereco = imoveis.address.formattedAddress;

             lista._adiciona(i)
             view.update(lista);
             view2.updateInfos(lista, i.imagens)
			})
        };
    }
}
