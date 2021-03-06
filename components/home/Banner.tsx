import React from "react";
import { useState } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import {
  DocumentTextIcon,
  EyeIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { Novels } from "../../lib/store";

export const BannerChildContainer = tw.div`
  flex
  flex-col
  h-full
  mx-auto
  w-full
  mt-8
  px-0

  md:flex-col
  xl:flex-row
  xl:w-5/6
  xl:justify-between
  xl:mt-20
  xl:px-20
`;

export const BannerContent = tw.div`
  w-5/6
  mx-auto


  xl:w-1/2
`;

export const BannerName = tw.h1`
  hidden


xl:text-white
  xl:font-semibold
  xl:text-3xl
  xl:text-left
  xl:block
  xl:h-1/5

`;
export const BannerViewsContainer = tw.div`
  flex
  items-center
  justify-between
  w-5/6
  mt-4

  md:w-1/3
  lg:w-1/3
  xl:w-2/3
`;

export const BannerViewsItem = tw.div`
  flex
  items-center
`;

export const BannerViewsContent = tw.p`
text-white
  font-semibold
  text-xs

  xl:text-sm

`;

export const GenreButton = tw.button`
  bg-darkRed
  text-lightRed
  rounded-xl
  px-1
  py-1
  text-xs
  w-max



  xl:text-sm
  xl:px-2
  xl:w-24
`;

export const GenreContainer = tw.div`
  hidden



  md:flex
  md:w-2/5
  md:h-16
  md:items-center
  md:justify-between


  lg:w-1/3
  lg:h-28
  xl:w-3/4
  xl:h-1/6

`;

export const DescriptionContainer = tw.h3`
  mt-2
text-gray-100
  text-xs
  break-words
  h-64

  sm:h-44
  
  md:h-32

  xl:h-2/5
  xl:text-sm
`;

export const ReadButton = tw.button`
  flex
  px-2
  py-1
  text-xs
  items-center
bg-orange
text-white
  font-semibold
  rounded-3xl

  md:flex
  md:px-2
  md:py-1
  md:text-xs
  md:items-center
md:bg-orange
md:text-white
  md:font-semibold
  md:rounded-3xl


  xl:px-4
  xl:py-2
  xl:text-sm


`;

const ThumbnailContainer = tw.div`
  mt-6
  grid
  grid-cols-5
  px-8
  mx-auto
  gap-x-1

  md:px-20
  md:gap-x-4
  xl:px-20
  xl:w-5/6
  xl:gap-x-2
  xl:mt-16

`;
const ThumbnailItem = tw.div`
  flex
  cursor-pointer
  object-cover
  h-full

  lg:w-max
  xl:w-max


    
`;

const Banner = () => {
  const [data, setData] = useState(Novels);
  const [index, setIndex] = useState<number>(0);
  return (
    <>
      <BannerChildContainer>
        <Image
          src={data[index].Thumbnail}
          width={338}
          objectFit="contain"
          height={450}
          alt="/"
        />
        <BannerContent>
          {/* Name of the Novel */}
          <BannerName>{data[index].Name}</BannerName>

          {/*Amount Chapters and Views*/}
          <BannerViewsContainer>
            <BannerViewsItem>
              <DocumentTextIcon className="h-5 mr-1 text-white" />
              <BannerViewsContent>
                {data[index].Chapter} Ch????ng
              </BannerViewsContent>
            </BannerViewsItem>
            <BannerViewsItem>
              <EyeIcon className="h-5 mr-1 text-white" />
              <BannerViewsContent>
                {data[index].Views} L?????t xem
              </BannerViewsContent>
            </BannerViewsItem>
          </BannerViewsContainer>

          {/*Genres*/}

          <GenreContainer>
            {data[index].Genres.map((genre) => {
              return <GenreButton key={genre.Id}>{genre.Text}</GenreButton>;
            })}
          </GenreContainer>

          {/*Description*/}
          <DescriptionContainer>{data[index].Description}</DescriptionContainer>
          <Link href={`/novel/${data[index].Id}`} passHref>
            <ReadButton>
              ?????c ngay
              <ArrowRightIcon className="ml-2 h-5 font-semibold" />
            </ReadButton>
          </Link>
        </BannerContent>
      </BannerChildContainer>

      <ThumbnailContainer>
        {Novels.map((novel) => {
          if (novel.Id > 0) {
            return (
              <ThumbnailItem
                className={`${
                  novel.Id === index ? "border-b-4 border-orange" : ""
                }`}
              >
                <Image
                  key={novel.Id}
                  src={novel.Thumbnail}
                  width={120}
                  height={170}
                  alt="/"
                  objectFit="contain"
                  onClick={() => setIndex(novel.Id)}
                />
              </ThumbnailItem>
            );
          }
        })}
      </ThumbnailContainer>
    </>
  );
};

export default Banner;
