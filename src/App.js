import './App.css';
import logo from './assets/images/pokeball.png'
import {Switch, Route, NavLink, Redirect} from 'react-router-dom'; 
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';

function App() {
  return (
    <div className="App">
       <div className="App__pokeDic">
      <nav>
      <img className="nav__logo" src={logo} alt="Logo" />
        <NavLink to={"/pokemon/test"}>search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList}></Route>
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon}></Route>
        <Redirect to={"/"}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;
