import { CardCp, PropsCard } from "../CardCp/CardCp";
import { Carousel, Stack } from "react-bootstrap";

export interface PropsCarousel {
  arry: PropsCard[];
}

export function CarouselCp({ arry }: PropsCarousel) {
  const leng = arry.length;
  const nItems = 3;
  const lengCarousel = leng % nItems == 0 ? nItems : nItems + 1;

  return (
    <div className="d-flex wm-100">
      <div>
        <div>
          <Carousel indicators={false} className="wm-100 " controls={false}>
            {[...Array(lengCarousel)].map((value, i: number) => (
              <Carousel.Item className="wm-100">
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={3}
                >
                  {arry[i * 1] && <CardCp {...arry[i * 1]}></CardCp>}
                  {arry[i * 2] && <CardCp {...arry[i * 2]}></CardCp>}
                  {arry[i * 3] && <CardCp {...arry[i * 3]}></CardCp>}
                </Stack>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
