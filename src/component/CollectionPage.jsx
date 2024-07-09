import { useState } from "react";

import fullImage from "../assets/Rectangle1.png";
import fullImageRed from "../assets/Property1=Variant2.png";
import Products from "./Products.jsx";
import Member from "./Member.jsx";
import { PRODUCTS } from "../../product.js";
// import Cart from "./Cart";

export default function CollectionPage() {
  const [changeFullImage, setChangeFullImage] = useState(false);

  //   const handleAddToCart = (productId) => {
  //     setAddCart((prevCart) => {
  //       const updatedCartItems = [...prevCart];

  //       const existingCartIndex = updatedCartItems.findIndex(
  //         (cartItem) => cartItem.id === productId
  //       );
  //       console.log(existingCartIndex);

  //       const existingCartItem = updatedCartItems[existingCartIndex];

  //       if (existingCartItem) {
  //         const updatedCartItem = {
  //           ...existingCartItem,
  //           quantity: existingCartItem.quantity + 1,
  //         };
  //         updatedCartItems[existingCartIndex] = updatedCartItem;
  //       } else {
  //         const product = PRODUCTS.find((product) => product.id === productId);
  //         updatedCartItems.push({
  //           id: product.id,
  //           image: product.image,
  //           title: product.title,
  //           text: product.text,
  //           prize: product.prize,
  //           quantity: 1,
  //         });
  //       }

  //       return updatedCartItems;
  //     });
  //   };

  //   const handleCartItemQuantity = (productId, amount) => {
  //     setAddCart((prevCart) => {
  //       const updatedItems = [...prevCart];
  //       const updatedItemIndex = updatedItems.findIndex(
  //         (item) => item.id === productId
  //       );

  //       const updatedItem = { ...updatedItems[updatedItemIndex] };

  //       updatedItem.quantity += amount;

  //       if (updatedItem.quantity <= 0) {
  //         updatedItems.splice(updatedItemIndex, 1);
  //       } else {
  //         updatedItems[updatedItemIndex] = updatedItem;
  //       }
  //       return updatedItems;
  //     });
  //   };

  // const handleShowCart = () => {
  //   setShowCart((prevShow) => !prevShow);
  // };

  return (
    <>
      <div
        className="full-image"
        onMouseOver={() => setChangeFullImage(true)}
        onMouseOut={() => setChangeFullImage(false)}
      >
        {changeFullImage ? (
          <img src={fullImageRed} alt="full header image" />
        ) : (
          <img src={fullImage} alt="full header image" />
        )}
      </div>
      <Products title="Find Your Parfect Match" products={PRODUCTS} />
      <Member />
    </>
  );
}
