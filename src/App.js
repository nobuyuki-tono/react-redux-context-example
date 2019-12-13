import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import "./App.css";

import reducer, { initialState } from "./store/reducers";
import ShopContext from "./context/shopContext";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <ProductsPage />} exact />
          <Route path="/cart" render={() => <CartPage />} exact />
        </Switch>
      </BrowserRouter>
    </ShopContext.Provider>
  );
}

export default App;
