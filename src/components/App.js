import React,{useState} from "react";
import Textforms from "./textforms";
import Navbar from "./navbar";
import About from "./About";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <Router>
    <div>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
<Switch>
  <Route path="/about">
  <About  mode={mode}/>
  </Route>
  <Route path="/">
  <Textforms  mode={mode}/>
  </Route>
</Switch>
    
  </div>
    </div>
    </Router>
  );
}

export default App;
