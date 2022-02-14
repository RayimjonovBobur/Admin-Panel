import { combineReducers } from "redux";
import { addCategore, pages, PanesTabs, product, tabsPage } from "./actions";

const store = combineReducers({
  data: product,
  addCategore: addCategore,
  pages: pages,
  tabsPage: tabsPage,
  Panes: PanesTabs,
});

export default store;
