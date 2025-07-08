import { Outlet, useNavigation } from 'react-router-dom';
import UpperBar from './components/UpperNav';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import Loader from './components/Loader';

import './App.css';

function AppLayout() {
  const navigation = useNavigation();


  return (
    <>
      <UpperBar />
      <MainNav />
      <div className="main-content">
        {navigation.state === 'loading' ? <Loader /> : <Outlet />}
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
