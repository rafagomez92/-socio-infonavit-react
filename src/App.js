import React, { useState, useEffect } from 'react';
// import LauncScreen from './components/LaunchScreen';
import Login from './components/login/Login';
import logo from './assets/logo.png';
import LauchScreen from './components/launchscreen/LaunchScreen';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Benevits from './components/benevits/Benevits';

function App() {
  const [ value, setValue ] = useState(true);

  useEffect(() => {
    splash();
  },[])

  function splash() {
    setTimeout(() => {
      setValue(false);
    }, 4000);    
  }

  
  return (            
    <Router>
        <div>
          <Switch>                                            
          {value ? <LauchScreen /> : <Route exact path="/" component={Login} />}                                         
          <Route path="/benevits" component={Benevits}/>                              
          </Switch>         
        </div>                    
    </Router>
  );
}


export default App;
