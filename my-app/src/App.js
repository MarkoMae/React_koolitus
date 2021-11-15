import { Route, Routes } from 'react-router';
import './App.css';
import Menyy from './Components/Menyy';
import Kodu from './Pages/Kodu';
import Ostukorv from './Pages/Ostukorv';

function App() {
  return (
  <div>
    <Menyy />
    <Routes>
      <Route path="/" exact element={<Kodu/>} />
      <Route path="/Ostukorv" exact element={<Ostukorv/>} />
    </Routes>
    
    <div className="footer"></div>
   </div>
   
  
    

  );
}
export default App;