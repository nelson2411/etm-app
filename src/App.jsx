import { Route, Switch } from "react-router-dom";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyles";
import TeamCollection from "./components/team-collection/TeamCollection";
import Map from "./pages/map/MapContainer";
import HomePage from "./pages/home-page/HomeContainer";
import MapWrapper from "./pages/map-wrapper/MapWrapper";
import Modal from "./components/modal/Modal";
import "./App.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/map">
          <MapWrapper />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
