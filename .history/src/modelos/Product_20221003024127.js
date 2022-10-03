class Product {
  constructor(
    name,
    code,
    description,
    price,
    stock,
    product_image,
    artistCatalogueId
  ) {
    this.name = name;
    this.code = code;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.product_image = product_image;
    this.artistCatalogueId = artistCatalogueId;
  }
}
module.exports = {
  Product: Product,
};
