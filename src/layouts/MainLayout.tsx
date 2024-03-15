import React, { FC, PropsWithChildren, useEffect } from 'react';
import Footer from "../components/Footer/Footer";
import MobHeader from "../components/MobHeader/MobHeader";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import { $cityList, $currentCity, $isOpenCityModal, changeOpenCityModal } from "../models/City";
import { useUnit } from "effector-react";


const MainLayout: FC<PropsWithChildren<any>> = ({
                                                  children,
                                                }) => {

  const [currentCity] = useUnit([$currentCity])

  useEffect(() => {
    if (!currentCity?.name) {
      changeOpenCityModal(true)
    }
  }, [currentCity?.name])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      minHeight: '100vh',
      justifyContent: "space-between"
    }}>
      <MobHeader />
      <div className="main-block">
        {children}
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
