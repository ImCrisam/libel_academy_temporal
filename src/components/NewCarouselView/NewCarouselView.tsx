import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselHook } from "../../hooks/carouselHook";
import { CardCp, PropsCard } from "../CardCp/CardCp";
import { PropsCarousel } from "../CarouselCp/CarouselCp";
import { PropsCarouselView } from "../CarouselView/CarouselView";

export function NewCarouselView({
  title,
  isRight: isRigth,
}: PropsCarouselView) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const init: PropsCarousel = { arry: [] };
  let { propsCarousel, type, propsTime } = carouselHook(init);

  useEffect(() => {
    propsTime("today");
  }, []);
  let refCarousel: any;
  return (
    <div className="container">
      <div className="row justify-content-center pb-4">
        <div
          className={
            (isRigth ? "order-lg-1 order-md-2" : "order-2") +
            " col-md-12 col-lg-8 pb-4"
          }
        >
          <div className="mb-4 text-bold text-secondary">
            <span
              className={(type == "today" && "text-info") + " "}
              onClick={() => {
                propsTime("today");
              }}
            >
              Today
            </span>
            <span className="px-2">/</span>
            <span
              className={(type == "week" && "text-info") + " "}
              onClick={() => {
                propsTime("week");
              }}
            >
              This Week
            </span>
            <span className="px-2">/</span>
            <span
              className={(type == "30days" && "text-info") + " "}
              onClick={() => {
                propsTime("30days");
              }}
            >
              Last 30 days
            </span>
          </div>
          <Carousel
            ref={(el) => (refCarousel = el)}
            responsive={responsive}
            infinite={false}
            arrows={false}
            centerMode={true}
            itemClass={"w-auto px-3"}
          >
            {propsCarousel.arry.map((item) => (
              <CardCp {...item}></CardCp>
            ))}
          </Carousel>
        </div>
        <div
          className={
            (isRigth ? "order-lg-2 order-md-1" : "order-1") +
            "  col-md-12 col-lg-4 pb-4 "
          }
        >
          <div className="mb-5" />
          <hr className="border-secondary w-25"></hr>
          <h1 className="text-white fw-bold">{title}</h1>
          <div>
            <button
              type="button"
              className="btn btn-outline-secondary mx-2 rounded-circle"
              onClick={() => {
                {
                  refCarousel.previous();
                }
              }}
            >
              <span>&#60;</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary mx-2 rounded-circle"
              onClick={() => {
                {
                  refCarousel.next();
                }
              }}
            >
              <span>&#62;</span>
            </button>
          </div>
          <hr className="border-secondary"></hr>
          <span
            className="text-muted text-bold  "
            onClick={() => {
              alert("View All");
            }}
          >
            VIEW ALL &#62;
          </span>
        </div>
      </div>
    </div>
  );
}
