class ShoppingCart{
    constructor(products = []){
        this.products = products;
    }
    addProduct(product){
        this.products.push(product);
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
    totalProducts(){
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