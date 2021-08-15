import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import Link from "next/link";

//Import icons and images
import { SearchIcon, ChevronDownIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../images/NovelSky.png";
import Ham from "../images/Hambuger.png";
import { useState } from "react";

export const HamMenu = tw.div`
  absolute
  top-0
  bottom-0
  left-0
  w-1/2
  h-screen
  bg-black
  text-white
  z-10



  lg:hidden
`;
const HeaderContainer = tw.div`
  flex
  items-center
  justify-between

  px-4

  md:px-10

  lg:px-16

  xl:px-36
`;
export const HeaderLeft = tw.div`

  hidden
  items-center
  justify-between
  w-1/2


  lg:flex
  xl:w-1/3
`;

export const HeaderRight = tw.div`
  hidden
  items-center
  justify-between
  w-1/2


  md:w-1/2
  lg:flex
  lg:w-2/5
  xl:w-1/3
  2xl:w-1/4
`;

export const NavItem = tw.div`
  flex
  items-center
  text-white;
  text-xs
  font-semibold
  cursor-pointer
`;

export const LoginButton = tw.button`
  px-
  py-2
  bg-line
  text-white
  rounded-md
  w-24
  
  hover:bg-gray-700

`;

export const LogOutButton = tw.button`
  px-4
  py-2

  text-white
  bg-orange
  hover:bg-red-600
  rounded-md
  w-24
`;

export const MobileContainer = tw.div`
  flex
  w-3/5
  justify-between
  lg:hidden
  pl-4



  md:w-1/2
`;

const Header = () => {
  const [ham, setHam] = useState(false);
  return (
    <HeaderContainer>
      {/*For  Mobile*/}
      <MobileContainer>
        <Image
          src={Ham}
          className="flex lg:hidden cursor-pointer"
          width={26}
          height={26}
          alt="/"
          onClick={() => setHam(true)}
        />
        <Link href="/" passHref>
          <Image src={Logo} width={70} height={20} alt="/" />
        </Link>
      </MobileContainer>
      <HamMenu
        className={`${ham === true ? "flex flex-col pl-4 pt-4" : "hidden"}`}
      >
        <NavItem className="mb-4">
          <p className="text-sm font-semibold text-white hover:text-red-500">
            Thể loại
          </p>
        </NavItem>
        <NavItem className="mb-4">
          <p className="text-sm font-semibold text-white hover:text-red-500">
            Sáng tác
          </p>
        </NavItem>
        <NavItem className="mb-4">
          <p className="text-sm font-semibold text-white hover:text-red-500">
            Thư viện
          </p>
        </NavItem>
        <NavItem className="mb-4">
          <p className="text-sm font-semibold text-white hover:text-red-500">
            Đăng nhập
          </p>
        </NavItem>
        <NavItem className="mb-4">
          <p className="text-sm font-semibold text-white hover:text-red-500">
            Đăng ký
          </p>
        </NavItem>
        <Link href="/" passHref>
          <NavItem className="mb-4">
            <p className="text-sm font-semibold text-white hover:text-red-500">
              Quay lại
            </p>
          </NavItem>
        </Link>
        <NavItem className="mb-4 items-center" onClick={() => setHam(false)}>
          <XIcon className="h-4 text-white text-sm hover:text-red-500" />
        </NavItem>
      </HamMenu>
      {/*End Mobile Menu*/}

      {/*For Desktop*/}
      {/*Letf of Header*/}
      <HeaderLeft>
        <Link href="/" passHref>
          <Image
            src={Logo}
            width={144}
            height={40}
            alt="/"
            className="cursor-pointer"
          />
        </Link>
        <NavItem>
          <p className="text-sm font-semibold text-white">Thể loại</p>
          <ChevronDownIcon className="h-5 text-white font-semibold ml-2" />
        </NavItem>
        <NavItem>
          <p className="text-sm font-semibold text-white">Sáng tác</p>
        </NavItem>
        <NavItem>
          <p className="text-sm font-semibold text-white">Thư viện</p>
        </NavItem>
      </HeaderLeft>

      {/*Right of Header*/}
      <HeaderRight>
        <NavItem>
          <p className="text-sm font-semibold text-white">Thể loại</p>
          <SearchIcon className="h-5 text-white font-semibold ml-2" />
        </NavItem>
        <NavItem>
          <LoginButton>Đăng nhập</LoginButton>
        </NavItem>
        <NavItem>
          <LogOutButton>Đăng kí</LogOutButton>
        </NavItem>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
