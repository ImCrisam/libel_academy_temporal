import "./App.css";
import { CarouselView } from "./components/CarouselView/CarouselView";
import { NewCarouselView } from "./components/NewCarouselView/NewCarouselView";
import { VideoView } from "./components/VideoView/VideoView";

function App() {
  return (
    <div className="App">
      <div className="bg-2 ">
        <NewCarouselView
          {...{
            title: "Actions & Drama Movies",
            isRigth: true,
          }}
        ></NewCarouselView>
      </div>
      {/**
       * 
       <div className="bg-primary bg-opacity-10 pt-5">
         <VideoView></VideoView>
       </div>
      <div className="bg-dark bg-opacity-50">
        <CarouselView
          {...{
            title: "Actions & Drama Movies",
            isRigth: true,
          }}
        ></CarouselView>
      </div>
      <div className="bg-dark bg-opacity-25">
        <CarouselView
          {...{
            title: "Funniest Comedy Movies of 2018",
            isRigth: false,
          }}
        ></CarouselView>
      </div>
    */}
    </div>
  );
}

export default App;
