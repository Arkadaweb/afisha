import React, {FC, PropsWithChildren} from 'react';
import {Input} from "antd";
import SearchIcon from "../../assets/icons/footer/SearchIcon";
import Link from "next/link";

const CustomInput: FC<PropsWithChildren<any>> = ({
                                                     backgroundColor = 'rgba(231, 207, 126, 1)',
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
            <Link href={'/search'}>
               <SearchIcon color={iconColor}/>
            </Link>
        </div>
    );
};

export default CustomInput;
