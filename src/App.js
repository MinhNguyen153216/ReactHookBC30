import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderHome from "./components/HeaderHome/HeaderHome";

function App() {
  return (
    <div className="App">
      <HeaderHome/>
      {/* render components from Route */}
      <Outlet />
    </div>
  );
}

export default App;
