import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";

import PixelFlyLogo from "public/assets/project_images/pixel-fly/logo-outline.png";
import PixelFlyGIF from "public/assets/project_images/pixel-fly/pixelflyclouds.gif";
import ClumsySantaPresents from "public/assets/project_images/clumsy-santa/presents.gif";
import ClumsySantaTrampoline from "public/assets/project_images/clumsy-santa/trampolines.gif";
import ClumsySantaReindeers from "public/assets/project_images/clumsy-santa/reindeers.gif";
import Image, { StaticImageData } from "next/image";
const width = 900;
const height = 450;

const image = (data: StaticImageData, key: number | string): ReactNode => {
  return (
    <Image
      key={key}
      src={data}
      width={width}
      height={height}
      alt={""}
      objectFit={"contain"}
    />
  );
};

export const getImages = (project_id: string) => {
  switch (project_id) {
    case "pixel-fly":
      return (
        <EmblaCarousel
          images={[image(PixelFlyLogo, 0), image(PixelFlyGIF, 1)]}
        />
      );
    case "clumsy-santa":
      return (
        <EmblaCarousel
          images={[
            image(ClumsySantaPresents, 0),
            image(ClumsySantaReindeers, 1),
            image(ClumsySantaTrampoline, 2),
          ]}
        />
      );
  }
  return <></>;
};

export const EmblaCarousel = ({ images }: { images: ReactNode[] }) => {
  const [emblaRef] = useEmblaCarousel();

  const renderImages = (images: ReactNode[]) => {
    const objectList: ReactNode[] = [];
    images.forEach((image, index) => {
      objectList.push(
        <div key={index} className="embla_slide">
          {image}
        </div>
      );
    });
    return objectList;
  };
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">{renderImages(images)}</div>
    </div>
  );
};
