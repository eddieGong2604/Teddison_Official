import React from "react";

const Equalizer = () => {
  return (
    <div class="equaliser-container">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => (
        <ol key={e} class="equaliser-column">
          <li class="colour-bar"></li>
        </ol>
      ))}
    </div>
  );
};

export default Equalizer;
