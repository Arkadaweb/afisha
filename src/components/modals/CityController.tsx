import React, { FC, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react';
import CrossIcon from "../../assets/icons/common/CrossIcon";
import { useUnit } from "effector-react";
import { $cityList, $currentCity, $isOpenCityModal, changeOpenCityModal, setCurrentCity } from "../../models/City";


const CityController: FC<PropsWithChildren<any>> = ({ children }) => {

  const [cities, currentCity, isOpenCityModal] = useUnit([$cityList, $currentCity, $isOpenCityModal])

  return (
    <>
      <div className={`city ${isOpenCityModal ? 'city-visible' : ''}`}>
        <div className="city-wrapper">
          <div className="city-close" onClick={() => changeOpenCityModal(false)}>
            <CrossIcon />
          </div>
          <h3>
            Выберите ваш город
          </h3>
          <div className="city-list">
            {
              cities?.map((item: any) =>
                <div
                  onClick={() => setCurrentCity(item)}
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
