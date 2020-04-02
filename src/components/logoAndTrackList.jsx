import React from "react";
import Logo from "../img/logo.png";
import MultiPlayer from "./multiplayer";
import fx1 from "../music/fx1.wav";
import fx2 from "../music/fx2.wav";
import Technose from "../music/Technose.wav";
import sweep1 from "../music/sweep1.wav";
import sweep2 from "../music/sweep2.wav";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MerchButton = styled.button`
  background-color: rgb(91, 72, 47);
  border: none;
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;

const LogoAndTrackList = props => {
  return (
    <div className="text-center mx-5">
      {" "}
      <img src={Logo} style={{ maxWidth: "100%", height: "auto" }} />
      <div className="row">
        <div className="col-md-4 text-right">
          <h2 style={{ color: "#5b482f" }}>Sounds </h2>
        </div>
        <div className="col-md-4">
          <Link to="/merch">
            <MerchButton>
              <h2>Merch</h2>
            </MerchButton>
          </Link>
        </div>
        <div className="col-md-4 text-left">
          <h2 style={{ color: "#5b482f" }}>Projects</h2>
        </div>
      </div>
      <br></br>
      <MultiPlayer urls={[fx1, fx2, Technose, sweep1, sweep2]} />{" "}
    </div>
  );
};

export default LogoAndTrackList;
