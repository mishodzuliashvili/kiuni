import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="px-10 py-10 md:px-20 md:py-10">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
