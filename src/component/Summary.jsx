import { useState, useContext } from "react";

import chevronUp from "../assets/Icon/chevron-up.svg";
import Button from "./Button";
import { CartContext } from "../../store/shopping-cart-context";

export default function Summary({ onShowDelivery }) {
  const [showPromo, setShowPromo] = useState(false);

  const { items } = useContext(CartContext);

  const itemsQuantity = items.length;

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(3)}`;

  const handleShowPromo = () => {
    setShowPromo((prevState) => !prevState);
  };

  let cssClass = "crossRotate";
  if (showPromo) {
    cssClass += " active";
  }
  return (
    <div className="summary">
      <h3>Order Summary</h3>
      <p>
        <span>{itemsQuantity} items</span>
        <span>{formattedTotalPrice}</span>
      </p>
      <p>
        <span>Delivery</span> <span>free</span>
      </p>
      <hr />
      <p>
        <span>Total: </span>
        <span>{formattedTotalPrice}</span>
      </p>
      <hr />
      <p>
        Do you have a promo Code?
        <span onClick={handleShowPromo}>
          <img src={chevronUp} className={cssClass} />
        </span>
      </p>
      {showPromo && (
        <form className="promo">
          <input />
          <button>Apply</button>
        </form>
      )}
      <Button full onClick={() => onShowDelivery(true)}>
        Check out
      </Button>
      <p className="summary-member">Become a member to enjoy discounts</p>
    </div>
  );
}
