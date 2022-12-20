import React, { useState } from "react";
import { setItem } from "./services/LocalStorageFuncs";
import { getItem } from "./services/LocalStorageFuncs";

export const Login = (props) => {
  const user = getItem("user");
  const [name, setName] = useState(user.name || "");
  const [pass, setPass] = useState(user.pass || "");
  const [passIncorrect, setPassIncorrect] = useState(false);

  const condition = name.length > 3 && pass.length > 5;
  const saveUser = (name, pass) => {
    const {
      history: { push },
    } = props;
    if (name === user.name && pass === user.pass) {
      push("/store");
      return;
    } else if (name === user.name && pass !== user.pass) {
      setPassIncorrect(true);
      return;
    }
    setItem("user", { name, pass });
    push("/store");
  };

  return (
    <div>
      <p>Login</p>
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

      {passIncorrect && <p>Senha Incorreta</p>}

      <br />

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
