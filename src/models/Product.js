class Product {
    constructor(name, code, price, stock,artistCatalogueId) {
        this.name = name
        this.code = code
        this.price = price
        this.stock = stock
        this.artistCatalogueId = artistCatalogueId
    }
}
module.exports = {
    Product: Product
}