const { dataSource } = require("../ConfiguracionBaseDatos/appDataSource");
const Request = require("../modelos/Request").Request;
const Product = require("../modelos/Product").Product;
const cartCtl = {};
const productsCart = {
  catalogueItems: [],
  total: 0,
};

cartCtl.addToCart = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await dataSource
      .getRepository(Product)
      .findOne({ where: { id: productId } });
    if (product) {
      // json data

      productsCart.catalogueItems.push({
        name: product.name,
        code: product.code,
        price: product.price,
        stock: product.stock,
        id: product.id,
      });
      if (productsCart.catalogueItems.length > 0) {
        let accumulator = 0;
        for (const item of productsCart.catalogueItems) {
          productsCart.total = accumulator += item.price;
        }
      }
      res.render("e-commerce/cart", productsCart);
    } else {
      res.json({
        message: "no existe el producto que quiere agregar",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

cartCtl.pucharseConfig = async (req, res) => {
  res.render("e-commerce/paymentConfig");
};

cartCtl.removeProduct = async (req, res) => {
  const productId = req.params.id;
  const parsedId = parseInt(productId);
  if (productsCart.catalogueItems.length > 0) {
    productsCart.catalogueItems = productsCart.catalogueItems.filter(
      (item) => item.id !== parsedId
    );
    const product = await dataSource
      .getRepository(Product)
      .findOne({ where: { id: parsedId } });
    productsCart.total = productsCart.total - product.price;

    res.render("e-commerce/cart", productsCart);
  }
};

cartCtl.finishSell = async (req, res) => {
  const { address } = req.body;
  if (productsCart.catalogueItems.length > 0) {
    for (const item of productsCart.catalogueItems) {
      await dataSource.getRepository(Request).save({
        total: item.price,
        created_At: new Date(),
        productId: item.id,
        address,
        paymentMethod: "efectivo-contra-entrega",
        userId: 1,
      });
    }
    productsCart.catalogueItems.forEach(async (item, index) => {
      await dataSource.getRepository(Product).update(item.id, {
        stock:
          item.stock -
          productsCart.catalogueItems.filter(
            (filteredItem) => filteredItem.id === item.id
          ).length,
      });
    });
    productsCart.catalogueItems = [];
    productsCart.total = 0;
    res.render("e-commerce/thanksForYourOrder");
  }
};

module.exports = cartCtl;
