import React, {FC, PropsWithChildren, useState} from 'react';
import Slider from "react-slick";
import ArrowToLeftIcon from "../../../assets/icons/common/ArrowToLeftIcon";
import Image from "next/dist/client/legacy/image";

import testImage from '../../../../public/test-slide-img.png'

const SliderCustom: FC<PropsWithChildren<any>> = ({
                                                      elements
                                                  }) => {


    const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

    let slider: any;

    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
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


    const slides = [1,2,3,4,5,6]

    return (
        <div className="slider-content">
            <Slider ref={(c) => (slider = c)} {...settings} beforeChange={handleBeforeChange}>
                {
                    slides?.map((item: any) =>
                        <div className="slider-content-item">
                            <Image
                                // layout={'fill'}
                                src={testImage}
                                objectFit="contain"
                                width={undefined}
                                height={undefined}
                            />
                        </div>
                    )
                }
            </Slider>
            <div className="slider-content-arrows">
                <button
                    className={`slider-content-arrows-left ${isPrevButtonDisabled ? 'disabled' : ''}`}
                    onClick={goToPrev}
                    disabled={isPrevButtonDisabled}
                >
                    <ArrowToLeftIcon/>
                </button>
                <button
                    className={`slider-content-arrows-right ${isNextButtonDisabled ? 'disabled' : ''}`}
                    onClick={goToNext}
                    disabled={isNextButtonDisabled}
                >
                    <ArrowToLeftIcon/>
                </button>
            </div>
        </div>
    );
};

export default SliderCustom;
