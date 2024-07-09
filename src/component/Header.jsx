import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import fitFootLogo from "../assets/Fit&Foot Logo.svg";
import { CartContext } from "../../store/shopping-cart-context";

export default function Header() {
  const [showColorIcon, setShowColorIcon] = useState(false);
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  return (
    <>
      <nav>
        <ul className="sidebar">
          <li>
            <a onClick={hideSidebar} href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
          <li>
            <a onClick={() => setShowColorIcon(false)}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-header" : undefined
                }
                end
              >
                HOME
              </NavLink>
            </a>
          </li>
          <li>
            <a onClick={() => setShowColorIcon(false)}>
              <NavLink
                to="products"
                className={({ isActive }) =>
                  isActive ? "active-header" : undefined
                }
                end
              >
                COLLECTIONS
              </NavLink>
            </a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="products">
              <img src={fitFootLogo} alt="fir foot logo" />
            </Link>
          </li>
          <li className="center-content">
            <li className="hideOnMobile">
              <a onClick={() => setShowColorIcon(false)}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-header" : undefined
                  }
                  end
                >
                  HOME
                </NavLink>
              </a>
            </li>
            <li className="hideOnMobile">
              <a onClick={() => setShowColorIcon(false)}>
                <NavLink
                  to="products"
                  className={({ isActive }) =>
                    isActive ? "active-header" : undefined
                  }
                  end
                >
                  COLLECTIONS
                </NavLink>
              </a>
            </li>
            <li className="hideOnMobile">
              <a href="#about">ABOUT</a>
            </li>
            <li className="hideOnMobile">
              <a href="#contact">CONTACT</a>
            </li>
          </li>

          <li className="header-images">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                // className="icon-person "
                class="bi bi-person-fill icon-person"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </span>
            <span>
              <a onClick={() => setShowColorIcon(true)}>
                <NavLink
                  to="cart"
                  className={({ isActive }) => {
                    return isActive ? "icon-active" : undefined;
                  }}
                  end
                >
                  {showColorIcon ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="red"
                      className="cart-icon "
                      class="bi bi-cart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="cart-icon "
                      class="bi bi-cart-fill cart-icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  )}
                </NavLink>
                <span className="cart-span">{cartQuantity}</span>
              </a>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
          </li>
          <li>
            <a className="menu-button" href="#" onClick={showSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#5f6368"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
