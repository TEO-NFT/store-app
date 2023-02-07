const productList = require('./../database/products');

class ProductsService {
  constructor() {
    this.products = productList;
  }

  create() {}

  update() {}

  findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  getAll() {
    return this.products;
  }
}

module.exports = ProductsService;
