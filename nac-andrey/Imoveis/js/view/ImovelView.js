class ImovelView extends View{
    constructor(item){
        super(item)
        
    }
     _template(item){
         
         return  `
        <div class="card">
                 <div class="image">
                     <img src=${item.imoveis.imagens[0]} alt="">
                 </div>
                 <div class="texts">
                     <p class="quartos">Quartos : ${item.imoveis.quartos}</p>
                     <p class="vagas">Vagas : ${item.imoveis.estacionamento}</p>
                     <p class="banheiros">Banheiros : ${item.imoveis.banheiros}</p>
                 </div>
             </div>
         `
     }

     _template2(item){
        return  `
        <div class="TodosValores">
                 <div class="image">
                     <img src=${item.imoveis.imagens[0]} alt="">
                 </div>
                 <div class="texts">
                     <p class="quartos">Quartos : ${item.imoveis.quartos}</p>
                     <p class="vagas">Vagas : ${item.imoveis.estacionamento}</p>
                     <p class="banheiros">Banheiros : ${item.imoveis.banheiros}</p>
                     <p class="endereco">Endereco : ${item.imoveis.endereco}</p>
                     <p class="img">Imagens : ${item.imoveis.imagens[0]}</p>
                     <p class="preco">preço : ${item.imoveis.preco}</p>
                     <p class="area">Área : ${item.imoveis.area}</p>
                 </div>
             </div>
         `
     }
}
