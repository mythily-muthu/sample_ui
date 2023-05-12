
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Content />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
