import React, {FC, PropsWithChildren, useContext, useEffect, useRef, useState} from 'react';
import {Checkbox, Form, Input, message} from "antd";
import Link from "next/link";
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "../../store/store";
import CrossIcon from "../../assets/icons/common/CrossIcon";
import {setCityOpen, setCity, setCityClose} from "../../store/slices/citySlice";


const CityController: FC<PropsWithChildren<any>> = ({children}) => {

    const {isOpen, currentCity} = useAppSelector(state => state.city)
    const dispatch = useAppDispatch()

    const onClose = () => {
        dispatch(setCityClose())
    }

    const onChooseCity = (item: any) => {
        dispatch(setCity(item))
        dispatch(setCityClose())
    }

    const citys = [
        'Тюмень',
        'Сургут',
        'Нижневартовск',
    ]

    return (
        <>
            <div className={`city ${isOpen ? 'city-visible' : ''}`}>
                <div className="city-wrapper">
                    <div className="city-close" onClick={onClose}>
                        <CrossIcon/>
                    </div>
                    <h3>
                        Выберите ваш город
                    </h3>
                    <div className="city-list">
                        {
                            citys?.map((item: any) =>
                                <div
                                    onClick={() => onChooseCity(item)}
                                    className='city-list-item'
                                    style={{
                                        color: currentCity !== item ? 'rgba(203, 159, 102, 1)' : 'rgba(226, 209, 175, 1)'
                                    }}
                                >
                                    {item}
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
            {children}
        </>

    );
};

export {CityController};
