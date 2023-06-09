import { useContext } from "react";

import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce(() => {}, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>장바구니</span>
        <span className={classes.badge}>
            3{/* 임시 하드코딩 */}
        </span>
    </button>
  )
}

export default HeaderCartButton