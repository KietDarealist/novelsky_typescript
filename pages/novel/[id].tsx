//Import dependecies
import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { GetStaticProps, GetStaticPaths, GetStaticPropsResult } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FlagIcon } from "@heroicons/react/solid";
import Chapter from "../../components/Chapter";

//Import Data
import { Novels, NovelType } from "../../lib/store";

//Import Components....
import { MainContainer, HeroSection } from "../index";
import {
  BannerChildContainer,
  BannerContent,
  BannerName,
  GenreButton,
  GenreContainer,
  DescriptionContainer,
  ReadButton,
} from "../../components/Banner";
import {
  DetailInfoContainer,
  DetailNavLabel,
  DetailNavContainer,
} from "../../components/NovelInforDetail";
import Footer from "../../components/Footer";
import NovelInforDetail from "../../components/NovelInforDetail";
import TrendingForDetail from "../../components/TrendingForDetail";
import Review from "../../components/Review";
import { RateContainer } from "../../components/Review";
import Header from "../../components/Header";

//Import Images and Logo
import Ham from "../../images/Hambuger.png";
import { SearchIcon, ChevronDownIcon, XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Logo from "../../images/NovelSky.png";
import { DocumentTextIcon, EyeIcon } from "@heroicons/react/outline";

//Import styles
import styles from "../../styles/Home.module.css";

//Interface for Props type
interface Props {
  Novel: NovelType;
}

//Add id type of PasedUrlQuery
interface IdParams extends ParsedUrlQuery {
  id: string;
}

//FollowButton
const FollowButton = tw.button`
  px-2
  py-1
  bg-darkRed
  text-lightRed
  rounded-2xl
  text-xs
  w-max
  

  xl:text-sm
  xl:px-3
  xl:py-2

`;

//Including amount Views and Chapter of Novel
const BannerViewsContainer = tw.div`
  flex
  items-center
  justify-between
  w-full
  mt-4

  md:w-1/2
  lg:w-1/3
  xl:mt-4
  xl:w-2/3
`;

//Views - Chapter
const BannerViewsItem = tw.div`
  flex
  items-center
`;

//Text of Views and Chapter
const BannerViewsContent = tw.div`
text-white
  font-semibold
  text-xs

  xl:text-sm
`;

//Set the responsive padding for components
const DetailBodyContainer = tw.div`

  px-4
  py-6


  md:px-12
  md:py-8


  lg:px-16
  lg:py-8

  xl:px-36
  xl:py-10


`;

const InfoContainer = tw.div`


`;

const ChapterContainer = tw.div`

`;

const SingleDetailPage: React.FC<Props> = ({ Novel }) => {
  const [ham, setHam] = useState(false);

  const [chapterOn, setChapterOn] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{Novel.Name} - NovelSky</title>
      </Head>
      <main>
        {/*Whole Container for HomePage*/}
        <MainContainer className={styles.main}>
          {/*Hero Section including Header and Banner*/}
          <HeroSection className={styles.maincontain}>
            {/*HeaderContainer*/}

            <Header />

            {/*End of Header*/}

            {/*Adding Banner Component*/}
            <BannerChildContainer className="pb-10">
              <Image
                src={Novel.Thumbnail}
                width={338}
                objectFit="contain"
                height={450}
                alt="/"
              />
              <BannerContent>
                {/* Name of the Novel */}
                <BannerName>{Novel.Name}</BannerName>
                {/*Amount Chapters and Views*/}
                <BannerViewsContainer>
                  <BannerViewsItem>
                    <DocumentTextIcon className="h-5 mr-1 text-white" />
                    <BannerViewsContent>
                      {Novel.Chapter} Chương
                    </BannerViewsContent>
                  </BannerViewsItem>
                  <BannerViewsItem>
                    <EyeIcon className="h-5 mr-1 text-white" />
                    <BannerViewsContent>
                      {Novel.Views} Lượt xem
                    </BannerViewsContent>
                  </BannerViewsItem>
                </BannerViewsContainer>

                <BannerViewsContainer>
                  <BannerViewsItem>
                    <BannerViewsContent>
                      Tác giả: {Novel.Author}
                    </BannerViewsContent>
                  </BannerViewsItem>
                  <BannerViewsItem>
                    <BannerViewsContent>|</BannerViewsContent>
                  </BannerViewsItem>
                  <BannerViewsItem>
                    <BannerViewsContent>
                      {`${
                        Novel.Status === true
                          ? "Đã hoàn thành"
                          : "Đang cập nhật"
                      }`}
                    </BannerViewsContent>
                  </BannerViewsItem>
                </BannerViewsContainer>
                {/*Genres*/}
                <GenreContainer>
                  {Novel.Genres.map((genre) => {
                    return (
                      <GenreButton key={genre.Id}>{genre.Text}</GenreButton>
                    );
                  })}
                </GenreContainer>
                {/*Point and Rating*/}
                <div className="flex justify-between items-center h-28 md:w-1/3 xl:h-1/6 xl:mb-14 xl:w-1/2">
                  <div className="flex">
                    <StarIcon className="h-4 xl:h-5 text-orange" />
                    <StarIcon className="h-4 xl:h-5 text-orange" />
                    <StarIcon className="h-4 xl:h-5 text-orange" />
                    <StarIcon className="h-4 xl:h-5 text-orange" />
                    <StarIcon className="h-4 xl:h-5 text-white" />
                  </div>
                  <div className="flex">
                    <h3 className="text-white font-semibold text-xs md:text-sm xl:text-sm xl:ml-3 md:ml-2 ml-1">
                      4.22
                    </h3>
                    <h3 className="text-white font-semibold text-xs md:text-sm xl:text-sm xl:ml-3 md:ml-2 ml-1">
                      (75 đánh giá)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center">
                  <ReadButton>Đọc</ReadButton>
                  <FollowButton className="ml-2 xl:ml-4">Theo dõi</FollowButton>
                </div>
                <div className="flex items-center mt-4 xl:mt-6">
                  <FlagIcon className="text-gray-400 h-3 mr-2 xl:h-4" />
                  <p className="text-gray-400 text-xs xl:text-sm">
                    Báo vi phạm
                  </p>
                </div>
              </BannerContent>
            </BannerChildContainer>
          </HeroSection>
          {/*End of Hero Section*/}

          {/*Body of detail page*/}

          {/*Add NovelInfoDetail Component*/}
          <DetailBodyContainer>
            <DetailInfoContainer>
              <DetailNavContainer>
                <DetailNavLabel
                  className={`${
                    chapterOn === false
                      ? "border-b-4 border-orange text-orange"
                      : "text-gray-300"
                  }`}
                  onClick={() => setChapterOn(false)}
                >
                  Thông tin
                </DetailNavLabel>
                <DetailNavLabel
                  className={`${
                    chapterOn === true
                      ? "border-b-4 border-orange text-orange"
                      : "text-gray-300"
                  }`}
                  onClick={() => setChapterOn(true)}
                >
                  Các chương
                </DetailNavLabel>
              </DetailNavContainer>
            </DetailInfoContainer>
          </DetailBodyContainer>

          <InfoContainer
            className={`${chapterOn === false ? "block" : "hidden"}`}
          >
            <DetailBodyContainer>
              <NovelInforDetail
                content={Novel.Description}
                Genres={Novel.Genres}
              />
            </DetailBodyContainer>
            {/*Add Trending Container*/}
            <TrendingForDetail />
            {/*Add Review Component*/}
            <DetailBodyContainer>
              <Review />
            </DetailBodyContainer>
          </InfoContainer>

          <ChapterContainer className={`${chapterOn === true ? "" : "hidden"}`}>
            <DetailBodyContainer>
              <Chapter id={Novel.Id} />
            </DetailBodyContainer>
          </ChapterContainer>

          {/*Add Footer*/}
          <Footer />
        </MainContainer>
      </main>
    </>
  );
};

export const getNovelIds = () => {
  return Novels.map((novel) => ({
    params: {
      id: `${novel.Id}`,
    },
  }));
};

export const getNovelById = (id: string) => {
  return Novels[parseInt(id)];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getNovelIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<Props>> => {
  const { id } = context.params as IdParams;
  const Novel: NovelType = getNovelById(id);
  return {
    props: {
      Novel,
    },
  };
};

export default SingleDetailPage;
