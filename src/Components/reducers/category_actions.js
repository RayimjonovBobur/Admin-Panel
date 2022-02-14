const initaState = [
  // {
  //   name: "Camera",
  //   id: "ncj8934de2",
  // },
  // {
  //   name: "Iphone",
  //   id: "ncj8934de2",
  // },
];

const categoryes = (state = initaState, action) => {
  switch (action.type) {
    case "add-category":
      return [...state, action.payload];
    case "delete-category":
      return state.filter((item) => item.key !== action.payload[0]);
    case "Save-categoryes":
      return action.payload;
    default:
      return state;
  }
};

export default categoryes;
