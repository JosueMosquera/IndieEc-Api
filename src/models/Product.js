class Product {
  constructor(name, code, description, price, stock, artistCatalogueId) {
    this.name = name;
    this.code = code;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.artistCatalogueId = artistCatalogueId;
  }
}
module.exports = {
  Product: Product,
};
