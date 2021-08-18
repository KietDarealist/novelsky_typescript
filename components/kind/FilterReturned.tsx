import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { NovelType } from "../../lib/store";
import Image from "next/image";
import { StarIcon, DocumentTextIcon } from "@heroicons/react/solid";
import styles from "../../styles/Home.module.css";

const FilterReturnedContainer = tw.div`
  md:grid
  grid-cols-2
  mt-10
  mb-16


  lg:grid
  lg:grid-cols-3
  lg:gap-x-2

  xl:grid
  xl:grid-cols-2
  xl:gap-x-4
  xl:gap-y-4
  xl:mb-32
`;

const FilterReturnedItem = tw.div` 
  flex
  items-center
  object-contain
    

  w-full

`;

const FilterReturnedItemContent = tw.div`
  ml-3

`;

const FilterReturnedItemName = tw.h3`
  flex
  flex-wrap
  w-52
text-gray-100
  break-words
  font-bold
  h-1/3
  text-xs

  md:w-max

  lg:w-56

  xl:w-max
  xl:text-sm
`;

const FilterReturnedItemTags = tw.div`
  flex 
  flex-wrap
  h-1/4
`;

const FilterReturnedItemTag = tw.h3`
  text-xs
text-orange
  font-semibold
  block
    
    


  xl:mr-2
  xl:text-xs
    
`;

const FilterReturnedDes = tw.p`

   

`;

const FilterReturnRating = tw.div`

  flex
  justify-between
  items-center
  h-1/6

  xl:w-1/4
`;

interface Props {
  Novels: NovelType[];
  kind: string;
}

const FilterReturned: React.FC<Props> = ({ Novels, kind }) => {
  let confirm = 0;
  return (
    <>
      <FilterReturnedContainer>
        {Novels.map((Novel) => {
          Novel.Genres.map((genre) => {
            if (genre.Text.includes(kind) || kind === "All") {
              confirm = 1;
            }
          });

          if (confirm === 1)
            return (
              <FilterReturnedItem key={Novel.Id}>
                <Image
                  src={Novel.Thumbnail}
                  width={130}
                  height={180}
                  alt="/"
                  objectFit="contain"
                />
                <FilterReturnedItemContent>
                  <FilterReturnedItemName>{Novel.Name}</FilterReturnedItemName>
                  <FilterReturnedItemTags>
                    {Novel.Genres.map((genre) => {
                      return (
                        <FilterReturnedItemTag key={genre.Id}>
                          #{genre.Text}
                        </FilterReturnedItemTag>
                      );
                    })}
                  </FilterReturnedItemTags>
                  <FilterReturnedDes className={styles.limittext2}>
                    {Novel.Description}
                  </FilterReturnedDes>

                  <FilterReturnRating>
                    <div className="flex items-center">
                      <StarIcon className="h-3 text-gray-400 mr-1" />
                      <h3 className="text-xs text-gray-400">{Novel.Rate}</h3>
                    </div>
                    <div className="flex items-center">
                      <DocumentTextIcon className="h-3 text-gray-400 mr-1" />
                      <h3 className="text-xs text-gray-400">
                        {Novel.Chapters.length}
                      </h3>
                    </div>
                  </FilterReturnRating>
                </FilterReturnedItemContent>
              </FilterReturnedItem>
            );
        })}
      </FilterReturnedContainer>
    </>
  );
};

export default FilterReturned;
