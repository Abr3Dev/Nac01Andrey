window.onload = carregaDados()

function carregaDados(){
    let xhr = new XMLHttpRequest;
        xhr.overrideMimeType('application/json');
        xhr.open("get", 'http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed');
    
        xhr.onload = function(){
            let json = JSON.parse(xhr.response);
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
            colocaNaTela(json);
            } 
    xhr.send(null);
        }
function colocaNaTela(obj) {
    console.log(obj);
    for (let i = 0; i < 3; i++) { //for (let i = 0; i < obj.length; i++) {
        
        let indice = i + 1;
        let id = document.getElementById(indice.toString());
        let end = obj[i].address.formattedAddress;
        let imgs = obj[i].images;
        let area = obj[i].usableArea;
        let bed = obj[i].bedrooms;
        let price = obj[i].price / 100;
        document.querySelectorAll('.card-title')[i].textContent = end;
        for (let j = 0; j < 3; j++) { //obj[i].images.length
            id.querySelectorAll('.d-block.w-100')[i].src = imgs[j];
        }
        document.querySelectorAll('.area')[i].textContent = area;
        document.querySelectorAll('.bed')[i].textContent = bed;
        document.querySelectorAll('.price')[i].textContent = price;
        // document.querySelectorAll('.modal-body')[i].textContent = area;

        // let end = document.querySelectorAll('.card-title');
        // end[i].innerText = obj[i].address.formattedAddress;
        // let area = document.querySelectorAll('');
        // area[i].innerText = obj[i].usableArea;
        // for (let j = 0; j < 3; j++) {
        //     let fotos = document.querySelectorAll('.d-block.w-100');
        //     console.log(fotos[j].src);
        // }
        // let foto = card.querySelector('.d-block.w-100').src = obj[i].images
        // console.log(foto);
    //     let card = document.querySelector('.modal-body');
    //     let p = card.querySelectorAll('p');
    //     let letras = obj[i].address.formattedAddress
    //     console.log(obj[i].address.formattedAddress)
    //     p[i].innerHTML = letras
    //     p[i].innerHTML = 'Quartos : ' + obj[i].bedrooms
    //     p[i].innerHTML = 'banheiros : ' + obj[i].bathrooms
    }
}