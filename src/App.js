import React from "react";
import SideMasks from "./components/sideMasks";
import LogoAndTrackList from "./components/logoAndTrackList";
import Store from "./components/store";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Merch from "./components/merch";
function App() {
  return (
    <Store>
      <HashRouter basename={process.env.PUBLIC_URL}>
        {" "}
        <div
          style={{ backgroundColor: "black" }}
          className="d-flex justify-content-around text-center"
        >
          <SideMasks />
          <Switch>
            <Route path={"/"} exact component={LogoAndTrackList} />
            <Route path={"/merch"} component={Merch} />
          </Switch>
          <SideMasks />
        </div>
      </HashRouter>
    </Store>
  );
}

export default App;
