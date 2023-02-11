import Icono from "../../assets/play icon.png";

export function VideoView() {
  return (
    <div className="container">
      <div className="row  mx-auto mt-5 py-5">
        <div className="col-md-12 col-lg-6 order-md-2 order-lg-1 mt-5">
          <h1 className="text-bold mb-4 text-white">Big ComeBack</h1>
          <p className="mb-5 text-white">
            Nullam porta, eros id aliquam pulvinar, urna ex mattis eros, quis
            vestibulum urna turpis et risus. Mauris porttitor risus faucibus,
            auctor arcu a, tincidunt nibh...
          </p>

          <button type="button" className=" btn btn-info  p-3 px-5  mb-3">
            <span className="text-bold  text-light">WATCH NOW</span>
          </button>
          <button
            type="button"
            className=" btn btn-outline-light mx-3 p-3 px-5 mb-3"
          >
            +PLAYLIST
          </button>
        </div>
        <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center order-md-1 order-lg-2">
          <button
            type="button"
            className="btn btn-outline-light mx-2 rounded-circle btn-lg p-4 mb-5"
          >
            <img src={Icono} alt="icon" className="ms-2 p-1 w-75 h-25" />
          </button>
        </div>
        <div className="my-4"></div>
      </div>
    </div>
  );
}
