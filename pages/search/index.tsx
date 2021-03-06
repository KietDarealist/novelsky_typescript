import React from "react";
import tw from "tailwind-styled-components";
import Header from "../../components/home/Header";
import Head from "next/head";
import { ChevronRightIcon, SearchIcon } from "@heroicons/react/outline";
import TagFouned from "../../components/search/TagFouned";
import { useState } from "react";
import Footer from "../../components/home/Footer";

const MainSearchContainer = tw.div`
  w-full
bg-secondary
  px-4
  py-2
`;

export const DirectionContainer = tw.div`
  flex
  items-center
  w-max
  
  px-4




  md:px-8


  lg:px-16


  xl:px-36
`;

export const DirectionItem = tw.div`
  flex
  text-gray-100
  text-xs
  font-semibold


`;

const SearchBodyContainer = tw.div`
  mt-10
  px-4

  md:px-20

  lg:px-40

  xl:px-80
  xl:mt-10
`;

const SearchInput = tw.input`
  w-full
  mx-auto
  outline-none
    
  xl:h-12


`;

const SearchPage = () => {
  const [input, setInput] = useState("");

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.currentTarget.value.toLowerCase());
    console.log(input);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NovelSky-Tìm kiếm</title>
      </Head>
      <MainSearchContainer>
        <Header />
        <DirectionContainer>
          <DirectionItem>Trang chủ</DirectionItem>
          <ChevronRightIcon className="h-3 xl:h-4 text-gray-100 font-semibold mx-3.5" />
          <DirectionItem>Tìm kiếm</DirectionItem>
          <ChevronRightIcon className="h-3 xl:h-4 text-gray-100 font-semibold mx-3.5" />
          <DirectionItem>Từ khóa {input}</DirectionItem>
        </DirectionContainer>
        <SearchBodyContainer>
          <div className="flex items-center border-b-2 border-line">
            <SearchIcon className="h-5 xl:h-6 text-gray-500 " />
            <form>
              <SearchInput
                placeholder="Tìm kiếm tên novel"
                className="bg-secondary ml-2 text-gray-100"
                value={input}
                type="text"
                onChange={onInputChange}
              />
            </form>
          </div>
          <TagFouned keyword={input} />
        </SearchBodyContainer>
      </MainSearchContainer>
      <Footer />
    </>
  );
};

export default SearchPage;
