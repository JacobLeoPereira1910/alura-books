import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const Logo = styled.div`
  display: flex;
  font-size: 30px; 
`
const LogoImg = styled.img`
  margin-right: 10px;
`;

function showLogo() {
  return (
    <Logo>
      <LogoImg src={logo} />
      <p><strong>AluraBooks</strong></p>
    </Logo>
  );
}

export default showLogo;