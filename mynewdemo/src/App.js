import Footer from './Comonent/Footer';
import Header from './Comonent/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React,{Suspense,lazy} from 'react';
import Loading from './Comonent/Loading';

const Index =lazy(()=>import('./Pages/Index'));









function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
    <Routes>
      
      <Route index path='/' element={<><Header/><Index/><Footer/></>}></Route>
      
    </Routes>
    </Suspense>
    </BrowserRouter>

  );
}

export default App;
