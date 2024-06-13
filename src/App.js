import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import { theme } from './default/theme';
import ItemList from './components/ItemList/ItemList';
import { RecoilRoot} from 'recoil';
import { Suspense } from 'react';
import React from 'react';


function App({children}) {
  return (
    <RecoilRoot>
    <ThemeProvider theme={theme}>
      <div className="App" >
      <Header/>
        {children}
      {/* <ItemList/> */}
    </div>
    </ThemeProvider>
    </RecoilRoot>

  );
}

export default App;
