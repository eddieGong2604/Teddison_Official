import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import Mask from "../img/mask.png";
import { GlobalStateContext } from "./store";
const Side = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const beat = keyframes`
 0% {
    transform: scale(1.1);
  }
  30% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1.1);
  }
`;

const HeartBeat = styled.div`
  animation: ${beat} 0.5s infinite;
  transform-origin: center;
  transform: scale(1.1);
`;

const NormalState = styled.div`
  transform-origin: center;
  transform: scale(1.1);
`;

const SideMasks = () => {
  const [played, dispatch] = useContext(GlobalStateContext);
  const [currentCount, setCount] = useState(0);
  const timer = () => {
    currentCount <= 16 ? setCount(currentCount + 1) : setCount(0);
  };

  useEffect(() => {
    const id = setInterval(timer, 500);
    return () => clearInterval(id);
  }, [currentCount]);
  return (
    <Side>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(e =>
        (currentCount - e) % 2 === 0 && played.musicIsPlayed ? (
          <HeartBeat>
            {" "}
            <img src={Mask} />
          </HeartBeat>
        ) : (
          <NormalState>
            {" "}
            <img src={Mask} />
          </NormalState>
        )
      )}
    </Side>
  );
};

export default SideMasks;
