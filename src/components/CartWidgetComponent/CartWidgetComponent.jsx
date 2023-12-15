import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const CartWidgetComponent = () => {
  const iconStyles = {
    fontSize: "1.3rem",
    paddingRight: "10px",
  };
  return (
    <div>
      <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
      <span style={{ fontSize: "1.3rem" }}>10</span>
    </div>
  );
};

export default CartWidgetComponent;
