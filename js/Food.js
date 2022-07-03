class Food {
    constructor(name, amount, price, description){
        this.name_ = name;
        this.setAmount(amount);
        this.setPrice(price);
        this.description_ = description;
    }
    // getter
    getNameFood = function(){
        return this.name_;
    }
    getAmount = function(){
        return this.amount_;
    }
    getPrice = function(){
        return this.price_;
    }
    getDescription = function(){
        return this.description_;
    }
    // setter
    setNameFood = function(nameFood){
        this.name_ = nameFood;
    }
    setAmount = function(amount){
        const value = Number(amount);
        if (!Number.isSafeInteger(value) || value <= 0) throw new Error('Cantidad inválida');
        this.amount_ = value;
    }
    setPrice = function(price){
        const value = Number(price);
        if ((typeof price !== 'number' && (typeof price !== 'string' || !price.trim())) ||
            value < 0 || !Number.isSafeInteger(Math.round(value * 100))) throw new Error('Precio inválido');
        this.price_ = value;
    }
    setDescription = function(description){
        this.description_ = description;
    }
    // metodos
    calculatePrice = function(){
        const cents = Math.round(this.price_ * 100) * this.amount_;
        if (!Number.isSafeInteger(cents)) throw new Error('Importe fuera de rango');
        return cents / 100;
    }
    toString = function(){
        return `${this.name_} - ${this.amount_} - ${this.price_} - ${this.description_}`;
    }
}
export { Food };
