class Food {
    constructor(name, amount, price, description){
        this.name_ = name;
        this.amount_ = amount;
        this.price_ = price;
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
        this.amount_ = amount;
    }
    setPrice = function(price){
        this.price_ = price;
    }
    setDescription = function(description){
        this.description_ = description;
    }
    // metodos
    calculatePrice = function(){
        return this.amount_ * this.price_;
    }
    toString = function(){
        return `${this.name_} - ${this.amount_} - ${this.price_} - ${this.description_}`;
    }
}
export { Food };
