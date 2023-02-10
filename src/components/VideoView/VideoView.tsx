export function VideoView() {
  return (
    <div className="row container mx-auto mt-5 py-5">
      <div className="col-6 text-white">
        <h1 className="text-bold mb-4">Big ComeBack</h1>
        <p className="mb-5 ">
          Nullam porta, eros id aliquam pulvinar, urna ex mattis eros, quis
          vestibulum urna turpis et risus. Mauris porttitor risus faucibus,
          auctor arcu a, tincidunt nibh...
        </p>

        <button type="button" className=" btn btn-info p-3 ">
          WATCH NOW
        </button>
        <button type="button" className=" btn btn-outline-light mx-3 p-3 ">
          +PLAYLIST
        </button>
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-outline-light mx-2 rounded-circle btn-lg m-auto h-25"
        >
          <span>&#62;</span>
        </button>
      </div>
      <div className="my-4"></div>
    </div>
  );
}
