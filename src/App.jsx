import { Route, Switch } from "react-router-dom";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyles";
import TeamCollection from "./components/team-collection/TeamCollection";
import Modal from "./components/modal/Modal";
import "./App.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavigationBar />
      <Header />
      <TeamCollection />
      <Switch>
        <Route path="/modal/:name" />
      </Switch>
    </div>
  );
}

export default App;
