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
        <section className="main--desktop-view">
          <section className="main-video-section">
            <section className="video-description">
              this is where the video title, video info, video description will
              go
            </section>
            <section className="comments">this is the comments section</section>
          </section>
          <aside className="next-videos">
            this is where the list of next videos will go
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
