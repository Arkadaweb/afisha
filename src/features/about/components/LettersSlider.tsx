import React, { FC, PropsWithChildren, useState } from 'react';
import slide1 from "../../../public/slide1.jpg";
import slide2 from "../../../public/slide2.png";
import slide3 from "../../../public/slide3.png";
import Slider from "react-slick";
import partnerImg from "../../../public/partner-img.png";
import ArrowToRight from "../../../assets/icons/slider/ArrowToRight";
import ArrowToLeft from "../../../assets/icons/slider/ArrowToLeft";
import Image from "next/dist/client/legacy/image";
import grammaImg from '../../../../public/gramma.png'
import directionImg from "../../../../public/direction-img.png";
import {Modal} from "antd";

const LettersSlider: FC<PropsWithChildren<any>> = ({
                           slides
                       }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (imageSrc: any) => {
        setCurrentImage(imageSrc);
        setModalVisible(true);
    };

    const closeModal = () => {
        setCurrentImage(null);
        setModalVisible(false);
    };


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

    return (
        <div className="slider-verticle">

            <div className="slider-verticle-top">
                <h2>
                    Благодарственные письма
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
                    slides?.items?.map((item: any) =>
                        <div className="slider-verticle-item" id={item.id} onClick={() => openModal(item?.image_link)}>
                            <Image
                                src={item?.image_link}
                                objectFit={'contain'}
                                layout="responsive"
                                width={70}
                                height={100}
                            />
                        </div>
                    )
                }
            </Slider>

            <Modal
                visible={modalVisible}
                onCancel={closeModal}
                footer={null}
                bodyStyle={{padding: 0}}
                centered
            >
                <div className="modal-wrap-img">
                    {currentImage &&
                    <img
                        src={currentImage}
                    />
                    }
                </div>

            </Modal>
        </div>
    );
};

export default LettersSlider;
