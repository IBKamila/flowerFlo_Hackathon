import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, getCart, deleteCartProduct, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Фото</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма продукта</th>
          </tr>
        </thead>
        <tbody>
          {cart.products
            ? cart.products.map((elem) => (
                <tr>
                  <td>
                    <img width={50} src={elem.item.img1} alt="plants" />
                  </td>
                  <td>{elem.item.title}</td>
                  <td>{elem.item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={elem.count}
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                    />{" "}
                    //кол-во продуктов
                  </td>
                  <td>{elem.subPrice}</td>
                  <td>
                    <button onClick={() => deleteCartProduct(elem.item.id)}>
                      Удалить
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>

      <h4> Общая сумма:{cart.totalPrice}</h4>
      <NavLink to="/form">
        <button> Заказать</button>
      </NavLink>
    </div>
  );
};

export default Cart;
