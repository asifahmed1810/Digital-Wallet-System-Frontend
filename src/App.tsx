import { Outlet } from "react-router";
import "./App.css";
import CommonLayOut from "./components/LayOut/CommonLayOut";


function App() {
  return (
    <>
      <CommonLayOut>
        <Outlet></Outlet>
      </CommonLayOut>
    </>
  );
}

export default App;
