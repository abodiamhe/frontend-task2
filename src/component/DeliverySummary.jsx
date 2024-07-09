import { useContext } from "react";

import { CartContext } from "../../store/shopping-cart-context";

export default function DeliverySummary({ onShowDelivery }) {
  const { items } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(3)}`;

  return (
    <>
      <div className="delivery-summary">
        <h3>You are checking out:</h3>
        <ul>
          {items.map((cartItem) => {
            const price = cartItem.price * cartItem.quantity;
            const formattedPrice = `$${price.toFixed(3)}`;
            return (
              <p key={cartItem.id}>
                <span>{cartItem.name}</span>
                <span>{formattedPrice}</span>
              </p>
            );
          })}
        </ul>
        <p>
          <span>Delivery</span> <span>Free</span>
        </p>
        <hr />
        <p>
          <span>Total: </span>
          <span>{formattedTotalPrice}</span>
        </p>
        <hr />
        <p className="edith-order" onClick={() => onShowDelivery(false)}>
          Edit Order
        </p>
      </div>
      <div></div>
    </>
  );
}
