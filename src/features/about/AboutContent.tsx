import React, { FC, PropsWithChildren } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import Image from "next/dist/client/legacy/image";
import aboutMainImg from '../../../public/about-main.png'
import TeamSlider from "./components/TeamSlider";
import PartnerSlider from "../../components/common/PartnerSlider";
import LettersSlider from "./components/LettersSlider";
import DirectionItem from "../direction/components/DirectionItem";
import GoldButton from "../../components/common/GoldButton";
import LeaveMessageBlock from "../../components/common/LeaveMessageBlock";
import StarItem from "./components/StarItem";

const AboutContent: FC<PropsWithChildren<any>> = ({
                                                    title
                                                  }) => {


  const breadCrumbs = [
    {
      id: 1,
      path: '/',
      title: 'Главная'
    },
    {
      id: 2,
      path: '/',
      title: title
    },
  ]

  return (
    <MaxWithLayout isPaddingTop={true}>
      <BreadCrumbs elements={breadCrumbs} />

      <div className="about">
        <h1>
          {title}
        </h1>
        <div className="about-intro-img">
          <Image
            src={aboutMainImg}
            // layout={'fill'}
            // objectFit={'cover'}
            // objectFit={'fill'}
            objectFit={'cover'}
            layout="fill"
          />
        </div>
        <div className="about-desc">
          <h2>
            История компании
          </h2>
          <div className="about-desc-p">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate
            </p>
          </div>
        </div>

        <div className="about-team">
          <TeamSlider />
        </div>

        <div className="about-work-with-us">
          <PartnerSlider />
        </div>

        <div className="about-letters">
          <LettersSlider />
        </div>

        <div className="about-directions">
          <h2>
            Направления деятельности
          </h2>
          <div className="about-directions-items">
            <DirectionItem />
            <DirectionItem />
            <DirectionItem />
            <DirectionItem />
          </div>
        </div>

        <div className="about-stars">
          <h2>
            Звезды, с которыми мы работали
          </h2>
          <div className="about-stars-items">
            <StarItem />
            <StarItem />
            <StarItem />
            <StarItem />
            <StarItem />
            <StarItem />
          </div>
          <div className="about-stars-button">
            <GoldButton
              title={'Показать ещё'}
              padding={'16px 30px'}
            />
          </div>
        </div>

        <div className="about-questions">
          <LeaveMessageBlock />
        </div>
      </div>

    </MaxWithLayout>
  );
};

export default AboutContent;
