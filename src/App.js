import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { theme } from './default/theme';
import ItemList from './components/ItemList/ItemList';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <ThemeProvider theme={theme}>
      <div className="App">
      <Header/>
      <SearchBar/>
      <ItemList/>
    </div>
    </ThemeProvider>
    </RecoilRoot>

  );
}

export default App;
