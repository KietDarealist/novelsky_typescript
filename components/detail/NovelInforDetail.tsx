//Import dependencies
import React from "react";
import tw from "tailwind-styled-components";

//Import GenreType
import { Genre } from "../../lib/store";

//Import icon
import { ChevronDownIcon } from "@heroicons/react/outline";

interface Props {
  content: string;
  Genres: Genre[];
}

export const DetailInfoContainer = tw.div`

`;

export const DetailNavContainer = tw.div`
  flex
  justify-between
  items-center
  w-full
  text-sm

  md:w-1/2
  md:text-lg
  lg:w-1/3
  xl:w-1/4

`;

export const DetailNavLabel = tw.h3`
  text-lg
  cursor-pointer

  xl:text-2xl


`;

const DetailContentContainer = tw.div`
`;

const DetailContentDescriptionLabel = tw.h4`
  text-lg
  text-gray-200
  font-semibold
  mb-6
`;

const DetailContentDescription = tw.p`
  text-sm
  text-gray-300
  font-semibold
  mb-4
  w-full

  xl:w-1/2
`;

const NovelInforDetail: React.FC<Props> = ({ content, Genres }) => {
  return (
    <>
      <DetailContentContainer>
        <DetailContentDescriptionLabel>Nội dung</DetailContentDescriptionLabel>
        <DetailContentDescription className="text-sm text-gray-300 font-semibold mb-4 w-full xl:w-1/2">
          {" "}
          {content}
        </DetailContentDescription>
        <div className="flex items-center mb-6">
          <p className="text-sm text-gray-200 font-semibold mb-2 mr-2">
            Xem thêm
          </p>
          <ChevronDownIcon className="h-4 text-gray-200 font-semibold xl:mb-1"></ChevronDownIcon>
        </div>
        <h4 className="text-lg text-gray-200 font-semibold mb-6">Tags</h4>
        <div>
          <div className="flex items-center justify-between flex-wrap xl:w-1/4 lg:w-1/3 md:w-1/2  ">
            {Genres.map((genre) => {
              return (
                <button
                  key={genre.Id}
                  className="px-3 py-2 mt-2 w-max rounded-2xl bg-darkRed text-lightRed text-xs xl:text-sm"
                >
                  {genre.Text}
                </button>
              );
            })}
          </div>
        </div>
      </DetailContentContainer>
    </>
  );
};

export default NovelInforDetail;
