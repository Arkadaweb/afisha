import React, {FC, PropsWithChildren} from 'react';
import {Input} from "antd";
import SearchIcon from "../../assets/icons/footer/SearchIcon";

const CustomInput: FC<PropsWithChildren<any>> = ({
                                                     backgroundColor = 'rgba(197, 163, 94, 1)',
                                                     color = 'rgba(29, 29, 27, 1)',
                                                     placeholderColor = 'dark',
                                                     iconColor = '#1D1D1B'
                                                 }) => {
    return (
        <div className={`input ${placeholderColor === 'light' && 'input-light'}`}>
            <Input
                style={{
                    backgroundColor,
                    color,
                }}
                placeholder={'Поиск по сайту'}
            />
            <span>
               <SearchIcon color={iconColor}/>
            </span>
        </div>
    );
};

export default CustomInput;
