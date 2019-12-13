import React, { useContext } from "react";
import ShopContext from "../context/shopContext";
import MainNavigation from "../components/MainNavigation";
import { ADD_PRODUCT_TO_CART } from "../store/actions";
import "./Products.css";

const ProductsPage = () => {
  const { state, dispatch } = useContext(ShopContext);

  const getCartItemCount = () => {
    return state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0);
  };

  return (
    <React.Fragment>
      <MainNavigation cartItemNumber={getCartItemCount()} />
      <main className="products">
        <ul>
          {state.products.map(product => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch({
                      type: ADD_PRODUCT_TO_CART,
                      payload: product
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default ProductsPage;
