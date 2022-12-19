import React, { useState } from "react";

export const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [img, setImg] = useState("");
  const [cpf, setCpf] = useState("");
  return (
    <div>
      <p>Nome</p>
      <input
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <p>Email</p>
      <input
        type="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <p>Senha</p>
      <input
        type="password"
        value={pass}
        onChange={({ target: { value } }) => setPass(value)}
      />
      <p>Foto</p>
      <input
        type="file"
        value={img}
        onChange={({ target: { value } }) => setImg(value)}
      />
      <p>CPF</p>
      <input
        type="number"
        value={cpf}
        onChange={({ target: { value } }) => setCpf(value)}
      />
      <button>Salvar</button>
    </div>
  );
};
