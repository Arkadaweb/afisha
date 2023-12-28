import React, {FC, PropsWithChildren, useEffect} from 'react';
import Footer from "../components/Footer/Footer";
import MobHeader from "../components/MobHeader/MobHeader";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import {useAppDispatch, useAppSelector} from "../store/store";
import {setCityOpen} from '../store/slices/citySlice'

const MainLayout: FC<PropsWithChildren<any>> = ({
                                                    children,
                                                }) => {

    const {currentCity} = useAppSelector((state: any) => state.city)
    const dispatch = useAppDispatch()

    useEffect(() =>{
        if (!currentCity){
            dispatch(setCityOpen())
        }
    },[currentCity])


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            justifyContent: "space-between"
        }}>
            <MobHeader/>
            <div className="main-block">
                {children}
            </div>
            <Footer/>
            <ScrollToTopButton/>
        </div>
    );
};

export default MainLayout;
