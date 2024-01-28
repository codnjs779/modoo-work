import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { theme } from './default/theme';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Header/>
      <SearchBar/>
      <ItemList/>
    </div>
    </ThemeProvider>
  );
}

export default App;
