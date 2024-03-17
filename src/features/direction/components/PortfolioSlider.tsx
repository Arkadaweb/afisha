import React, { FC, PropsWithChildren, useState } from 'react';
import Slider from "react-slick";
import ArrowToRight from "../../../assets/icons/slider/ArrowToRight";
import ArrowToLeft from "../../../assets/icons/slider/ArrowToLeft";
import PortfolioItem from "../../portfolio/components/PortfolioItem";

const PortfolioSlider: FC<PropsWithChildren<any>> = ({
                                                       slides
                                                     }) => {


  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  let slider: any;

  const settings = {
    infinite: true,
    slidesToShow: slides?.length > 3 ? 3 : slides?.length,
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
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
          Наше портфолио
        </h2>
        {
          slides?.length > 3 &&
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

      <Slider ref={(c) => (slider = c)} {...settings} beforeChange={handleBeforeChange}>
        {
          slides?.map((item: any) =>
            <div className="slider-verticle-item" id={item?.id}>
              <PortfolioItem item={item}/>
            </div>
          )
        }
      </Slider>

    </div>
  );
};

export default PortfolioSlider;
