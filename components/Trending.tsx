import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Novels } from "../lib/store";
import { useEmblaCarousel } from "embla-carousel/react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TrendContainer = tw.div`
    w-full
    overflow-y: hidden;
`;

const ButtonContainer = tw.div`
    flex
    px-4

    md:px-16
    lg:px-12
    xl:px-36
`;

const TrendButton = tw.div`
    flex
    text-xs
    font-semibold
    text-gray-100
    hover:text-red-500
    hover:border-red-500
    mt-10
    py-3
    mr-6
    cursor-pointer

    md:text-sm

`;

const SliderContainer = tw.div`
    bg-black
    px-10
    py-8


    xl:py-20
    xl:px-36

    
`;

const ImageSliderContainer = tw.div`
    flex
    items-center
`;

const ImageItem = tw.div`
    flex
    flex-col
    text-white
    font-semibold
    text-xs
    h-44

    md:h-52
    xl:text-sm
    xl:h-80
`;

const ImageContent = tw.h4`
    text-xs
    text-white
    mt-2
    ml-1


    xl:text-sm
`;
export const Trending = () => {
  const [slides, setSlides] = useState(Novels);
  const [startIndex, setStartIndex] = useState<number>(1);
  const [endIndex, setEndIndex] = useState<number>(5);
  const [animate, setAnimate] = useState(false);
  const [emblaRef] = useEmblaCarousel();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <TrendContainer>
      <ButtonContainer>
        <TrendButton className="border-b-4 border-red-500 text-red-500">
          Phổ biến
        </TrendButton>
        <TrendButton>Nhiều view</TrendButton>
      </ButtonContainer>
      <SliderContainer>
        <Slider {...settings}>
          {Novels.map((Novel) => {
            return (
              <div key={Novel.Id} className="min-w-min">
                <Link href={`novel/${Novel.Id}`} passHref>
                  <Image
                    src={Novel.Thumbnail}
                    width={240}
                    height={305}
                    alt="/"
                  />
                </Link>
                <ImageContent>{Novel.Name}</ImageContent>
              </div>
            );
          })}
        </Slider>
      </SliderContainer>
    </TrendContainer>
  );
};

export default Trending;
