import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/theme";
import Table from "./components/Table";
import ScTable from './components/Table'
import Header from "./components/Header";
import Register from "./components/Register";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Update from "./components/Update";


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ScTable/>} />
          <Route path='/table' element={<ScTable/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>
      </Router>
    </ThemeProvider>
    // <ThemeProvider theme={lightTheme}>
    //   <Header/>
    //   <div className="table-container">
    //     {/* <Table></Table> */}
    //     <ScTable/>
    //   </div>
    // </ThemeProvider>
      
  );
}

export default App;
