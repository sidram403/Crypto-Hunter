import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import AlertDesc from './components/AlertDesc';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import("./Pages/HomePage"));
const CoinPage = lazy(() => import("./Pages/CoinPage"));

function App() {
  
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" Component={HomePage} exact />
            <Route path="/coins/:id" Component={CoinPage} />
          </Routes>
        </Suspense>
        
        
      </div>
      <AlertDesc />
    </BrowserRouter>
  );
}

export default App;
