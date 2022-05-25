import React from 'react';
import { MdSearch } from 'react-icons/md'

import { ContainerInput, InputText, ButtonSearch } from './style';

export const Form = () => {
  return (
    <ContainerInput>
        <InputText type="text" placeholder="Digite seu cep..." />

        <ButtonSearch>
          <MdSearch size={25} color="#fff" />
        </ButtonSearch>
    </ContainerInput>
  );
};
