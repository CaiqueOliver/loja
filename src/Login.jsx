import React, { useState } from "react";
import { setItem } from "./services/LocalStorageFuncs";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const condition = name.length > 3 && pass.length > 5;
  const saveUser = (name, pass) => {
    setItem("user", { name, pass });
    const { history } = props;
    history.push("/store");
  };

  return (
    <div>
      <p>Nome</p>
      <input
        type="text"
        onChange={({ target: { value } }) => setName(value)}
        value={name}
      />
      <p>Senha</p>
      <input
        type="password"
        onChange={({ target: { value } }) => setPass(value)}
        value={pass}
      />
      <button
        type="button"
        onClick={() => saveUser(name, pass)}
        disabled={!condition}
      >
        Login
      </button>
    </div>
  );
};
