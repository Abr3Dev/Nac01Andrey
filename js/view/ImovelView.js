class ImovelView extends View{
    constructor(item){
        super(item)
        
    }
     _template(item){
         
         return  `
         <div class="conteudo" id="${item.imoveis.id}">
         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
             <div class="carousel-inner">
                 <div class="carousel-item active">
                     <img src="${item.imoveis.imagens[0]}" class="d-block w-100" alt="...">
                 </div>
             </div>
            
         </div>
         <div class="card-body">
             <h5 class="card-title">${item.imoveis.endereco}</h5>
             <div class="row">
                 <p class="card-text conteudo-card-espaco"><i class="fas fa-arrows-alt"></i>${item.imoveis.area}m²</p>
                 <p class="card-text conteudo-card-espaco"><i class="fas fa-bed"></i> <span class="bed ">${item.imoveis.quartos}</span></p>
             </div>
             <p class="card-text"><i class="fas fa-dollar-sign"></i> <span class="price"></span>${item.imoveis.preco}</p>
             <!-- Button trigger modal -->
             <a data-toggle="modal" data-target="#exampleModal${item.imoveis.id}" class="btn-detalhes"> <i class="fas fa-plus"></i>Detalhes</a>
             </div>
         </div>
             `
        }
    
        _template2(item) {
            return `
            <div class="modal fade" id="exampleModal${item.imoveis.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Detalhes</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
                    </div>
                    <div class="modal-body" >

                        <div id="carouselExampleControlsModal${item.imoveis.id}" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                            
                                <div class="carousel-item active">
                                    <img src="${item.imoveis.imagens[0]}" class="d-block w-100" alt="...">
                                </div>
                                ${item.imoveis.imagens.map(img =>`
                                <div class="carousel-item">
                                <img src="${img}" class="d-block w-100" alt="...">
                            </div>
                                `).join('')}
                               
                                
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControlsModal${item.imoveis.id}" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControlsModal${item.imoveis.id}" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <div id="${item.imoveis.id}">
                        <p class="endereco">Endereço : ${item.imoveis.endereco}</p>
                        <p class="quartos">Quartos : ${item.imoveis.quartos}</p>
                        <p class="banheiros">Banheiros : ${item.imoveis.banheiros}</p>
                        <p class="vagas">Vagas : ${item.imoveis.estacionamento}</p>
                        <p class="area">Área Utilizável : ${item.imoveis.area}m²</p>
                        <p class="card-text"><i class="fas fa-dollar-sign"></i> ${item.imoveis.preco}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
       
         `
     }
}
