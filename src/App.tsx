import "./App.css";
import { CarouselView } from "./components/CarouselView/CarouselView";
import { NewCarouselView } from "./components/NewCarouselView/NewCarouselView";
import { VideoView } from "./components/VideoView/VideoView";

function App() {
  return (
    <div className="App">
      <div className="bg-1 pt-5">
        <VideoView></VideoView>
      </div>
      <div className="bg-2 pt-5">
        <NewCarouselView
          {...{
            title: "Actions & Drama Movies",
            isRigth: true,
          }}
        ></NewCarouselView>
      </div>
      <div className="bg-3 pt-5">
        <NewCarouselView
          {...{
            title: "Funniest Comedy Movies of 2018",
            isRigth: false,
          }}
        ></NewCarouselView>
      </div>
    </div>
  );
}

export default App;
