function template(lista){
    let cards = document.querySelector('.card-deck');
    
        return  `
        <p>${lista.endereco}</p>
        <p>${lista.imagens[0]}</p>
        <p>${lista.preco}</p>
        <p>${lista.banheiros}</p>
        <p>${lista.quartos}</p>
        <p>${lista.area}</p>
        <p>${lista.estacionamentos}</p>
        <hr/>
    `
    ;
}
