//Import dependecies
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import { useState } from "react";

//Import Components
import SliderComponent from "../components/home/Slider";
import Banner from "../components/home/Banner";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Infinite from "../components/home/Infinite";

export const MainContainer = tw.div`
  h-full
  bg-black
  w-full

`;

export const HeroSection = tw.div`
  w-full
  py-5
`;

const NavOnSlider = tw.div`
  flex
  justify-between
  w-1/2
  items-center
  pt-4
  text-gray-400
  font-bold
  px-4


  md:w-1/3
  md:pt-6
  md:px-8

  lg:w-1/4
  lg:pt-10
  lg:px-12


  xl:pt-14
  xl:w-1/3
  xl:px-36
`;

const NavOnSliderItem = tw.div`
  text-sm
  pb-2
  cursor-pointer
`;

export default function Home() {
  const [slide, setSlide] = useState<string>("Truyện nổi bật trong tuần");
  const [slideContent, setSlideContent] = useState<boolean>(true);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Next App</title>
      </Head>
      <main>
        {/*Whole Container for HomePage*/}
        <MainContainer className={styles.main}>
          {/*Container including header and banner*/}
          <HeroSection className={styles.maincontain}>
            {/*HeaderContainer*/}
            <Header />

            {/*Adding Banner Component*/}
            <Banner />
          </HeroSection>
          <NavOnSlider>
            <NavOnSliderItem
              onClick={() => {
                setSlide("Truyện nổi bật trong tuần");
                setSlideContent(true);
              }}
              className={`${
                slide === "Truyện nổi bật trong tuần"
                  ? "border-b-2 border-orange text-orange"
                  : ""
              }`}
            >
              Phổ biến
            </NavOnSliderItem>
            <NavOnSliderItem
              onClick={() => {
                setSlide("Truyện được xem nhiều");
                setSlideContent(false);
              }}
              className={`${
                slide === "Truyện được xem nhiều"
                  ? "border-b-2 border-orange text-orange"
                  : ""
              }`}
            >
              Nhiều view
            </NavOnSliderItem>
          </NavOnSlider>
          <SliderComponent label={slide} content={slideContent} />
          <Infinite />
        </MainContainer>
        <Footer />
      </main>
    </>
  );
}
