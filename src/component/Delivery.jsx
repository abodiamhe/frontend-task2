import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import DeliverySummary from "./DeliverySummary";
import CheckOut from "./CheckOut";

export default function Delivery({ onShowDelivery }) {
  const [checkedCard, setCheckedCard] = useState("card");
  const [showCheckout, setShowCheckout] = useState(false);

  const handleChange = (event) => {
    setCheckedCard(event.target.value);
  };

  let content;

  if (!showCheckout) {
    content = (
      <div>
        <div id="delivery">
          <div id="delivery-form">
            <div>
              <h2>Delivery Details</h2>
            </div>
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Phone number" />
            <Input type="text" placeholder="Address" />
            <h3>Payment Options</h3>
            <p className="card-detail">
              <label>
                <input
                  type="radio"
                  name="radios"
                  value="card"
                  // checked
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Card
              </label>
              <label>
                <input
                  type="radio"
                  name="radios"
                  value="delivery"
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Payment on delivery
              </label>
            </p>

            {checkedCard === "card" && (
              <div className="card-container">
                <p>Add card</p>
                <form className="card-form">
                  <input
                    type="text"
                    placeholder="Card Number"
                    required
                    className="first-card-input"
                  />
                  <input
                    type="month"
                    id="start"
                    name="start"
                    min="2024-01"
                    required
                    className="second-card-input"
                  />
                  <input
                    placeholder="cvv"
                    type="text"
                    maxLength="3"
                    required
                    className="third-card-input"
                  />
                </form>
              </div>
            )}
            <p className="bill">
              <label>
                <input type="radio" name="bill" value="bill" />
                <span className="checkmark"></span>
                Billing addree as the same delivery
              </label>
            </p>
            <Button full onClick={() => setShowCheckout(true)}>
              Proceed to make payment
            </Button>
          </div>
          <div>
            <DeliverySummary onShowDelivery={onShowDelivery} />
          </div>
        </div>
      </div>
    );
  } else {
    content = <CheckOut />;
  }

  return <>{content}</>;
}

//id="summary"
