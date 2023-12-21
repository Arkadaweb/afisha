import React, {FC, PropsWithChildren} from 'react';
import Footer from "../components/Footer/Footer";
import MobHeader from "../components/MobHeader/MobHeader";

const MainLayout: FC<PropsWithChildren<any>> = ({
                                                    children,
                                                }) => {

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
        </div>
    );
};

export default MainLayout;
