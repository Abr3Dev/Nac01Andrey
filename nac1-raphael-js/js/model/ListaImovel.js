class ListaImovel{
    constructor(){
        this.imoveis = []
    }

    adiciona(consulta){
        this.imoveis.push(consulta)
    }

    get consultas(){
        return [].concat(this.imoveis)
    }
}