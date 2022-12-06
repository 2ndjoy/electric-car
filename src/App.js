import logo from './logo.svg';
import './App.css';
import { Button, Navbar } from 'react-bootstrap';
import NavBar from './Components/NavBar/NavBar';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './Routes/Routers';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routers}></RouterProvider>

    </div>
  );
}

export default App;
