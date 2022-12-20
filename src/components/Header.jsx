import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "../css/style";

export const Header = () => {
  return (
    <HeaderArea>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/cart">Cart</Link>
    </HeaderArea>
  );
};
