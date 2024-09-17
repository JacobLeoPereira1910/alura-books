import React from 'react';
import Logo from '../Logo/index';
import OptionsHeader from '../OptionsHeader/index';
import Profile from '../../imagens/perfil.svg';
import Wallet from '../../imagens/sacola.svg';
import styled from 'styled-components';


const textOptions = ['CATEGORIAS', 'FAVORTIOS', 'ESTANTE'];
const icons = [Profile, Wallet];

const HeaderContainer = styled.header`
    background-color: #fff;
    justify-content: center;
    display: flex;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OptionsHeader textOptions={textOptions} />
      <OptionsHeader icons={icons} />
    </HeaderContainer>
  );
}
export default Header;