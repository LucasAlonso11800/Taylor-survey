import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path='/' exact component={Survey} />
        <Route path='/results' component={Results} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
