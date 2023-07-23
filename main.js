class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProducts(tittle, description, price, thumbnail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`EL codigo "${code}" esta repetido`);
        break;
      }
    }

    const newProduct = {
      tittle,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (!Object.values(newProduct).includes(undefined)) {
      ProductManager.id++;
      this.products.push({
        ...newProduct,
        id: ProductManager.id,
      });
    } else {
      console.log("No se han completado todos los campos");
    }
  }

  getProduct() {
    return this.products;
  }

  existe(id) {
    return this.products.find((producto) => producto.id === id);
  }


  //Método que busca el producto que coincida con el id
  getProductById(id) {
    !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
  }
}

const productos = new ProductManager();

//Agregamos productos
productos.addProducts("Termo", "Un buen termo", 8000, "img1", "code1", 7);
productos.addProducts("Mate", "Un buen mate", 5000, "img2", "code2", 7);

//Mostramos el rreglo con los productos
console.log(productos.getProduct());

//Verifica que el codigo esta repetido
productos.addProducts("Bobilla", "Una buena bombilla", 1000, "img3", "code2", 10); //El codigo "code2" esta repetido

//Verificar busqueda por id / Not Found si no existe
productos.getProductById(2); //Muesta el prodcuto que contiene el id 2
productos.getProductById(4); //Not Found