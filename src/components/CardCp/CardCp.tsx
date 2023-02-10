import "./CardCp.css";

export interface PropsCard {
  urlImg: string;
  title: string;
  subTitle: string;
  isFeatured?: boolean;
}

export function CardCp({
  urlImg,
  title,
  subTitle,
  isFeatured = false,
}: PropsCard) {
  return (
    <div className=" w-auto d-inline-block">
      {isFeatured && (
        <div className="d-flex justify-content-center">
          <span className="badge bg-info text-dark  text-white px-2 position-absolute ">
            Featured
          </span>
        </div>
      )}
      <img src={urlImg} className="cardimg pt-2" alt={title} />
      <div className="card-body">
        <span className="fs-7 text-secondary">{subTitle}</span>
        <h5 className="fw-bold fs-6 text-white p-0">{title}</h5>
      </div>
    </div>
  );
}
