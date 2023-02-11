import "./App.css";
import { CarouselView } from "./components/CarouselView/CarouselView";
import { NewCarouselView } from "./components/NewCarouselView/NewCarouselView";
import { VideoView } from "./components/VideoView/VideoView";

function App() {
  return (
    <div className="App">
      <div className="bg-primary bg-opacity-10 pt-5">
        <VideoView></VideoView>
      </div>
      <div className="bg-2 ">
        <NewCarouselView
          {...{
            title: "Actions & Drama Movies",
            isRigth: true,
          }}
        ></NewCarouselView>
      </div>
      <div className="bg-2 ">
        <NewCarouselView
          {...{
            title: "Actions & Drama Movies",
            isRigth: false,
          }}
        ></NewCarouselView>
      </div>
    </div>
  );
}

export default App;
