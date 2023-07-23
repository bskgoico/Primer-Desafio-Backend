class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProducts(tittle, description, price, thumbnail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`EL codigo ${code} esta repetido`);
        break;
      }
    }

    ProductManager.id++;
    this.products.push({
      tittle,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: ProductManager.id,
    });
  }

  getProduct() {
    return this.products;
  }

  existe(id) {
    return this.products.find((producto) => producto.id === id);
  }

  getProductById(id) {
    !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
  }
}

const productos = new ProductManager();

productos.addProducts("Termo", "Un buen termo", 8000, "img1", "code1", 7);
productos.addProducts("Mate", "Un buen mate", 5000, "img2", "code2", 7);


console.log(productos.getProduct());

productos.addProducts("Bobilla", "Una buena bombilla", 1000, "img3", "code2", 10);
//productos.getProductById(2);
