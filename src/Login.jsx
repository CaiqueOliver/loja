import React, { useState } from "react";
import { setItem } from "./services/LocalStorageFuncs";
import { getItem } from "./services/LocalStorageFuncs";
import { CgProfile } from "react-icons/cg";
import { LoginArea } from "../src/css/style";

export const Login = (props) => {
  const user = getItem("usuario");

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [passIncorrect, setPassIncorret] = useState(false);

  const cond = name.length > 3 && pass.length > 5;

  const saveUser = (name, pass) => {
    const {
      history: { push },
    } = props;
    if (user) {
      if (user.name.length > 0 && user.pass.length > 0) {
        if (name === user.name && pass === user.pass) {
          push("/store");
        } else if (name === user.name && pass !== user.pass) {
          setPassIncorret(true);
        } else {
          setItem("usuario", { name, pass });
          push("/store");
        }
      }
    } else {
      setItem("usuario", { name, pass });
      push("/store");
    }
  };

  return (
    <LoginArea>
      <span>
        <CgProfile />
      </span>
      <input
        type="text"
        onChange={({ target: { value } }) => setName(value)}
        value={name}
        placeholder="Name"
      />

      <input
        type="password"
        onChange={({ target: { value } }) => setPass(value)}
        value={pass}
        placeholder="Password"
      />

      {passIncorrect && <p>Senha incorreta</p>}

      <button
        type="button"
        onClick={() => saveUser(name, pass)}
        disabled={!cond}
      >
        Sing In
      </button>
    </LoginArea>
  );
};
