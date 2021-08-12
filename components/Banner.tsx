import React from "react";
import Thumbnail from "../images/Thumbnail.png";
import { useState } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import {
  DocumentTextIcon,
  EyeIcon,
  ArrowRightIcon,
} from "@heroicons/react/outline";

//Import Image
import Thumbnail1 from "../images/Thumbnail1.png";
import Thumbnail2 from "../images/Thumbnail2.png";
import Thumbnail3 from "../images/Thumbnail3.png";
import Thumbnail4 from "../images/Thumbnail4.png";
import Thumbnail5 from "../images/Thumbnail5.png";

export interface Genre {
  Id: number;
  Text: string;
}

export interface NovelType {
  Id: number;
  Name: string;
  Description: string;
  Thumbnail: StaticImageData;
  Views: number;
  Chapter: number;
  Genres: Genre[];
}

export const Novels: NovelType[] = [
  {
    Id: 1,
    Name: "Genius Mage in a Cultivation World",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail,
    Views: 1000,
    Chapter: 12,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
  {
    Id: 2,
    Name: "Genius Mage in a Cultivation World",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail2,
    Views: 1000,
    Chapter: 12,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
  {
    Id: 3,
    Name: "Genius Mage in a Cultivation World",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail3,
    Views: 1000,
    Chapter: 12,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
  {
    Id: 4,
    Name: "Genius Mage in a Cultivation World",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail4,
    Views: 1000,
    Chapter: 12,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
  {
    Id: 5,
    Name: "Genius Mage in a Cultivation World",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail5,
    Views: 1000,
    Chapter: 12,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
  {
    Id: 6,
    Name: "Genius Mage in a Cultivation World",
    Description:
      "Layns life was relative simple. Married to a princess, working as the top of the country...Everything would be greate if he never learned that his wife was actually cheating on him!\n Instead of gettings his revenge, he put up with the humilination. For three long years. Three long years... ",
    Thumbnail: Thumbnail1,
    Views: 1000,
    Chapter: 12,
    Genres: [
      {
        Id: 1,
        Text: "Drama",
      },
      {
        Id: 2,
        Text: "Fanstatic",
      },
      {
        Id: 3,
        Text: "Romance",
      },
    ],
  },
];

const BannerContainer = tw.div`
    flex
    flex-col
    items-center
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

const BannerContent = tw.div`

    w-5/6
    mx-auto


    xl:w-1/2


`;

const BannerName = tw.h1`
    hidden


  xl:text-white
    xl:font-semibold
    xl:text-3xl
    xl:text-left

`;
const BannerViewsContainer = tw.div`
    flex
    items-center
    justify-between
    w-5/6
    mt-4

    md:w-1/3
    lg:w-1/3
    xl:mt-10
    xl:w-2/3
`;

const BannerViewsItem = tw.div`
    flex
    items-center
`;

const BannerViewsContent = tw.p`
  text-white
    font-semibold
    text-xs

    xl:text-sm

`;

const GenreButton = tw.button`
  bg-red-900
  text-red-600
    rounded-xl
    px-1
    py-1
    text-xs
    w-16



    xl:text-sm
    xl:w-20
    xl:px-2
`;

const GenreContainer = tw.div`
    hidden



    md:flex
    md:w-1/3
    md:items-center
    md:justify-between
    md:mt-4


    lg:w-1/3
    xl:mt-10
    xl:w-2/3

`;

const DescritionContainer = tw.h3`
    mt-4
    text-gray-100
    text-xs
    break-words


    xl:text-sm
    xl:mt-10
`;

const ReadButton = tw.button`
    hidden

    md:flex
    md:px-2
    md:py-1
    md:mt-4
    md:text-xs
    md:items-center
  md:bg-red-700
  md:text-white
    md:font-semibold
    md:rounded-3xl


    xl:px-4
    xl:py-2
    xl:mt-10
    xl:text-sm
    xl:w-32


`;

const ThumbnailContainer = tw.div`
    mt-6
    grid
    grid-cols-5
    px-8
    mx-auto

    md:px-20
    xl:px-20
    xl:w-5/6

`;
const ThumbnailItem = tw.div`
    w-5/6
    h-full
    cursor-pointer
    object-contain


    xl:w-44
    xl:h-36
    
`;

const Banner = () => {
  const [data, setData] = useState(Novels);
  const [index, setIndex] = useState<number>();
  return (
    <>
      <BannerContainer>
        <Image
          src={data[0].Thumbnail}
          width={338}
          objectFit="contain"
          height={450}
          alt="/"
        />
        <BannerContent>
          {/* Name of the Novel */}
          <BannerName>{data[0].Name}</BannerName>

          {/*Amount Chapters and Views*/}
          <BannerViewsContainer>
            <BannerViewsItem>
              <DocumentTextIcon className="h-5 mr-1 text-white" />
              <BannerViewsContent>{data[0].Chapter} Chương</BannerViewsContent>
            </BannerViewsItem>
            <BannerViewsItem>
              <EyeIcon className="h-5 mr-1 text-white" />
              <BannerViewsContent>{data[0].Views} Lượt xem</BannerViewsContent>
            </BannerViewsItem>
          </BannerViewsContainer>

          {/*Genres*/}

          <GenreContainer>
            {data[0].Genres.map((genre) => {
              return <GenreButton key={genre.Id}>{genre.Text}</GenreButton>;
            })}
          </GenreContainer>

          {/*Description*/}
          <DescritionContainer>{data[0].Description}</DescritionContainer>

          <ReadButton>
            Đọc ngay
            <ArrowRightIcon className="ml-2 h-5 font-semibold" />
          </ReadButton>
        </BannerContent>
      </BannerContainer>

      <ThumbnailContainer>
        <ThumbnailItem>
          <Image
            src={Thumbnail1}
            width={160}
            objectFit="fill"
            height={100}
            alt="/"
            className="blur-xl"
          />
        </ThumbnailItem>
        <ThumbnailItem>
          <Image
            src={Thumbnail2}
            width={160}
            objectFit="fill"
            height={100}
            alt="/"
            className="blur-xl"
          />
        </ThumbnailItem>
        <ThumbnailItem>
          <Image
            src={Thumbnail3}
            width={160}
            objectFit="fill"
            height={100}
            alt="/"
            className="blur-xl"
          />
        </ThumbnailItem>
        <ThumbnailItem>
          <Image
            src={Thumbnail4}
            width={160}
            objectFit="fill"
            height={100}
            alt="/"
            className="blur-xl"
          />
        </ThumbnailItem>
        <ThumbnailItem>
          <Image
            src={Thumbnail5}
            width={160}
            objectFit="fill"
            height={100}
            alt="/"
            className="blur-xl"
          />
        </ThumbnailItem>
      </ThumbnailContainer>
    </>
  );
};

export default Banner;
