import React from 'react';
import CityIcon from "../../assets/icons/footer/CityIcon";

const CityDropDown = ({
                          backgroundColor = 'rgba(197, 163, 94, 1)',
                          color = 'rgba(29, 29, 27, 1)',
                          iconColor = 'rgba(29, 29, 27, 1)'
                      }) => {
    return (
        <div
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
                Тюмень
            </p>
        </div>
    );
};

export default CityDropDown;
