class Paginacao{
    constructor(json){
    this._pag1 = [];
    this._pag2 =[];
    this._pag3 = [];
    }

    pagina1(json){
        for (let i = 0; i <5; i++) {
            this._pag1.push(json[i]);
        }
        
        return this._pag1;
    }
    pagina2(json){
        
        for (let i = 5; i < 15; i++) {
           
            this._pag2.push (json[i]);
        }
        return this._pag2
    }
    pagina3(json){
        
        for (let i = 16; i<25; i++) {
            
            this._pag3.push (json[i]);
        }
        return this._pag3
    }
}