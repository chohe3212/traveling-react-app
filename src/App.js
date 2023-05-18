import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

const Layout = () => {
  return (
    <div>
      <Menu />

      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<MainPage />} />
        <Route path='login' element={<LoginPage />} />        
      </Routes>
    </div>
  );
}

export default App;
