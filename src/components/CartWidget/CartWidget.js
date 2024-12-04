import CartIcon from "../../assets/shopping-cart.svg";

const CartWidget = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <img src={CartIcon} alt="Carrito de compras" />
      <span>3</span>
    </div>
  );
};

export default CartWidget;
