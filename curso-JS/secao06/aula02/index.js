//* Object.defineProperty() e Object.definePorperties()

function Product(name, price, stock, color) {
  this.name = name;
  this.price = price;
  this.color = color;

  Object.defineProperty(this, "stock", {
    enumerable: true, // Vai ser exibido a chave ?
    value: stock, //Valor da chave
    writable: false, //O valor pode ser alterado ?
    configurable: true, // Pode reconfigurar a chave ?
  });

  Object.defineProperties(this, {
    name: {
      enumerable: true,
      value: name,
      writable: true,
      configurable: true,
    },
    price: {
      enumerable: true,
      value: price,
      writable: true,
      configurable: true,
    },
    color: {
      enumerable: true,
      value: color,
      writable: true,
      configurable: true,
    },
  });
}
const p1 = new Product("Macbook air 13 M5", 1200, 3, "Meia Noite");
console.log(
  `Temos o ${p1.name} por ${p1.price} dólares na cor ${p1.color}, Mas ATENÇÃO, restam apenas ${p1.stock} produtos no estoque`,
);
