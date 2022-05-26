import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import api from "../../service/api";

import { Text } from "../Text";

import {
  ContainerInput,
  InputText,
  ButtonSearch,
  ContainerModal,
} from "./style";

export const Form = () => {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Erro ao buscar");
      setInput("");
    }
  }

  return (
    <>
      <ContainerInput>
        <InputText
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <ButtonSearch onClick={handleSearch}>
          <MdSearch size={25} color="#fff" />
        </ButtonSearch>
      </ContainerInput>

      <ContainerModal>
        <Text type="h2" children={cep.cep} />
        <Text type="span" children={cep.logradouro}/>
        <Text type="span" children={cep.bairro} />
        <Text type="span" children={cep.localidade} />
        <Text type="span" children={cep.uf} />
      </ContainerModal>
    </>
  );
};
