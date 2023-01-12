import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
