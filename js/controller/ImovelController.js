window.onload = carregaDados();
let div = document.querySelector('.valores');

function carregaDados(){
    console.log('chamou o método')
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed');
    xhr.send()
    xhr.addEventListener('load', function(){
        console.log
        if(xhr.status == 200){
            let json = JSON.parse(xhr.responseText);
            console.log(json)
            json.sort(function (a, b) { //ordena price decrescente.
                if (a.price < b.price) {
                    return 1; //mais 1
                }
                if (a.price > b.price) {
                    return -1; //menos 1
                }
    
                return 0;
            });
            json = json.filter(function (value) { //retiva valores indesejáveis.
                return value.price !== 0 && value.publish !== false;
            });

          for (let i = 0; i < json.length; i++) {
              if(json.publish != false){
            Imovel.id = json[i].id,
            Imovel.endereco = json[i].address.formattedAddress,
            Imovel.imagens = json[i].images,
            Imovel.preco = json[i].price,
            Imovel.banheiros = json[i].bathrooms,
            Imovel.quartos = json[i].bedrooms,
            Imovel.estacionamentos = json[i].parkingSpaces,
            Imovel.area = json[i].usableArea,
            Imovel.publicavel = json[i].publish
            console.log(Imovel.imagens)
            div.innerHTML += template(Imovel)
            console.log(div)
              
          }
        }
       
                   
        }
           
        
    })
}
    
