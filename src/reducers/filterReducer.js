const initialState = {
  category: "",
  material: "",
  range: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "changeCategory":
      return { ...state, category: action.payload };

    case "changeMaterial":
      return { ...state, material: action.payload };

    case "changeRange":
      return { ...state, range: action.payload };

    case "resetCategory":
      return { ...state, category: "" };

    case "resetMaterial":
      return { ...state, material: "" };

    default:
      return state;
  }
}

export { initialState, reducer };
