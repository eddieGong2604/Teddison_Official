const Reducer = (state, action) => {
  switch (action.type) {
    case "play":
      const newState = { ...state };
      newState.musicIsPlayed = true;
      return newState;
    case "pause":
      const newState1 = { ...state };
      newState1.musicIsPlayed = false;
      return newState1;
  }
};
export default Reducer;
