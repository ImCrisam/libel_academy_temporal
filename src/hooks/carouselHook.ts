import { useEffect, useState } from "react";
import { PropsCarousel } from "../components/CarouselCp/CarouselCp";
import { PropsCard } from "../components/CardCp/CardCp";

export const carouselHook = (init: PropsCarousel) => {
  const [propsCarousel, setPropsCarousel] = useState<PropsCarousel>(init);

  const propsCard: PropsCard = {
    urlImg:
      "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80",
    title: "Laby Bird",
    subTitle: "Action, Thiller, 2018",
    isFeatured: true,
  };
  const propsCard2: PropsCard = {
    urlImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvj1m08tALg_JpKzEeyDBgCwQY1bJDKo8og&usqp=CAU",
    title: "Laby ",
    subTitle: "Action, Thiller, 2018",
  };
  const propsCard3: PropsCard = {
    urlImg:
      "https://images.unsplash.com/photo-1495366554757-8568e69d7f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    title: "Laby ",
    subTitle: "Action, Thiller, 2018",
  };

  let arryCurrent: PropsCard[] = [
    propsCard,
    propsCard2,
    propsCard,
    propsCard2,
    propsCard,
  ];
  function propsTime(category: string) {
    switch (category) {
      case "30days":
        arryCurrent = [propsCard2, propsCard2, propsCard2, propsCard2];
        break;
      case "week":
        arryCurrent = [propsCard3, propsCard3, propsCard3, propsCard3];
        break;
      default:
        arryCurrent = [
          propsCard,
          propsCard,
          propsCard,
          propsCard3,
          propsCard3,
          propsCard3,
          propsCard2,
          propsCard2,
          propsCard2,
        ];
        break;
    }

    const value: PropsCarousel = {
      arry: arryCurrent,
    };

    setPropsCarousel({ ...value });
  }

  return {
    propsCarousel,
    propsTime,
  };
};
