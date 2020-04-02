import React, { useState, useEffect } from "react";
import Equalizer from "./equalizer";
import { useContext } from "react";
import { GlobalStateContext } from "./store";
import DownloadModal from "./downloadModal";

const useMultiAudio = urls => {
  const [sources] = useState(
    urls.map(url => {
      return {
        url,
        audio: new Audio(url)
      };
    })
  );

  const [players, setPlayers] = useState(
    urls.map(url => {
      return {
        url,
        playing: false
      };
    })
  );

  const toggle = targetIndex => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex(p => p.playing === true);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, []);

  return [players, toggle];
};

const MultiPlayer = ({ urls }) => {
  const [players, toggle] = useMultiAudio(urls);

  return (
    <div>
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle(i)} />
      ))}
    </div>
  );
};

const Player = ({ player, toggle }) => {
  const [, dispatch] = useContext(GlobalStateContext);

  return (
    <div
      className="d-flex justify-content-between mb-4 px-3"
      style={{ backgroundColor: "#3d342f" }}
    >
      <div>
        {" "}
        <button
          style={{
            border: "none",
            background: "transparent",
            color: "#75675e"
          }}
          onClick={() => {
            !player.playing
              ? dispatch({ type: "play" })
              : dispatch({ type: "pause" });
            toggle();
          }}
        >
          <h3>
            SNARE &nbsp;
            {player.playing ? (
              <i className="fa fa-pause" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-play" aria-hidden="true"></i>
            )}
          </h3>
        </button>
        <DownloadModal track={player} />
      </div>
      <div>
        <Equalizer />
      </div>
    </div>
  );
};

export default MultiPlayer;
