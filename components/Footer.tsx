import React from "react";
import tw from "tailwind-styled-components";
import FooterLogo from "../images/NovelSkyFooter.png";
import FaceBook from "../images/Vector.svg";
import Twitter from "../images/Vector2.svg";
import Youtube from "../images/Vector3.svg";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterContainer = tw.div`
    bg-black
    pt-10
    pb-10

`;

const ContentContainer = tw.div`
    block
    justify-center

    mx-auto
    w-5/6


    xl:flex
    xl:justify-between
    xl:items-center
`;

const FooterContent = tw.div`
    flex
    flex-shrink-0
    w-full
    justify-around
    mx-auto
    flex-wrap
    items-center
    text-center
    mt-2
 

    xl:flex
    xl:justify-between
    xl:w-2/3
    xl:mt-0

`;

const FooterMedia = tw.div`
    flex
    justify-center
    items-center
    mt-4

    xl:justify-between
    xl:mt-0

`;

const FooterContentItem = tw.h3`
    my-3
    text-xs
    text-gray-300
    font-semibold
    block
    min-w-max
    mr-2


    xl:flex
    xl:px-0
    xl:text-sm

`;

const Authorized = tw.h3`
    mt-4
    text-center
    text-gray-300
    text-xs

    xl:mt-10
    xl:text-sm


`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <div className="justify-around relative mx-auto w-max">
          <Image src={FooterLogo} width={144} height={40} alt="/" />
        </div>
        <FooterContent>
          <FooterContentItem>Thể loại</FooterContentItem>
          <FooterContentItem>Về chúng tôi</FooterContentItem>
          <FooterContentItem>Điều khoản sử dụng</FooterContentItem>
          <FooterContentItem>Chính sách bảo mật</FooterContentItem>
          <FooterContentItem>Quyền lợi</FooterContentItem>
          <FooterContentItem>Về bản quyền</FooterContentItem>
        </FooterContent>
        <FooterMedia>
          <FaFacebookF className="text-gray-300  font-semibold text-lg mr-2 "></FaFacebookF>
          <FaTwitter className="text-gray-300  font-semibold text-lg mr-2 "></FaTwitter>
          <FaYoutube className="text-gray-300  font-semibold text-lg "></FaYoutube>
        </FooterMedia>
      </ContentContainer>
      <Authorized>
        © 2021 - Bản quyền thuộc về NovelSky - novelsky.com
      </Authorized>
    </FooterContainer>
  );
};

export default Footer;
