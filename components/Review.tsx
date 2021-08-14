import React from "react";
import tw from "tailwind-styled-components";
import { StarIcon } from "@heroicons/react/solid";
import { FlagIcon } from "@heroicons/react/solid";
import LikeIcon from "../lib/icon";
import Avt from "../images/Avt.png";
import Image from "next/image";

const ReviewMainContainer = tw.div`
    
  items-center

`;

const OverviewContainer = tw.div`
  flex
  justify-between
  items-center
    

    
  xl:w-1/4
`;

export const RateContainer = tw.div`
  flex
  items-center
  justify-between
`;

const RateDetailContainer = tw.div`
  flex
    
    
  xl:w-full
  xl:mt-10
  border-t-2
  border-b-2
  border-gray-500


`;

const AspectRateContainer = tw.div`
  block
  w-full
  mt-6


  xl:mt-10
  xl:w-full
`;

const AspcectItem = tw.div`
  justify-between
  w-5/6
    
  md:flex
  xl:w-2/3
`;

const AddCommentContainer = tw.div`
  flex
  w-full
  py-10
  border-l-2
border-gray-500

  md:py-6

  xl:py-10


`;

const AddCommentButton = tw.button`
  bg-orange
  text-white
  font-semibold
  text-xs
  rounded-2xl
  mt-2
  px-2
  py-1
  w-max


  md:px-3
  md:py-1

  xl:text-sm
  xl:mt-3
  xl:px-3
  xl:py-1
`;

const CommentSectionContainer = tw.div`
  my-4
  md:my-6
  xl:my-10
`;

const CommentContainer = tw.div`
  my-5
  items-center

  xl:mt-10

`;

const Comment = tw.div`
  flex
  items-center
`;

const CommentAvt = tw.div`
`;

const CommentContent = tw.div`
  
  w-4/5
  ml-4

  xl:w-3/5
  xl:ml-10
`;

const CommentNameContainer = tw.div`
  flex
  justify-between
  items-center
  w-full

  md:w-2/5
  lg:w-1/3

  xl:w-1/4
`;

