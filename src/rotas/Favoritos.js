import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    font-family: Arial, sans-serif;
    color: #333333;
    margin: 0


`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
