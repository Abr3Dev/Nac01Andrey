class ImovelController{
    constructor(){
      let d = document.querySelector('.container')
   this._listaImoveis = new ListaImoveis();
   this._ImovelView = new ImovelView(d)
  
   this._ImovelView.update(this._listaImoveis)
  
  //  let request = new XMLHttpRequest();
  // request.open('GET', 'http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed');
  // request.responseType = 'text';
  // request.onload = function() {
  //     console.log(request.response)
  //   };
  //   request.send('id');
  }
  adiciona(){
    this._listaImoveis.adciona(this._criaImovel());
    this._ImovelView.update(this._listaImoveis)
  }
  _criaImovel(){
    readTextFile('http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed', function(text){
  
      var data = JSON.parse(text)
      console.log(data)
    
      for (let i = 0; i < data.length; i++) {
        new Imovel(
          data[0].address.formattedAddress,
          data[0].images[0],
          data[0].price,
          data[0].bathrooms,
          data[0].bedrooms,
          data[0].parkingSpaces,
          data[0].usableArea,
          data[0].publish
        )
        
      }
      
    });
    new Imovel(
      'aa',
      'aa',
      'aa',
      'aa',
      'aa',
      'aa',
      'aa',
    )
  }
  }
  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
  }
  
  //usage:
  
  //       element.address.formattedAddress,
      //       images[0],
      //       price,
      //       bathrooms,
      //       bedrooms,
      //       parkingSpaces,
      //       usableArea,
      //       publish
  
  
  
  
  
  
  window.onload = new ImovelController().adiciona();
  