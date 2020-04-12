class View{
    constructor(el){
        this.el = el
    }
    update(model){
        this.el.innerHTML += this._template(model)
    }
    updateInfos(model){
        this.el.innerHTML += this._template2(model)
    }

    _template(model){
        throw new Error('O método template deve ser implementado.')
    }

    _template2(model){
        throw new Error('O método template deve ser implementado.')
    }
}