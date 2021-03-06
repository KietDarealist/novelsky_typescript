import React from "react";
import tw from "tailwind-styled-components";
import Header from "../../components/home/Header";
import Head from "next/head";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Footer from "../../components/home/Footer";
import { DirectionContainer, DirectionItem } from "../search";
import { Categories } from "../../lib/store";
import { Novels } from "../../lib/store";
import FilterReturned from "../../components/kind/FilterReturned";

const MainSearchContainer = tw.div`
  w-full
  flex
  flex-col
bg-secondary
  px-4

  xl:flex

`;

const LeftContainer = tw.div`

  w-full



  xl:w-1/4

`;

const CategoryBodyContainer = tw.div`

  px-4
  mt-4

  xl:flex
  xl:mt-10
  xl:px-36
`;

const WatchMoreLabel = tw.h2`
    
text-gray-100
  font-bold
  mt-4
    


  xl:text-2xl
`;

const GenderChangeContainer = tw.div`
  flex
  mt-6
    

  xl:mt-10
`;

const GenderChangeItem = tw.div`
  px-2
  py-1
text-white
  font-bold
  w-max
  text-center
  rounded-lg
  cursor-pointer

  xl:w-2/5


`;

const CategoryList = tw.div`
  mt-10
  grid
  grid-cols-2

  xl:justify-between
   
`;

const CategoryListItem = tw.button`
  px-2 
  py-1
  my-2
  text-sm
text-gray-100
  font-semibold
  text-center
  cursor-pointer
  mx-auto
  rounded-lg
  w-32


  xl:w-3/4
    
`;

const RightContainer = tw.div`
  w-full

  xl:w-3/4
`;

const CategoryDescripContainer = tw.div`
bg-black
  w-full
  rounded-md
  px-3
  py-3
  mt-4
`;

const CategoryDescriptionLabel = tw.h3`
text-gray-100
  font-bold



  xl:text-3xl
`;

const CategoryDescriptionContent = tw.p`
text-gray-400
  text-xs
    

  xl:mt-5
  xl:text-sm
  xl:ml-2
`;

const FilterContainer = tw.div`
  mt-10
  xl:mt-0
`;

const FilterLabel = tw.div`

  text-xl
text-gray-100
  font-bold
  border-b-2
border-line
  pb-4

  xl:mt-16
`;

const FilterButtonsContainer = tw.div`
  flex
  flex-wrap


  xl:w-max
  xl:mt-4
`;

const FilterButton = tw.button`
  flex-wrap 
  w-max
  text-xs
  rounded-2xl
  px-3
  py-2
  mr-2
  mt-2

  xl:text-sm

`;

const CategoryPage = () => {
  const [kind, setKind] = useState<string>("All");

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NovelSky-T??m ki???m</title>
      </Head>
      <MainSearchContainer>
        <Header />
        <DirectionContainer>
          <DirectionItem>Trang ch???</DirectionItem>
          <ChevronRightIcon className="h-3 xl:h-4 text-gray-100 font-semibold" />
          <DirectionItem>Th??? lo???i</DirectionItem>
          <ChevronRightIcon className="h-3 xl:h-4 text-gray-100 font-semibold" />
          <DirectionItem>H??nh ?????ng</DirectionItem>
        </DirectionContainer>

        <CategoryBodyContainer>
          <LeftContainer>
            <WatchMoreLabel>Th??? lo???i</WatchMoreLabel>
            <GenderChangeContainer>
              <GenderChangeItem className="bg-orange">Cho nam</GenderChangeItem>
              <GenderChangeItem className="bg-darkRed">Cho n???</GenderChangeItem>
            </GenderChangeContainer>

            <CategoryList>
              <CategoryListItem
                onClick={() => setKind("All")}
                className={`${kind === "All" ? "bg-orange" : ""}`}
              >
                T???t c???
              </CategoryListItem>
              {Categories.map((category) => {
                if (category.Type === "Men")
                  return (
                    <CategoryListItem
                      key={category.Id}
                      onClick={() => setKind(category.Text)}
                      className={`${category.Text === kind ? "bg-orange" : ""}`}
                    >
                      {category.Text}
                    </CategoryListItem>
                  );
              })}
            </CategoryList>
          </LeftContainer>

          <RightContainer>
            <CategoryDescripContainer>
              <CategoryDescriptionLabel>
                {kind ? kind : ""}
              </CategoryDescriptionLabel>
              <CategoryDescriptionContent>
                Th??? lo???i n??y th?????ng c?? n???i dung v??? ????nh nhau, b???o l???c, h???n lo???n,
                v???i di???n bi???n nhanh
              </CategoryDescriptionContent>
            </CategoryDescripContainer>

            <FilterContainer>
              <FilterLabel>L???c theo</FilterLabel>
              <FilterButtonsContainer>
                <FilterButton className="text-lightRed bg-darkRed">
                  T???t c???
                </FilterButton>
                <FilterButton className="bg-gray-500 text-gray-300">
                  ???? ho??n th??nh
                </FilterButton>
                <FilterButton className="bg-gray-500 text-gray-300">
                  ??ang ti???n h??nh
                </FilterButton>
              </FilterButtonsContainer>
            </FilterContainer>

            <FilterContainer>
              <FilterLabel>S???p x???p theo</FilterLabel>
              <FilterButtonsContainer>
                <FilterButton className="bg-gray-500 text-gray-300">
                  Ph??? bi???n
                </FilterButton>
                <FilterButton className="bg-gray-500 text-gray-300">
                  ????nh gi??
                </FilterButton>
                <FilterButton className="bg-gray-500 text-gray-300">
                  S??? t???p
                </FilterButton>
                <FilterButton className="bg-gray-500 text-gray-300">
                  Th???i gian c???p nh???t
                </FilterButton>
                <FilterButton className="bg-gray-500 text-gray-300">
                  L?????t theo d??i
                </FilterButton>
              </FilterButtonsContainer>
            </FilterContainer>

            <FilterReturned kind={kind} Novels={Novels} />
          </RightContainer>
        </CategoryBodyContainer>
      </MainSearchContainer>
      <Footer />
    </>
  );
};

export default CategoryPage;
