import { useContext } from "react";

import Button from "./Button";
import { CartContext } from "../../store/shopping-cart-context";

export default function Products({ checkout, title, products }) {
  const { addItemToCart } = useContext(CartContext);

  let cssSection = "shop";
  let cssUl = "products";
  let cssList = "product";

  if (checkout) {
    // cssList += " checkoutlist";
    cssUl += " checkout-ul";
    cssSection += " checkoutshop";
  }

  return (
    <section id={cssSection}>
      <h2 className="checkout-title">{title}</h2>

      <ul className={cssUl}>
        {products.map((product) => {
          const formattedPrice = `$${product.price.toFixed(3)}`;
          return (
            <li key={product.id} className={cssList}>
              <img src={product.image} alt={product.name} />
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="action-content">
                  <p className="prize">{formattedPrice}</p>
                  <p className="icon-container">
                    <span>
                      <span className="icon-span"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="icon-heart"
                        fill="currentColor"
                        class="bi bi-heart-fill icon-heart"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                        />
                      </svg>
                    </span>

                    <span>
                      <Button onClick={() => addItemToCart(product.id)}>
                        Add to cart
                      </Button>
                    </span>
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
