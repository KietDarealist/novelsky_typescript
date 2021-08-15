//Import dependecies
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import { useState } from "react";

//Import icons and images
import { SearchIcon, ChevronDownIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../images/NovelSky.png";
import Ham from "../images/Hambuger.png";

//Import Components
import Infinite from "../components/Infinite";
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const MainContainer = tw.div`
  h-full
  bg-black
  w-full

`;

export const HeroSection = tw.div`
  w-full
  py-5
`;

const BodyContainer = tw.div`

`;

export default function Home() {
  const [ham, setHam] = useState(false);

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
          <Trending />
          <Infinite />
        </MainContainer>
        <Footer />
      </main>
    </>
  );
}
