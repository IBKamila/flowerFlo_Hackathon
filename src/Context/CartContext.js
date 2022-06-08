import React, { createContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsCart,
} from "../helpers/cartFunctions";

export const cartContext = createContext();

const INIT_STATE = {
  cart: {},
  cartLength: getCountProductsCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductToCart = (productItem) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0, // общая сумма
      };
    }

    let newProduct = {
      item: productItem,
      count: 1,
      subPrice: 0, // увеличивает цену на кол-во, сумма продукта
    };

    // Условие, чтобы в корзине не было дублирующих элементов для localStorage
    let filterCart = cart.products.filter(
      //в переменной хранятся все дублированные элементы
      (elem) => elem.item.id === productItem.id
    );
    if (filterCart.length > 0) {
      // если в нашем массиве что-то есть, то отфильтруй данные. Здесь мы отсортировываем не дублирующие данные.
      cart.products = cart.products.filter((elem) => {
        return elem.item.id !== productItem.id;
      });
    } else {
      cart.products.push(newProduct);
    }

    newProduct.subPrice = calcSubPrice(newProduct);
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  };

  // Функция для стягивание с localStorage
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  // Функция для удаления с корзины
  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  // Функция, кторая меняет кол-во и изменяет сумма
  function changeProductCount(id, count) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        cartLength: state.cartLength,
        addProductToCart,
        getCart,
        deleteCartProduct,
        changeProductCount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
