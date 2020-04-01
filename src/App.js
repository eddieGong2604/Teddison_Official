import React from "react";
import SideMasks from "./components/sideMasks";
import LogoAndTrackList from "./components/logoAndTrackList";
import Store from "./components/store";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Merch from "./components/merch";
function App() {
  return (
    <Store>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {" "}
        <div
          style={{ backgroundColor: "black" }}
          className="d-flex justify-content-around text-center"
        >
          <SideMasks />
          <Switch>
            <Route path={"/"} exact component={LogoAndTrackList} />
            <Route path={"*"} component={Merch} />
          </Switch>
          <SideMasks />
        </div>
      </BrowserRouter>
    </Store>
  );
}

export default App;
