import React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Todo from './pages/Todo';
import SimpleCount from './pages/SimpleCount';
import AdvancedCount from './pages/AdvancedCount';
import Calculator from './pages/Calculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
          <div style={{display:"flex"}}>
            <Link to="/todo"><strong style={{fontSize:"30px"}}>TodoList</strong></Link>
            <Link to="/simplecount" style={{marginLeft:"10px"}}><strong style={{fontSize:"30px"}}>SimpleCount</strong></Link>
            <Link to="/advancedcount" style={{marginLeft:"10px"}}><strong style={{fontSize:"30px"}}>AdvancedCount</strong></Link>
            <Link to="/calculator" style={{marginLeft:"10px"}}><strong style={{fontSize:"30px"}}>Calculator</strong></Link>
          </div>
          <div style={{marginTop:"10px"}}>
            <Routes>
              <Route path="/todo" element={<Todo/>}/>
              <Route path="/simplecount" element={<SimpleCount/>}/>
              <Route path="/advancedcount" element={<AdvancedCount/>}/>
              <Route path="/calculator" element={<Calculator/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
