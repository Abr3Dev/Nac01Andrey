class Organizar{
    constructor(json){
        
    }
    _organizar(json){
        if(json.publish != false){
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
        return json
    }
    }
    
    }