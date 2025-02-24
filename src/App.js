//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage, Navbar, Shop, Offers, Burgers } from './components/index';
import './assets/style.scss';
import './assets/styles/font.css';
import theme from './assets/styles/theme';
import {ThemeProvider} from '@mui/material/styles';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' index element={<LandingPage/>}/>
        <Route path='/burgers' element={<Burgers/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
