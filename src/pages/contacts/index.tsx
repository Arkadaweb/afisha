import React from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import ContactsContent from "../../features/contacts/ContactsContent";

const Contacts = () => {

    return (
        <Meta title={'Контакты'}>
            <MainLayout>
                <ContactsContent/>
            </MainLayout>
        </Meta>
    );
};

export default Contacts;
