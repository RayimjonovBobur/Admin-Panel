const initaState = [
  // {
  //   id: 0,
  //   name: "iPhone",
  //   price: "1200",
  4,
  //   img: "https://res.cloudinary.com/imsoft/image/upload/v1642671952/OnlineShop/iphone13_aiczpf.jpg",
  // },
];
const categores = [];
const pageTabs = [];
const page = [
  {
    text: "Xodimlar",
    path: "/category",
    key: 1,
  },
  {
    text: "About",
    path: "/",
    key: 2,
  },
  {
    text: "Content",
    path: "/products",
    key: 3,
  },
];
const Panes = [];

const product = (state = initaState, action) => {
  switch (action.type) {
    case "add-product":
      return [...state, action.payload];
    case "delete-product":
      return state.filter((item) => item.key !== action.payload[0]);
    case "SaveItem":
      return action.payload;
    case "edit_products":
      return (state = action.payload);
    default:
      return state;
  }
};

const addCategore = (state = categores, action) => {
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

const tabsPage = (state = pageTabs, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

const pages = (state = page, action) => {
  switch (action.type) {
    case "page":
      return [...state, action.payload];
    default:
      return state;
  }
};

const PanesTabs = (state = Panes, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { addCategore, product, pages, tabsPage, PanesTabs };
