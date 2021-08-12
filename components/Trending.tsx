import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Novels } from "./Banner";
import { useEmblaCarousel } from "embla-carousel/react";

const TrendContainer = tw.div`
    w-full
`;

const ButtonContainer = tw.div`
    flex
    px-4

    md:px-10
    lg:px-20
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

const TrendSlickContainer = tw.div`
    grid
    grid-cols-5

    xl:grid-cols-5
    xl:gap-x-4

`;

const SliderContainer = tw.div`
    flex
    px:2
    bg-black
    h-full
    py-16
    font-semibold
    items-center


    xl:px-24
`;

const ImageSliderContainer = tw.div`
    flex
    items-center
`;

export const Trending = () => {
  const [slides, setSlides] = useState(Novels);
  const [startIndex, setStartIndex] = useState<number>(1);
  const [endIndex, setEndIndex] = useState<number>(5);
  const [animate, setAnimate] = useState(false);
  const [emblaRef] = useEmblaCarousel();

  return (
    <TrendContainer>
      <ButtonContainer>
        <TrendButton className="border-b-4 border-red-500 text-red-500">
          Phổ biến
        </TrendButton>
        <TrendButton>Nhiều view</TrendButton>
      </ButtonContainer>
      <SliderContainer>
        <ImageSliderContainer>
          <ChevronLeftIcon
            className="text-white font-semibold h-10 cursor-pointer mr-2"
            onClick={() => {
              if (startIndex >= 2) {
                setStartIndex(startIndex - 1);
                setEndIndex(endIndex - 1);
              }
            }}
          />
          <TrendSlickContainer>
            {slides.map((slide) => {
              if (slide.Id >= startIndex && slide.Id <= endIndex)
                return (
                  <Image
                    key={slide.Id}
                    src={slide.Thumbnail}
                    width={230}
                    height={305}
                    alt="/"
                  />
                );
            })}
          </TrendSlickContainer>
          <ChevronRightIcon
            className="text-white font-semibold h-10 cursor-pointer ml-2"
            onClick={() => {
              if (startIndex <= slides.length - 1) {
                setStartIndex(startIndex + 1);
                setEndIndex(endIndex + 1);
                setAnimate(true);
              }
            }}
          />
        </ImageSliderContainer>
      </SliderContainer>
    </TrendContainer>
  );
};

export default Trending;
