const productList = require('./../database/products');
//const faker = require('faker');
class ProductsService {
  constructor() {
    this.products = productList;
  }

  async create(product) {
    //product.id = faker.datatype.uuid();
    this.products.push(product);
  }

  async update(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product not Found');
    } else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes,
      };
      return this.products[index];
    }
  }

  async findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  async getAll() {
    return this.products;
  }

  async delete(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    } else {
      this.products.splice(index, 1);
      return {
        msg: `Product with id ${id} was removed`,
      };
    }
  }
}

module.exports = ProductsService;
