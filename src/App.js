import './App.css';
import Navbar from './Components/NavBar.js';
import CountriesList from './Components/CountriesList';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CountryDetail from './Components/CountryDetail.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="row">
          <CountriesList />
          <div className="col-8">
            <Switch>
              <Route exact path="/:cca3" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
