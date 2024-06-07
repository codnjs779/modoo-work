import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import { theme } from './default/theme';
import ItemList from './components/ItemList/ItemList';
import { RecoilRoot} from 'recoil';
import { Suspense } from 'react';
import React from 'react';
import PageSkin from './components/PageSkin/PageSkin';


function App() {
  return (
    <RecoilRoot>
    <ThemeProvider theme={theme}>
      <div className="App" >
      <Header/>
      <div className='centerBox'>
      <PageSkin />
      </div>
      <Suspense fallback={<div>loading</div>}>
      {/* <ItemList />  */}
      </Suspense>
    </div>
    </ThemeProvider>
    </RecoilRoot>

  );
}

export default App;
