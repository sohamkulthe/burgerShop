//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage, Navbar } from './components';
import Shop from './components/Shop';
import Offers from './components/Offers';
import Burgers from './components/Burgers';
import './assets/style.scss';
import './assets/styles/font.css';
import theme from './assets/styles/theme';
import {ThemeProvider} from '@mui/material/styles';
import Appbar from './components/Navbar/Appbar';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Appbar/>
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
