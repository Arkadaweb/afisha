import React, { FC, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react';
import CrossIcon from "../../assets/icons/common/CrossIcon";
import { useUnit } from "effector-react";
import { $cityList, $currentCity, $isOpenCityModal, changeOpenCityModal, setCurrentCity } from "../../models/City";
import { useRouter } from "next/router";


const CityController: FC<PropsWithChildren<any>> = ({ children }) => {

  const router = useRouter();
  const [cities, currentCity, isOpenCityModal] = useUnit([$cityList, $currentCity, $isOpenCityModal])

  const onChooseCity = (item: any) =>{
    router.reload()
    setCurrentCity(item)
  }

  const onCLose = () =>{
    changeOpenCityModal(false)
    setCurrentCity(currentCity || cities[0] || null)
    router.reload()
  }


  return (
    <>
      <div className={`city ${isOpenCityModal ? 'city-visible' : ''}`}>
        <div className="city-wrapper">
          <div className="city-close" onClick={onCLose}>
            <CrossIcon />
          </div>
          <h3>
            Выберите ваш город
          </h3>
          <div className="city-list">
            {
              cities?.map((item: any) =>
                <div
                  onClick={() => onChooseCity(item)}
                  className='city-list-item'
                  style={{
                    color: currentCity?.id !== item?.id ? 'rgba(203, 159, 102, 1)' : 'rgba(226, 209, 175, 1)'
                  }}
                >
                  {item?.name}
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

export { CityController };
