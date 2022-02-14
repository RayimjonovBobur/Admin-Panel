import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import MenuEx from "./Components/Menu/MenuEx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Pages from "./Components/Pages/Pages";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.data);
  useEffect(() => {
    localGet();
  }, []);

  const localSave = () => {
    localStorage.setItem("data", JSON.stringify(store));
  };

  const localGet = () => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify([]));
    } else {
      let dataLocal = JSON.parse(localStorage.getItem("data"));
      dispatch({ type: "SaveItem", payload: dataLocal });
    }
  };

  useEffect(() => {
    localSave();
  }, [store]);
  return (
    <div className="App">
      <ToastContainer />
      <MenuEx />
    </div>
  );
}

export default App;
