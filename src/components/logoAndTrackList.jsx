import React from "react";
import Logo from "../img/logo.png";
import MultiPlayer from "./multiplayer";
import fx1 from "../music/fx1.wav";
import fx2 from "../music/fx2.wav";
import Technose from "../music/Technose.wav";
import sweep1 from "../music/sweep1.wav";
import sweep2 from "../music/sweep2.wav";
import styled from "styled-components";
const MerchButton = styled.button`
  background-color: rgb(91, 72, 47);
  border: none;
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;

const LogoAndTrackList = props => {
  return (
    <div className="text-center">
      {" "}
      <img src={Logo} className="mb-5" />
      <h5 style={{ color: "#5b482f" }}>
        Sounds .{" "}
        <a href="teddisonOfficialFinal/merch">
          <MerchButton>Merch</MerchButton>
        </a>{" "}
        . Projects
      </h5>
      <br></br>
      <MultiPlayer urls={[fx1, fx2, Technose, sweep1, sweep2]} />{" "}
    </div>
  );
};

export default LogoAndTrackList;
