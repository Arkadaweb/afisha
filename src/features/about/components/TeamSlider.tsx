import React, { FC, PropsWithChildren, useState } from 'react';
import slide1 from "../../../../public/slide1.jpg";
import slide2 from "../../../../public/slide2.png";
import slide3 from "../../../../public/slide3.png";
import ArrowToLeft from "../../../assets/icons/slider/ArrowToLeft";
import ArrowToRight from "../../../assets/icons/slider/ArrowToRight";
import Slider from "react-slick";
import PartnerItem from "../../../components/common/PartnerItem";
import partnerImg from "../../../../public/partner-img.png";
import PersonItem from "./PersonItem";

const TeamSlider: FC<PropsWithChildren<any>>  = ({
                        slides
                    }) => {
    const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

    let slider: any;

    const settings = {
        infinite: true,
        slidesToShow: 4,
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


    // const slides = [
    {/*    {*/}
    {/*        id: 1,*/}
    {/*        src: slide1*/}
    {/*    },*/}
    {/*    {*/}
    {/*        id: 2,*/}
    //         src: slide2
    //     },
    //     {
    {/*        id: 3,*/}
    //         src: slide3
    //     },
    //     {
    //         id: 4,
    //         src: slide3
    //     },
    //     {
    //         id: 5,
    //         src: slide3
    //     },
    // ]

    return (
        <div className="slider-verticle">

            <div className="slider-verticle-top">
                <h2>
                    Наша команда
                </h2>
                <div className="slider-verticle-top-buttons">
                    <button
                        className={`slider-verticle-top-buttons-left ${isPrevButtonDisabled ? 'disabled' : ''}`}
                        onClick={goToPrev}
                        disabled={isPrevButtonDisabled}
                    >
                        <ArrowToLeft/>
                    </button>
                    <button
                        className={`slider-verticle-top-buttons-right ${isNextButtonDisabled ? 'disabled' : ''}`}
                        onClick={goToNext}
                        disabled={isNextButtonDisabled}
                    >
                        <ArrowToRight/>
                    </button>
                </div>
            </div>

            <Slider ref={(c) => (slider = c)} {...settings} beforeChange={handleBeforeChange}>
                {
                    slides?.map((item: any) =>
                        <div className="slider-verticle-item" id={item.id}>
                            <PersonItem item={item}/>
                        </div>
                    )
                }
            </Slider>

        </div>
    );
};

export default TeamSlider;
