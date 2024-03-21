import React, { FC, PropsWithChildren, useState } from 'react';
import slide1 from "../../../public/slide1.jpg";
import slide2 from "../../../public/slide2.png";
import slide3 from "../../../public/slide3.png";
import Slider from "react-slick";
import Image from "next/dist/client/legacy/image";
import ArrowToLeftIcon from "../../assets/icons/common/ArrowToLeftIcon";
import PartnerItem from "./PartnerItem";
import partnerImg from "../../../public/partner-img.png";
import ArrowToRight from "../../assets/icons/slider/ArrowToRight";
import ArrowToLeft from "../../assets/icons/slider/ArrowToLeft";

const PartnerSlider: FC<PropsWithChildren<any>> = ({
                                                     slides
                                                   }) => {


  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  let slider: any;

  const settings = {
    infinite: true,
    slidesToShow: slides?.items?.length >= 4 ? 4 : slides?.items?.length || 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

  const goToNext = () => {
    slider.slickNext();
  };

  const goToPrev = () => {
    slider.slickPrev();
  };

  const handleBeforeChange = (oldIndex: any, newIndex: any) => {
    setIsPrevButtonDisabled(newIndex === 0);
    setIsNextButtonDisabled(newIndex === slider?.props?.children?.length - 1);
  };


  return (
    <div className="slider-verticle">
      <div className="slider-verticle-top">
        <h2>
          {slides?.title}
        </h2>
        {slides?.items?.length > 4 &&
        <div className="slider-verticle-top-buttons">
            <button
                className={`slider-verticle-top-buttons-left ${isPrevButtonDisabled ? 'disabled' : ''}`}
                onClick={goToPrev}
                disabled={isPrevButtonDisabled}
            >
                <ArrowToLeft />
            </button>
            <button
                className={`slider-verticle-top-buttons-right ${isNextButtonDisabled ? 'disabled' : ''}`}
                onClick={goToNext}
                disabled={isNextButtonDisabled}
            >
                <ArrowToRight />
            </button>
        </div>
        }

      </div>

      {slides?.items?.length < 4
        ?
        <div className="slider-verticle-grid">
          {
            slides?.items?.map((item: any) =>
              <div className="slider-verticle-item" id={item.id}>
                <PartnerItem img={item?.image_link} href={item?.partner_link}/>
              </div>
            )
          }
        </div>
        :<Slider ref={(c) => (slider = c)} {...settings} beforeChange={handleBeforeChange}>
          {
            slides?.items?.map((item: any) =>
              <div className="slider-verticle-item" id={item.id}>
                <PartnerItem img={item?.image_link} href={item?.partner_link}/>
              </div>
            )
          }
        </Slider>
      }


    </div>
  );
};

export default PartnerSlider;
