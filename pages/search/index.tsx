import React from "react";
import tw from "tailwind-styled-components";
import Header from "../../components/Header";

const MainSearchContainer = tw.div`
    w-full
    bg-secondary
    h-screen
    pt-5

`;

const DirectionContainer = tw.div`
`;

const SearchBodyContainer = tw.div`
    w-4/5
`;

const SearchPage = () => {
  return (
    <MainSearchContainer>
      <Header />
    </MainSearchContainer>
  );
};

export default SearchPage;
