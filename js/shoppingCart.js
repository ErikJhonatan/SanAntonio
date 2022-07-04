class ShoppingCart{

    constructor(products = []){
        this.products = products;
    }
    deleteByIndex(index){
        this.products.splice(index,1);
    }
    addProductArray(product){
        let existe = false;
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].getNameFood() === product.getNameFood()){
                existe = true;
            }
        }
        if(!existe){
            this.products.push(product);
            return true;
        }
    }
    findIndexProducts(name, price){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].getNameFood() === name && this.products[i].getPrice() === price){
                return i;
            }
        }
        return -1;
    }
    removeProduct(product){
        this.products.splice(this.products.indexOf(product), 1);
    }
    priceTotal(){
        let total = 0;
        for(let i = 0; i < this.products.length; i++){
            total += this.products[i].calculatePrice();
        }
        return total;
    }
    toString(){
        return this.products.map(product => product.toString()).join("\n");
    }
    //Total de contenido del carrito
    totalProducts(){
        let total = 0;
        for(let i = 0; i < this.products.length; i++){
            total += this.products[i].getAmount();
        }
        return total;
    }
    totalElementos(){
        return this.products.length;
    }
    //getters
    getProducts(){
        return this.products;
    }
    //setters
    setProducts(products){
        this.products = products;
    }
}
export { ShoppingCart };