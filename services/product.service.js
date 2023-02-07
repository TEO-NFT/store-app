const productList = require('./../database/products');

class ProductsService {
  constructor() {
    this.products = productList;
  }

  create(product) {
    this.products.push(product);
  }

  update() {}

  findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  getAll() {
    return this.products;
  }
}

module.exports = ProductsService;
