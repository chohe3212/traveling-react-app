import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MapPage from './pages/MapPage';


const Layout = () => {
  return (
    <div>
      <Menu />

      <Outlet />
    </div>
  )
}

//화면전환 : 링크를 보고 이동
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<MainPage />} />
        <Route path='login' element={<LoginPage />} />        
        <Route path='map' element={<MapPage />} />    
        <Route path='signup' element={<SignUpPage />} />    
      </Routes>
    </div>
  );
}

export default App;
