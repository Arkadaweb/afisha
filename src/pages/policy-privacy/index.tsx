import React, {FC, PropsWithChildren} from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import PolicyPrivacyContent from "../../features/policy-privacy/PolicyPrivacyContent";
import {api, get} from "../../api/request";

const PolicyPrivacy: FC<PropsWithChildren<any>> = ({

                                                   }) => {

    return (
        <Meta title={'Политика конфидецеальности'}>
            <MainLayout>
                <PolicyPrivacyContent/>
            </MainLayout>
        </Meta>
    );
};


export default PolicyPrivacy;