const Review = () => {
  return (
    <>
      <ReviewMainContainer>
        <OverviewContainer>
          <h3 className="text-white font-semibold text-xs xl:text-sm ">
            75 đánh giá
          </h3>
          <RateContainer>
            <StarIcon className="h-3 xl:h-4 text-orange" />
            <StarIcon className="h-3 xl:h-4 text-orange" />
            <StarIcon className="h-3 xl:h-4 text-orange" />
            <StarIcon className="h-3 xl:h-4 text-orange" />
            <StarIcon className="h-3 xl:h-4 text-white" />
            <h3 className="text-white font-semibold text-sm xl:text-sm xl:ml-3 md:ml-2 ml-1">
              4.22
            </h3>
          </RateContainer>
        </OverviewContainer>

        <RateDetailContainer>
          <AspectRateContainer>
            <AspcectItem>
              <h3 className="text-white font-semibold text-xs xl:text-sm xl:w-2/3">
                Thiết kế nhân vật
              </h3>
              <div className="flex">
                <StarIcon className="h-3 xl:h-4  text-orange" />
                <StarIcon className="h-3 xl:h-4  text-orange" />
                <StarIcon className="h-3 xl:h-4 text-orange" />
                <StarIcon className="h-3 xl:h-4  text-orange" />
                <StarIcon className="h-3 xl:h-4  text-white" />
              </div>
            </AspcectItem>

            <AspcectItem>
              <h3 className="text-white font-semibold text-xs xl:text-sm xl:w-2/3">
                Bối cảnh
              </h3>
              <div className="flex">
                <StarIcon className="h-3 xl:h-4  text-orange" />
                <StarIcon className="h-3 xl:h-4  text-orange" />
                <StarIcon className="h-3 xl:h-4  text-orange" />
                <StarIcon className="h-3 xl:h-4  text-orange" />
                <StarIcon className="h-3 xl:h-4  text-white" />
              </div>
            </AspcectItem>

            <AspcectItem>
              <h3 className="text-white font-semibold text-xs xl:text-sm xl:w-2/3">
                Cách thiết kế câu truyện
              </h3>
              <div className="flex">
                <StarIcon className="h-3 xl:h-4  text-orange" />
                <StarIcon className="h-3 xl:h-4  text-orange" />
                <StarIcon className="h-3 xl:h-4 text-orange" />
                <StarIcon className="h-3 xl:h-4 text-orange" />
                <StarIcon className="h-3 xl:h-4  text-white" />
              </div>
            </AspcectItem>
          </AspectRateContainer>

          <AddCommentContainer>
            <div className="mx-auto xl:w-1/2 md:w-2/3 w-full justify-center text-center ">
              <h3 className="text-xs text-white font-semibold lg:text-sm ">
                Chia sẻ cảm nghĩ của bạn với những người khác
              </h3>
              <AddCommentButton>Thêm bình luận</AddCommentButton>
            </div>
          </AddCommentContainer>
        </RateDetailContainer>
        <CommentSectionContainer>
          <CommentContainer>
            <Comment>
              <CommentAvt>
                <Image src={Avt} width={40} height={40} alt="/" />
              </CommentAvt>
              <CommentContent>
                <CommentNameContainer>
                  <h3 className="text-white font-semibold text-sm lg:text-lg">
                    Surtin
                  </h3>
                  <h3 className="text-gray-400 font-semibold text-xs md:text-sm">
                    (4 ngày trước)
                  </h3>
                  <FlagIcon className="h-3 xl:h-4 text-gray-400" />
                </CommentNameContainer>
                <div className="flex xl:mt-2 mt-1">
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-white" />
                </div>
                <p className="text-gray-400 text-xs md:text-sm">
                  Damn dudes be complaining about 60 chapters, this novel in
                  original doesnt even allow you to read to 60 for free lol.
                  Also damn dude, this novel is super protected against pirates.
                  There is no site that has the raws beyond the free chapters on
                  the main site. Anybody who knows were the complete raws are
                  after 59, please let a brother know.
                </p>
                <div className="flex items-center mt-2">
                  <LikeIcon />
                  <p className="text-gray-400 text-xs md:text-sm">12</p>
                </div>
              </CommentContent>
            </Comment>
          </CommentContainer>

          <CommentContainer>
            <Comment>
              <CommentAvt>
                <Image src={Avt} width={40} height={40} alt="/" />
              </CommentAvt>
              <CommentContent>
                <CommentNameContainer>
                  <h3 className="text-white font-semibold text-sm lg:text-lg">
                    Surtin
                  </h3>
                  <h3 className="text-gray-400 font-semibold text-xs md:text-sm">
                    (4 ngày trước)
                  </h3>
                  <FlagIcon className="h-3 xl:h-4 text-gray-400" />
                </CommentNameContainer>
                <div className="flex xl:mt-2 mt-1">
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-white" />
                </div>
                <p className="text-gray-400 text-xs md:text-sm">
                  Damn dudes be complaining about 60 chapters, this novel in
                  original doesnt even allow you to read to 60 for free lol.
                  Also damn dude, this novel is super protected against pirates.
                  There is no site that has the raws beyond the free chapters on
                  the main site. Anybody who knows were the complete raws are
                  after 59, please let a brother know.
                </p>
                <div className="flex items-center mt-2">
                  <LikeIcon />
                  <p className="text-gray-400 text-xs md:text-sm">12</p>
                </div>
              </CommentContent>
            </Comment>
          </CommentContainer>

          <CommentContainer>
            <Comment>
              <CommentAvt>
                <Image src={Avt} width={40} height={40} alt="/" />
              </CommentAvt>
              <CommentContent>
                <CommentNameContainer>
                  <h3 className="text-white font-semibold text-sm lg:text-lg">
                    Surtin
                  </h3>
                  <h3 className="text-gray-400 font-semibold text-xs md:text-sm">
                    (4 ngày trước)
                  </h3>
                  <FlagIcon className="h-3 xl:h-4 text-gray-400" />
                </CommentNameContainer>
                <div className="flex xl:mt-2 mt-1">
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-white" />
                </div>
                <p className="text-gray-400 text-xs md:text-sm">
                  Damn dudes be complaining about 60 chapters, this novel in
                  original doesnt even allow you to read to 60 for free lol.
                  Also damn dude, this novel is super protected against pirates.
                  There is no site that has the raws beyond the free chapters on
                  the main site. Anybody who knows were the complete raws are
                  after 59, please let a brother know.
                </p>
                <div className="flex items-center mt-2">
                  <LikeIcon />
                  <p className="text-gray-400 text-xs md:text-sm">12</p>
                </div>
              </CommentContent>
            </Comment>
          </CommentContainer>

          <CommentContainer>
            <Comment>
              <CommentAvt>
                <Image src={Avt} width={40} height={40} alt="/" />
              </CommentAvt>
              <CommentContent>
                <CommentNameContainer>
                  <h3 className="text-white font-semibold text-sm lg:text-lg">
                    Surtin
                  </h3>
                  <h3 className="text-gray-400 font-semibold text-xs md:text-sm">
                    (4 ngày trước)
                  </h3>
                  <FlagIcon className="h-3 xl:h-4 text-gray-400" />
                </CommentNameContainer>
                <div className="flex xl:mt-2 mt-1">
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-orange" />
                  <StarIcon className="h-3 xl:h-4 text-white" />
                </div>
                <p className="text-gray-400 text-xs md:text-sm">
                  Damn dudes be complaining about 60 chapters, this novel in
                  original doesnt even allow you to read to 60 for free lol.
                  Also damn dude, this novel is super protected against pirates.
                  There is no site that has the raws beyond the free chapters on
                  the main site. Anybody who knows were the complete raws are
                  after 59, please let a brother know.
                </p>
                <div className="flex items-center mt-2">
                  <LikeIcon />
                  <p className="text-gray-400 text-xs md:text-sm">12</p>
                </div>
              </CommentContent>
            </Comment>
          </CommentContainer>
        </CommentSectionContainer>
      </ReviewMainContainer>
    </>
  );
};

export default Review;
