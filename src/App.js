import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import ShowBooks from './components/ShowBooks';
import { useState } from 'react';

function App() {
  const listSeach = ['FRONT-END', 'BACK-END', 'DADOS', 'LIVROS DISPONÍVEIS', 'ORDENAR POR PREÇO']
 
  const [seach, setSeach] = useState('')
  const [priceAllBooks, setPriceAllBooks] = useState('')

  return (
    <div className="App">
      <Header
        list={listSeach} 
        setSeach={setSeach}
      />
      <ShowBooks
         seach={seach}
         setPriceAllBooks={setPriceAllBooks}
      />
      <Footer 
        priceAllBooks={priceAllBooks}
      />
    </div>
  );
}

export default App;
