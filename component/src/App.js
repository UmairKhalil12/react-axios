import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading  , setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        console.log('response.data : ', response.data);
        setProducts(response.data);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
        setLoading(true); 
      }
    })()
  }, [])

  if (error) {
    return <div className="App">
      <header className="App-header">
        <h1>Something went wrong!!</h1>
      </header>
    </div>
  }

  if (loading) {
    return <div className="App">
      <header className="App-header">
        <h1>Something went wrong!!</h1>
      </header>
    </div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and APIS</h1>
        <h2>Number of products are: {products.length}</h2>
      </header>
    </div>
  );
}

export default App;
