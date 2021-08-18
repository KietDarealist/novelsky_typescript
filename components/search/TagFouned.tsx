import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { Novels } from "../../lib/store";
import Image from "next/image";
import { GenreButton } from "../home/Banner";
import { StarIcon } from "@heroicons/react/solid";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";

const TagFoundedContainer = tw.div`
  mt-10

  xl:mt-10

`;

const TagFounedHead = tw.div`
  flex
  justify-between
  items-center
  w-2/5

  md:w-2/5

  lg:w-2/5


  xl:w-1/5
`;

const TagFounedLabel = tw.div`
  text-orange
  text-sm

  md:text-lg

  lg:text-xl

  xl:text-2xl
`;

const TagFoundedAmount = tw.div`
text-gray-500
  text-sm

  md:text-lg

  lg:text-xl

  xl:text-2xl
`;

const TagFoundedThumbnailContainer = tw.div`
  grid
  grid-cols-6
  gap-x-4
  mt-6


  md:mt-8

  xl:mt-10
  xl:gap-x-4
`;

const TagFoundedThumbnailItem = tw.div`
`;

const FoundedList = tw.div`
  mt-6
    

  md:mt-8


  xl:mt-10
`;

const FoundedListItem = tw.div`

  
  flex
  items-center
  w-full


  my-2

  md:my-3

  lg:my-4

  xl:my-5
`;

const FoundedListContent = tw.div`
    
  w-1/2

  ml-2
  md:ml-4 
  lg:ml-8 
  xl:ml-10
   
`;

interface Props {
  keyword: string;
}

const TagFouned: React.FC<Props> = ({ keyword }) => {
  let count = 0;

  const [founded, setFouned] = useState(count);

  useEffect(() => {
    setFouned(count);
  }, [count, keyword]);

  return (
    <>
      <TagFoundedContainer>
        <TagFounedHead>
          <TagFounedLabel>#{keyword}</TagFounedLabel>
          <TagFoundedAmount>{founded}</TagFoundedAmount>
        </TagFounedHead>

        <TagFoundedThumbnailContainer>
          {Novels.map((Novel) => {
            let confirm = 0;
            {
              Novel.Genres.map((genre) => {
                if (genre.Text.toLowerCase().includes(keyword)) {
                  confirm = 1;
                }
              });
            }
            if (confirm === 1) {
              count++;
              return (
                <TagFoundedThumbnailItem key={Novel.Id}>
                  <Image
                    src={Novel.Thumbnail}
                    width={130}
                    height={180}
                    alt="/"
                  />
                  <h3 className="text-xs lg:text-sm font-semibold text-gray-100">
                    {Novel.Name}
                  </h3>
                </TagFoundedThumbnailItem>
              );
            }
          })}
        </TagFoundedThumbnailContainer>

        <FoundedList>
          <TagFoundedAmount className="xl:mb-10 lg:mb-8 md:mb-6 mb-4">
            {" "}
            {count} kết quả tìm thấy
          </TagFoundedAmount>
          {Novels.map((Novel) => {
            let confirm = 0;
            {
              Novel.Genres.map((genre) => {
                if (genre.Text.toLowerCase().includes(keyword)) confirm = 1;
              });
              {
              }
            }
            if (confirm === 1) {
              return (
                <FoundedListItem>
                  <Image
                    src={Novel.Thumbnail}
                    width={110}
                    height={160}
                    alt="/"
                    layout="intrinsic"
                  />
                  <FoundedListContent>
                    <h3 className="xl:text-xl xl:h-1/5 lg:text-lg md:text-sm text-xs font-semibold text-gray-100">
                      {Novel.Name}
                    </h3>
                    <div className="flex mt-2 md:mt-3 xl:mt-4 flex-wrap">
                      {Novel.Genres.map((genre) => {
                        return (
                          <GenreButton className="xl:mr-2 mt-1" key={genre.Id}>
                            {genre.Text}
                          </GenreButton>
                        );
                      })}
                    </div>
                    <div className="flex mt-2 md:mt-3 xl:mt-4">
                      <StarIcon className="h-3 xl:h-4 text-orange" />
                      <StarIcon className="h-3 xl:h-4 text-orange" />
                      <StarIcon className="h-3 xl:h-4 text-orange" />
                      <StarIcon className="h-3 xl:h-4 text-orange" />
                      <StarIcon className="h-3 xl:h-4 text-gray-100" />
                    </div>
                    <div className={styles.limittext}>{Novel.Description}</div>
                  </FoundedListContent>
                </FoundedListItem>
              );
            }
          })}
        </FoundedList>
      </TagFoundedContainer>
    </>
  );
};

export default TagFouned;
