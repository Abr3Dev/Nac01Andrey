class Imovel{
    constructor(endereco, imagem, preco, banheiros, quartos, estacionamento, area, publicado){
        this._endereco = endereco;
        this._imagem = imagem;
        this._preco = preco;
        this._banheiros = banheiros;
        this._quartos = quartos;
        this._estacionamento = estacionamento;
        this._area = area;
        this._publicado = publicado;
    }
    
    get endereco(){
        return this._endereco;
    }
    get imagem(){
        return this._imagem;
    }
    get preco(){
        return this._preco
    }
    get banheiros(){
        return this._banheiros;
    }
    get quartos(){
        return this._quartos;
    }
    get estacionamento(){
        return this._estacionamento
    }
    get area(){
        return this._area;
    }
    get publicado(){
        return this._publicado;
    }
}