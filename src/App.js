import Header from './componentes/Header';
import Search from './componentes/Search';
import LastReleases from './componentes/LastReleases';
import styled from 'styled-components';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background: linear-gradient(90deg, #002f52 35%, #326589 100%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search></Search>
      <LastReleases />
    </AppContainer>
  );
}

export default App;
