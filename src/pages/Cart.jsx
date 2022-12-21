import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProductsArea, Button, Container } from "../css/style";

export const Cart = () => {
  const [data, setData] = useState(getItem("carrinho") || []);
  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem("carrinho", arrFilter);
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);
  const total = subTotal.toFixed(2);

  return (
    <div>
      <h3>{`Subtotal: R$ ${total}`}</h3>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title} />
            <h4>{`R$ ${e.price}`}</h4>
            <Container>
              <Button>
                <button onClick={() => removeItem(e)}>
                  <BsFillCartDashFill />
                </button>
              </Button>
            </Container>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};
