class ImovelView extends View{
    constructor(elemento){
        super(elemento);
    }

    _template(lista){
        console.log(lista)
         return  `
         <p>${lista.id}</p>

         `;
        
       
    }
}