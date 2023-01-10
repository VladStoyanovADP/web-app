import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import NotFound from './NotFound';
import Navbar from './Navbar'
import ExtractVideoInfo from './ExtractVideoInfo';
import CutVideo from './CutVideo';


function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch> 
            <Route exact path="/">  
              <Home> </Home>
              <ExtractVideoInfo> </ExtractVideoInfo>
              <CutVideo> </CutVideo>
            </Route>
            <Route path="*">
              <NotFound> </NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
