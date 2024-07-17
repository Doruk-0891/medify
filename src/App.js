import { Outlet } from "react-router-dom";
import Headline from "./components/Headline/Headline";
import Navbar from "./components/Navbar/Navbar";
import FAQ from "./components/FAQ/FAQ";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Headline />
      <Navbar />
      <Outlet />
      <FAQ />
      <DownloadApp />
      <Footer />
    </>
  );
}

export default App;
