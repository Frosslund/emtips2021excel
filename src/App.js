import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
            <Router />
            <Footer />
        </div>
    </BrowserRouter>
  )
}

export default App;
