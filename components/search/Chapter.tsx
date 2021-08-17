import React from "react";
import tw from "tailwind-styled-components";
import { Novels, NovelType, Genre } from "../../lib/store";
import { SearchIcon } from "@heroicons/react/outline";

const ChapterMainContainer = tw.div`
`;

const LatestChapterContainer = tw.div`
  hidden
  justify-between
  items-center
  w-full
  py-2
  border-b-2
  border-gray-600

  md:flex
  md:w-4/5
  md:py-3


  lg:w-3/5
  lg:py-4
`;

const LatesLabel = tw.h3`
  text-gray-300
  text-xs


  xl:text-sm
`;

const LatestName = tw.h3`
  text-orange
  text-xs
  
  xl:text-sm
`;

const LatestTime = tw.div`
 

  xl:flex
xl:text-gray-500
  xl:text-sm
`;

const ChaptersDisplayContainer = tw.div``;

const ChapterSearchingContainer = tw.div`
  
  my-5

  md:my-8
  xl:my-16

`;

const SearchBarContainer = tw.div`

  flex
  justify-between

`;

const SearchBar = tw.input`

  px-4
  py-2
  w-44
  outline-none
  sm:w-64

  rounded-3xl
  bg-gray-800

`;

const PartContainer = tw.div`

  text-gray-100
  text-xs
  font-semibold
  mb-2

  xl:text-lg
  xl:mb-4
  xl:mt-10

`;

const ChapterListContainer = tw.div`
  grid
  grid-cols-1
  gap-x-2
  


  md:gap-x-4
  md:grid-cols-2
`;

const ChapterItem = tw.div`
  flex
  items-center

  my-1
  py-3
  px-1
`;

const ChapterItemIndex = tw.div`

  w-10
  h-8
  mr-2
  text-center

  xl:mr-4

`;

const ChapterItemIndexContent = tw.h3`
  text-sm
  text-gray-100
  font-bold

  xl:text-lg
`;

const ChapterItemInfo = tw.div`

`;

const ChapterItemLabel = tw.h3`
  text-xs
  text-gray-100
  font-semibold

  xl:text-sm

`;

const ChapterItemUpdatedTime = tw.p`
  text-xs
text-gray-500
  font-semibold

  xl:text-xs
`;

interface Props {
  id: number;
}

const Chapter: React.FC<Props> = ({ id }) => {
  let time = 0;
  let length = Novels[id].Chapters.length - 1;
  return (
    <ChapterMainContainer>
      <LatestChapterContainer>
        <LatesLabel>Gần đây:</LatesLabel>
        <LatestName>
          Chương {Novels[id].Chapters[length].Id}
          {" :  "}
          {Novels[id].Chapters[length].Title}
        </LatestName>
        <LatestTime>4 giờ trước</LatestTime>
      </LatestChapterContainer>

      <ChaptersDisplayContainer>
        <ChapterSearchingContainer>
          <SearchBarContainer>
            <div></div>
            <div className="flex items-center">
              <SearchBar placeholder={`Tìm kiếm`} className="text-gray-100" />
              <SearchIcon className="h-4 xl:h-6  font-semibold text-gray-300 z-10 right-8 relative" />
            </div>
          </SearchBarContainer>
        </ChapterSearchingContainer>
        <PartContainer>Phần 1</PartContainer>
        <ChapterListContainer>
          {Novels[id].Chapters.map((Chapter) => {
            if (time === 4) time = 0;
            else time = time + 1;
            if (time === 3) time = 4;
            return (
              <ChapterItem
                key={Chapter.Id}
                className={`${time === 1 || time === 2 ? "" : "bg-black"}`}
              >
                <ChapterItemIndex>
                  <ChapterItemIndexContent>
                    {Chapter.Id}
                  </ChapterItemIndexContent>
                </ChapterItemIndex>
                <ChapterItemInfo>
                  <ChapterItemLabel>{Chapter.Title}</ChapterItemLabel>
                  <ChapterItemUpdatedTime>4 giờ trước</ChapterItemUpdatedTime>
                </ChapterItemInfo>
              </ChapterItem>
            );
          })}
        </ChapterListContainer>
      </ChaptersDisplayContainer>
    </ChapterMainContainer>
  );
};

export default Chapter;
