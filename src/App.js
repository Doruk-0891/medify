import { Outlet } from "react-router-dom";
import Headline from "./components/Headline/Headline";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Headline />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
