//Import dependencies
import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";

//Import data from lib
import { Novels } from "../../lib/store";

const MainContainer = tw.div`
  py-10
  px-2
  xl:py-20
  xl:px-0

`;

const InfinitiContainer = tw.div`
  grid
  grid-cols-2
  gap-x-4
  gap-y-6
  px-2


  md:grid-cols-3
  md:gap-y-10
  md:gap-x-4


  lg:grid-cols-4

  xl:grid-cols-5
  xl:px-36

`;

const InfinitieItem = tw.div`
  flex
  flex-col
  cursor-pointer


`;

const LoadButton = tw.button`

  flex
  mx-auto
  items-center
  justify-center
bg-orange
hover:bg-red-600
text-white
  text-center
  font-semibold
  text-sm
  w-40
  h-8
  mt-6
  py-1
    
  md:mt-10
  md:w-44


  lg:w-60

  xl:h-10
  xl:w-72
  xl:px-10


`;

const Infinite = () => {
  return (
    <MainContainer>
      <InfinitiContainer>
        {Novels.map((novel) => {
          if (novel.Id > 1) {
            return (
              <InfinitieItem key={novel.Id}>
                <Image src={novel.Thumbnail} width={216} height={305} alt="/" />
                <h3 className="text-xs mt-1 lg:text-sm text-white font-semibold">
                  {novel.Name}
                </h3>
              </InfinitieItem>
            );
          }
        })}

        {Novels.map((novel) => {
          if (novel.Id > 1) {
            return (
              <InfinitieItem key={novel.Id}>
                <Image src={novel.Thumbnail} width={216} height={305} alt="/" />
                <h3 className="text-xs mt-1 lg:text-sm text-white font-semibold">
                  {novel.Name}
                </h3>
              </InfinitieItem>
            );
          }
        })}

        {Novels.map((novel) => {
          if (novel.Id > 1) {
            return (
              <InfinitieItem key={novel.Id}>
                <Image src={novel.Thumbnail} width={216} height={305} alt="/" />
                <h3 className="text-xs mt-1 lg:text-sm text-white font-semibold">
                  {novel.Name}
                </h3>
              </InfinitieItem>
            );
          }
        })}
      </InfinitiContainer>

      <LoadButton>Xem thêm</LoadButton>
    </MainContainer>
  );
};

export default Infinite;
