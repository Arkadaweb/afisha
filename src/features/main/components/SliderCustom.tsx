import React, {FC, PropsWithChildren, useState} from 'react';
import Slider from "react-slick";
import ArrowToLeftIcon from "../../../assets/icons/common/ArrowToLeftIcon";
import Image from "next/dist/client/legacy/image";

import testImage from '../../../../public/test-slide-img.png'
import slide2 from '../../../../public/slide2.png'
import slide3 from '../../../../public/slide3.png'
import slide1 from '../../../../public/slide1.jpg'
import slide4 from '../../../../public/slide4.jpg'
import Link from "next/link";

const SliderCustom: FC<PropsWithChildren<any>> = ({
                                                      slides
                                                  }) => {

    console.log(slides)
    console.log(slides)

    const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

    let slider: any;

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        loop: true,
        // autoplay: true,
        autoplaySpeed: 5000,
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
    //     {
    //         id: 1,
    //         src: slide1
    //     },
    //     // {
    //     //         //     id: 2,
    //     //         //     src: slide2
    //     //         // },
    //     {
    //         id: 3,
    //         src: slide3
    //     },
    //     {
    //         id: 4,
    //         src: slide4
    //     },
    // ]

    return (
        <div className="slider-content">
            <Slider ref={(c) => (slider = c)} {...settings} beforeChange={handleBeforeChange}>
                {
                    slides?.map((item: any) =>
                        <Link href={`afisha/${item.attached_page?.slug}`} className="slider-content-item" id={item.slug}>
                            <Image
                                src={item.slider_image}
                                objectFit={'contain'}
                                layout="responsive"
                                width={100}
                                height={39}
                            />
                        </Link>
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
