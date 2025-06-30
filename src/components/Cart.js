import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); //make sure you are subscribing to a correct store
  console.log("cartItems", cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black rounded-lg text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length > 0 ? (
          <ItemList items={cartItems} />
        ) : (
          <h1>Cart is empty. Add items to the cart!</h1>
        )}
      </div>
    </div>
  );
};
export default Cart;
