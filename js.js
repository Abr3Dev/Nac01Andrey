window.onload = carregaDados()

function carregaDados(){
    let xhr = new XMLHttpRequest;
        xhr.overrideMimeType('application/json');
        xhr.open("get", 'http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed');
    
        xhr.onload = function(){
                let  json = JSON.parse(xhr.response);
                console.log(json)
                colocaNaTela(json)
            } 
            xhr.send(null)
        }
function colocaNaTela(obj) {
    for (let i = 0; i < 3; i++) { //for (let i = 0; i < obj.length; i++) {
        let card = document.querySelectorAll('.card-title')
        card[i].innerText = obj[i].address.formattedAddress
        let fotos = document.querySelectorAll('.d-block.w-100').src
        console.log(fotos);
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