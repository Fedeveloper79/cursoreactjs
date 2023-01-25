
import NavBar from './componentes/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner';
import CartWidget from './componentes/CartWidget';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './componentes/ItemDetailContainer/ItemDetail';


import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">


    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<ItemListConteiner />}/>
        <Route path='item' element={<ItemDetail />}/>
       
      </Routes>
    </BrowserRouter>

    </header>

      
    </div>

    
    

  );
}

export default App;
