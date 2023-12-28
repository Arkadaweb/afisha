import React from 'react';
import CityIcon from "../../assets/icons/footer/CityIcon";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setCityOpen} from "../../store/slices/citySlice";

const CityDropDown = ({
                          backgroundColor = 'rgba(197, 163, 94, 1)',
                          color = 'rgba(29, 29, 27, 1)',
                          iconColor = 'rgba(29, 29, 27, 1)'
                      }) => {

    const {currentCity} = useAppSelector((state: any) => state.city)
    const dispatch = useAppDispatch()

    const nav: any = [
        {
            id: 1,
            path: '',
            title: 'Главная'
        },
        {
            id: 2,
            path: '',
            title: 'О компании'
        },
        {
            id: 3,
            path: '',
            title: 'Афиша'
        },
        {
            id: 4,
            path: '',
            title: 'Услуги'
        },
        {
            id: 5,
            path: '',
            title: 'Портфолио'
        },
        {
            id: 5,
            path: '',
            title: 'Контакты'
        },
    ]

    const onOpenCity = () => {
        dispatch(setCityOpen())
    }

    const sliceText = (text: any) =>{
        if (text?.length > 7){
            return text.slice(0, 7) + '...'
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
                {sliceText(currentCity)}
            </p>
        </div>
    );
};

export default CityDropDown;
