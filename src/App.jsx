import { Header } from "./components/header";

import Footer from "./components/footer";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import News from "./components/news";
import Guidge from "./components/usageguide";
import HeadLine from "./components/headline";

function App() {
  return (
    <div className="App">
      <Header />
      <HeadLine />
      <Guidge />
      <News />
      <Footer />
    </div>
  );
}

export default App;
