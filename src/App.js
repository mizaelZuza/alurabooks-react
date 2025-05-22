import Logo from './componentes/Logo';
import './App.css';
import OpcoesHeader from './componentes/OpcoesHeader';
import IconesHeader from './componentes/IconesHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
      </header>
    </div>
  );
}

export default App;
