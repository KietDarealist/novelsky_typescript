import React from "react";
import tw from "tailwind-styled-components";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Genre } from "../lib/store";
import Review from "../components/Review";
import TrendingForDetail from "../components/TrendingForDetail";
import Trending from "./Trending";

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

const NovelInforDetail: React.FC<Props> = ({ content, Genres }) => {
  return (
    <>
      <DetailContentContainer>
        <h4 className="text-lg text-gray-200 font-semibold mb-6">Nội dung</h4>
        <p className="text-sm text-gray-300 font-semibold mb-4 w-full xl:w-1/2">
          {" "}
          {content}
        </p>
        <div className="flex items-center mb-6">
          <p className="text-sm text-gray-200 font-semibold mb-2 mr-2">
            Xem thêm
          </p>
          <ChevronDownIcon className="h-4 text-gray-200 font-semibold xl:mb-1"></ChevronDownIcon>
        </div>
        <h4 className="text-lg text-gray-200 font-semibold mb-6">Tags</h4>
        <div className="flex items-center justify-between xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
          {Genres.map((genre) => {
            return (
              <button
                key={genre.Id}
                className="px-3 py-2 rounded-2xl bg-darkRed text-lightRed text-sm"
              >
                {genre.Text}
              </button>
            );
          })}
        </div>
      </DetailContentContainer>
    </>
  );
};

export default NovelInforDetail;
