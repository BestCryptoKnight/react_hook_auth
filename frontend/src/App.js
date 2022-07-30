import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Contact from './pages/Contact';
import Auth from './pages/Auth';

function App() {
  return (
    <Container>
      <Router>
        <Route path='/' exact component={Auth} />
        <Route path='/contact' exact component={Contact} />
      </Router>
    </Container>
  );
}

export default App;
