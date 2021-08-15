import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Novels } from "../lib/store";
import { useEmblaCarousel } from "embla-carousel/react";
import Link from "next/link";

const TrendContainer = tw.div`
    w-full
    overflow-y: hidden;
`;

const TrendSlickContainer = tw.div`
    grid
    grid-cols-5
    gap-x-2

    xl:grid-cols-5
    xl:gap-x-4

`;

const SliderContainer = tw.div`
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
    mt-4


    xl:text-sm
`;
export const TrendingForDetail = () => {
  const [slides, setSlides] = useState(Novels);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(4);
  const [animate, setAnimate] = useState(false);
  const [emblaRef] = useEmblaCarousel();

  return (
    <TrendContainer>
      <SliderContainer>
        <h3 className="text-gray-200 text-lg font-semibold mb-6 xl:pl-10 pl-4">
          Truyện cùng tác giả
        </h3>
        <div className="flex">
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
            <TrendSlickContainer className={`${animate === true ? "" : ""}`}>
              {slides.map((slide) => {
                if (slide.Id >= startIndex && slide.Id <= endIndex)
                  return (
                    <ImageItem key={slide.Id}>
                      <Link href={`/detail/${slide.Id}`} passHref>
                        <Image
                          src={slide.Thumbnail}
                          width={230}
                          height={305}
                          alt="/"
                        />
                      </Link>
                      <ImageContent>{slide.Name}</ImageContent>
                    </ImageItem>
                  );
              })}
            </TrendSlickContainer>
            <ChevronRightIcon
              className="text-white font-semibold h-10 cursor-pointer ml-2"
              onClick={() => {
                if (startIndex <= slides.length - 2) {
                  setStartIndex(startIndex + 1);
                  setEndIndex(endIndex + 1);
                  setAnimate(true);
                }
              }}
            />
          </ImageSliderContainer>
        </div>
      </SliderContainer>
    </TrendContainer>
  );
};

export default TrendingForDetail;
