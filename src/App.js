import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import ExtractVideoInfo from './ExtractVideoInfo';


function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch> 
            <Route exact path="/"> <ExtractVideoInfo /> </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
