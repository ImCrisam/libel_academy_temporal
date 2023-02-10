import { CarouselCp, PropsCarousel } from "../CarouselCp/CarouselCp";
import { carouselHook } from "../../hooks/carouselHook";
import { useEffect } from "react";

export interface PropsCarouselView {
  title: string;
  isRigth: boolean;
}

export function CarouselView({ title, isRigth }: PropsCarouselView) {
  let { propsCarousel, propsTime } = carouselHook();

  useEffect(() => {
    propsTime("today");
  }, []);

  return (
    <div className=" row container  mx-auto py-5">
      <div className={(isRigth ? "order-1" : "order-2") + " col-8"}>
        <div className="mb-4">
          <a
            className=" text-primary"
            onClick={() => {
              propsTime("today");
            }}
          >
            Today
          </a>
          <span className="mx-2">/</span>
          <a
            className=" text-secondary"
            onClick={() => {
              propsTime("week");
            }}
          >
            This Week
          </a>
          <span className="mx-2">/</span>
          <a
            className=" text-secondary"
            onClick={() => {
              propsTime("30days");
            }}
          >
            Last 30 days
          </a>
        </div>
        {propsCarousel && <CarouselCp {...propsCarousel}></CarouselCp>}
      </div>
      <div className={(isRigth ? "order-2" : "order-1") + " col-4"}>
        <div className="mb-5" />
        <hr className="border-secondary w-25"></hr>
        <h1 className="text-white fw-bold">{title}</h1>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary mx-2 rounded-circle"
          >
            <span>&#60;</span>
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary mx-2 rounded-circle"
          >
            <span>&#62;</span>
          </button>
        </div>
        <hr className="border-secondary"></hr>
        <span className="text-secundary text-bold ">VIEW ALL &#62;</span>
      </div>
    </div>
  );
}
