function template(lista) {
    return `
           <div class="card-apartamentos">

           <div class="card-deck">
               <!-- card 01 -->
               <div class="card" id="1">
                   <div id="carouselExampleControls${lista.id}" class="carousel slide" data-ride="carousel">
                       <div class="carousel-inner">
                           <div class="carousel-item active">
                           <img src="${lista.imagens[0]}" class="d-block w-100" alt="...">
                           </div>
                           <div class="carousel-item">
                               <img src="${lista.imagens[0]}" class="d-block w-100" alt="...">
                           </div>
                           <div class="carousel-item">
                               <img src="${lista.imagens[0]}" class="d-block w-100" alt="...">
                           </div>
                       </div>
                       <a class="carousel-control-prev" href="#carouselExampleControls${lista.id}" role="button" data-slide="prev">
                           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span class="sr-only">Previous</span>
                       </a>
                       <a class="carousel-control-next" href="#carouselExampleControls${lista.id}" role="button" data-slide="next">
                           <span class="carousel-control-next-icon" aria-hidden="true"></span>
                           <span class="sr-only">Next</span>
                       </a>
                   </div>
                   <div class="card-body">
                       <h5 class="card-title">${lista.endereco}</h5>
                       <div class="row">
                           <p class="card-text conteudo-card-espaco"><i class="fas fa-arrows-alt"></i><span class="area"></span> ${lista.area} m²</p>
                           <p class="card-text conteudo-card-espaco"><i class="fas fa-bed"></i> <span class="bed"></span>${lista.quartos}</p>
                       </div>
                       <p class="card-text"><i class="fas fa-dollar-sign"></i> <span class="price"></span> ${lista.preco},00.</p>
                       <!-- Button trigger modal -->
                       <a data-toggle="modal" data-target="#exampleModal${lista.id}" class="btn-detalhes"> <i class="fas fa-plus"></i>Detalhes</a>

                   </div>
               </div>
           </div>

           <!-- Modal -->
           <div class="modal fade" id="exampleModal${lista.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLabel">Detalhes</h5>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
                       </div>
                       <div class="modal-body">

                           <div id="carouselExampleControlsModal1" class="carousel slide" data-ride="carousel">
                               <div class="carousel-inner">
                                   <div class="carousel-item active">
                                       <img src="${lista.imagens[0]}" class="d-block w-100" alt="...">
                                   </div>
                                   <div class="carousel-item">
                                       <img src="${lista.imagens[0]}" class="d-block w-100" alt="...">
                                   </div>
                                   <div class="carousel-item">
                                       <img src="${lista.imagens[0]}" class="d-block w-100" alt="...">
                                   </div>
                               </div>
                               <a class="carousel-control-prev" href="#carouselExampleControlsModal1" role="button" data-slide="prev">
                                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                   <span class="sr-only">Previous</span>
                               </a>
                               <a class="carousel-control-next" href="#carouselExampleControlsModal1" role="button" data-slide="next">
                                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                   <span class="sr-only">Next</span>
                               </a>
                           </div>


                           <p>Endereço : ${lista.endereco}</p>
                           <p>Quartos : ${lista.quartos}</p>
                           <p>Banheiros : ${lista.banheiros}</p>
                           <p>Vagas : ${lista.estacionamentos}</p>
                           <p class="area">Área Utilizável : ${lista.area}m²</p>
                           <p class="card-text"><i class="fas fa-dollar-sign"></i>${lista.preco},00. </p>
                       </div>
                       <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                       </div>
                   </div>
               </div>
           </div>
       `;
}