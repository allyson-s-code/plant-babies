import Header from "./components/header";
import Home from "./pages/home";
//import FeedList from "./components/feedList";
//import WaterList from "./components/waterList";
import Care from "./pages/care";

const App = () => (
  <div className="app-main">
    <Header />
    <Home />
    <Care />
  </div>
);

export default App;
