import React from 'react';
import CityIcon from "../../assets/icons/footer/CityIcon";
import {useAppDispatch, useAppSelector} from "../../store/store";
import { useUnit } from "effector-react";
import { $cityList, $currentCity, $isOpenCityModal, changeOpenCityModal } from "../../models/City";

const CityDropDown = ({
                          backgroundColor = 'rgba(231, 207, 126, 1)',
                          color = 'rgba(29, 29, 27, 1)',
                          iconColor = 'rgba(29, 29, 27, 1)'
                      }) => {

    const [currentCity] = useUnit([$currentCity])

    const onOpenCity = () => {
        changeOpenCityModal(true)
    }

    const sliceText = (text: any) =>{
        if (text?.length > 7){
            return text?.slice(0, 7) + '...'
        } else {
            return text
        }
    }

    return (
        <div
            onClick={onOpenCity}
            className="city-drop-down"
            style={{
                backgroundColor,
            }}
        >
            <CityIcon color={iconColor}/>
            <p
                style={{
                    color
                }}
            >
                {sliceText(currentCity?.name)}
            </p>
        </div>
    );
};

export default CityDropDown;
