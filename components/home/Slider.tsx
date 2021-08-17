import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Novels } from "../../lib/store";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderMainContainer = tw.div`
  w-full
  overflow-y: hidden;
`;

const SliderLabelContainer = tw.div`
  flex
  px-4
bg-black

  md:px-8
  lg:px-12
  xl:px-36
`;

const SliderLabelItem = tw.div`
  flex
  font-semibold
text-gray-100
  text-sm

  cursor-pointer
  mt-10
  py-3
  mr-6
`;

const SliderContainer = tw.div`
bg-black
  px-10
  pt-3
  pb-5


  xl:pt-7
  xl:pb-24
  xl:px-36


    
`;

const ImageContent = tw.h4`
  text-xs
text-white
  font-bold
  mt-2
  mr-2
  ml-1


  
`;

interface Props {
  label: string;
  content: boolean;
}

export const SliderComponent: React.FC<Props> = ({ label, content }) => {
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

  const [datas, setDatas] = useState(Novels);
  console.log(content);

  // sort by views

  useEffect(() => {
    if (content === false) {
      Novels.sort(function (a, b) {
        return a.Views - b.Views;
      });
      setDatas([...Novels]);
    } else {
      Novels.sort(function (a, b) {
        return a.Id - b.Id;
      });
      setDatas([...Novels]);
    }
  }, [content]);

  return (
    <SliderMainContainer>
      <SliderLabelContainer>
        <SliderLabelItem>{label}</SliderLabelItem>
      </SliderLabelContainer>
      <SliderContainer>
        <Slider {...settings}>
          {datas.map((data) => {
            return (
              <div key={data.Id} className="min-w-min">
                <Link href={`novel/${data.Id}`} passHref>
                  <Image
                    src={data.Thumbnail}
                    width={240}
                    height={305}
                    alt="/"
                  />
                </Link>
                <ImageContent>{data.Name}</ImageContent>
              </div>
            );
          })}
        </Slider>
      </SliderContainer>
    </SliderMainContainer>
  );
};

export default SliderComponent;
