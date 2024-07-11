import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="primary">
      <LocalMallIcon />
    </Badge>
  );
};

export default CartWidget;
