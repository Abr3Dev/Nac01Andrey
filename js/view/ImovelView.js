function template(lista) {
    return `
        <p>${lista.endereco}</p>
        <p>${lista.imagens[0]}</p>
        <p>R$ ${lista.preco},00.</p>
        <p>nº Banheiro: ${lista.banheiros}</p>
        <p>nº Quartos: ${lista.quartos}</p>
        <p>Área útil: ${lista.area}</p>
        <p>nº Vagas: ${lista.estacionamentos}</p>
        <hr/>
    `
    ;
}
