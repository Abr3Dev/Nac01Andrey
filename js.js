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
function colocaNaTela(obj){
    for (let i = 0; i < 5; i++) {
        let card = document.querySelector('.modal-body');
        let p = card.querySelectorAll('p');
        let letras = obj[0].address.formattedAddress
        console.log(obj[0].address.formattedAddress)
       p[i].innerHTML = letras
       p[i].innerHTML = 'Quartos : ' + obj[i].bedrooms
       p[i].innerHTML = 'banheiros : ' + obj[i].bathrooms
        
    }       
}