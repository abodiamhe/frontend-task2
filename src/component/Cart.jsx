import { useContext, useState } from "react";

import Summary from "./Summary";
import { CartContext } from "../../store/shopping-cart-context";
import Delivery from "./Delivery";

export default function Cart() {
  const { items, updateCartItemQuantity } = useContext(CartContext);
  const [showDelivery, setShowDelivery] = useState(false);

  let content;

  if (!showDelivery) {
    content = (
      <>
        <h2 className="your-cart">Your Cart</h2>
        <div id="cart">
          <ul id="cart-items">
            {items.map((item) => {
              const formattedPrice = `$${item.price.toFixed(3)}`;

              return (
                <li key={item.id} className="cart-item">
                  <img src={item.image} />
                  <div className="cart-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="item-prize">{formattedPrice}</p>
                    <p className="cart-item-actions">
                      <span className="item-quantity-text">Qty</span>

                      <button
                        onClick={() => updateCartItemQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button
                        onClick={() => updateCartItemQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Summary cart={items} onShowDelivery={setShowDelivery} />
        </div>
      </>
    );
  } else {
    content = <Delivery onShowDelivery={setShowDelivery} />;
  }

  return (
    <div id="cart-container">
      {items.length === 0 && <p>No item on cart</p>}
      {items.length > 0 && content}
    </div>
  );
}
