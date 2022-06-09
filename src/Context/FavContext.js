import React, { createContext, useReducer } from "react";
import { getCountProductsFav } from "../helpers/cartFunctions";
export const favContext = createContext();

const INIT_STATE = {
  fav: {},
  favLength: getCountProductsFav(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_FAV":
      return { ...state, fav: action.payload };
    case "CHANGE_FAV_COUNT":
      return { ...state, favLength: action.payload };
    default:
      return state;
  }
};

const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductToFav = (productItem) => {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
      };
    }

    let newProduct = {
      item: productItem,
      count: 1,
    };

    let filterFav = fav.products.filter(
      (elem) => elem.item.id === productItem.id
    );
    if (filterFav.length > 0) {
      fav.products = fav.products.filter((elem) => {
        return elem.item.id !== productItem.id;
      });
    } else {
      fav.products.push(newProduct);
    }

    localStorage.setItem("fav", JSON.stringify(fav));

    dispatch({
      type: "CHANGE_FAV_COUNT",
      payload: fav.products.length,
    });
  };

  const getFav = () => {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
      };
    }

    dispatch({
      type: "GET_FAV",
      payload: fav,
    });
  };

  const deleteFavProduct = (id) => {
    let fav = JSON.parse(localStorage.getItem("fav"));
    fav.products = fav.products.filter((elem) => elem.item.id !== id);
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  };

  return (
    <favContext.Provider
      value={{
        fav: state.fav,
        favLength: state.favLength,
        addProductToFav,
        getFav,
        deleteFavProduct,
      }}
    >
      {children}
    </favContext.Provider>
  );
};

export default FavContextProvider;
