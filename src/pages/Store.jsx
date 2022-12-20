import React, { useEffect, useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { ProductsArea, Button } from "../css/style";

export const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem("carrinho") || []);
  const [favorite, setFavorite] = useState(getItem("favorite") || []);
  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter);
      setItem("carrinho", arrFilter);
    } else {
      setCart([...cart, obj]);
      setItem("carrinho", [...cart, obj]);
    }
  };

  const handleClicke = (obj) => {
    const element = favorite.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = favorite.filter((e) => e.id !== obj.id);
      setFavorite(arrFilter);
      setItem("favorite", arrFilter);
    } else {
      setFavorite([...favorite, obj]);
      setItem("favorite", [...favorite, obj]);
    }
  };

  return (
    <div>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4>{`R$ ${e.price}`}</h4>
            <Button>
              <button onClick={() => handleClick(e)}>
                {cart.some((itemCart) => itemCart.id === e.id) ? (
                  <BsFillCartCheckFill />
                ) : (
                  <BsFillCartPlusFill />
                )}
              </button>
              <button onClick={() => handleClicke(e)}>
                {favorite.some((itemFavorite) => itemFavorite.id === e.id) ? (
                  <MdOutlineFavorite />
                ) : (
                  <MdFavoriteBorder />
                )}
              </button>
            </Button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};
