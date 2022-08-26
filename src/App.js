import Header from "./components/header";
import Home from "./pages/home";
import FeedList from "./components/feedList";
import WaterList from "./components/waterList";

const App = () => (
  <div className="app-main">
    <Header />
    <Home />
    <WaterList />
    <FeedList />
  </div>
);

export default App;
