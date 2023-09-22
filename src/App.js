import "./styles/partials/_global.scss";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { videoSrc } from "./components/VideoPlayer/VideoPlayer";


function App() {


  return (
    <div className="App">
      <Header></Header>
      <main className="main">
      <VideoPlayer></VideoPlayer>

      </main>
    </div>
  );
}

export default App;
