//функция для количества товаров в корзине

export function getCountProductsCart() {
  let cart = JSON.parse(localStorage.getItem("cart")); // стягиваем данные с хранилища
  return cart ? cart.products.length : 0; // если есть что-то в хранилище, верни нам длинну массива карточки. Если пустое, то верни 0
}

//функция для высчитывания цены в subPrice
export function calcSubPrice(product) {
  return product.count * product.item.price;
}

// функция для высчитывания общей суммы
export function calcTotalPrice(products) {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.subPrice;
  });
  return totalPrice;
}
