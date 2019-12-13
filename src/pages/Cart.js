import React, { Component } from "react";
// import { connect } from 'react-redux';

import MainNavigation from "../components/MainNavigation";
// import { removeProductFromCart } from '../store/actions';
import ShopContext from "../context/shopContext";

import "./Cart.css";

const CartPage = () => {
  const cartItemCount = cart => {
    return cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0);
  };

  const value = React.useContext(ShopContext);
  return (
    // <ShopContext.Consumer>
    //   {(value) => {
    //     console.log('values!', value);
    //     return (
    <React.Fragment>
      <MainNavigation cartItemNumber={cartItemCount(value.cart)} />
      <main className="cart">
        {value.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {value.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={value.removeProductFromCart.bind(this, cartItem.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
    //     )
    //   }}
    // </ShopContext.Consumer>
  );
};

export default CartPage;

// class CartPage extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <MainNavigation cartItemNumber={this.props.cartItemCount} />
//         <main className="cart">
//           {this.props.cartItems.length <= 0 && <p>No Item in the Cart!</p>}
//           <ul>
//             {this.props.cartItems.map(cartItem => (
//               <li key={cartItem.id}>
//                 <div>
//                   <strong>{cartItem.title}</strong> - ${cartItem.price} (
//                   {cartItem.quantity})
//                 </div>
//                 <div>
//                   <button
//                     onClick={this.props.removeProductFromCart.bind(
//                       this,
//                       cartItem.id
//                     )}
//                   >
//                     Remove from Cart
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartPage);
