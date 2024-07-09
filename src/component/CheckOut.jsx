// import { useContext } from "react";
import checkOut from "../assets/Icon/Check Out.svg";
import { PRODUCTS } from "../../product";
import Products from "./Products";
// import { CartContext } from "../../store/shopping-cart-context";

export default function CheckOut() {
  //   const { items } = useContext(CartContext);

  const newProducts = [...PRODUCTS];

  const product = newProducts.slice(0, 4);
  return (
    <>
      <div id="check-out">
        <div>
          <img src={checkOut} />
        </div>
        <div className="check-out-detail">
          <h1>Order Successful</h1>
          <p>
            Thank you for shopping with Fit&Foot! Your order is being processed,
            and we cant't wait for you for you to enjoy your new purchase.
          </p>
        </div>
      </div>
      <Products checkout title="Similar products" products={product} />
    </>
  );
}
