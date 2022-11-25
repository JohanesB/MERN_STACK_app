import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Update from './pages/Update';
import Register from './pages/Register';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/update' element={<Update/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
