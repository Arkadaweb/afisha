import React, {FC, PropsWithChildren} from 'react';
import {Input} from "antd";
import SearchIcon from "../../assets/icons/footer/SearchIcon";

const CustomInput: FC<PropsWithChildren<any>> = ({
                                                     backgroundColor,
                                                     color,
                                                     placeholderColor = 'rgba(29, 29, 27, 1)',
                                                     iconColor = ''
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
