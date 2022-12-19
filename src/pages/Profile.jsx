import React from "react";
import { Header } from "../components/Header";
import { getItem } from "../services/LocalStorageFuncs";

export const Profile = (props) => {
  const user = getItem("user");
  const toProfileEdit = () => {
    const {
      history: { push },
    } = props;
    push("/profile/edit");
  };
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={toProfileEdit}>Edit Perfil</button>
    </div>
  );
};
