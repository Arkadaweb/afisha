import React, { FC, PropsWithChildren } from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import ContactsContent from "../../features/contacts/ContactsContent";
import { get } from "../../api/request";

const Contacts: FC<PropsWithChildren<any>> = ({
                                                pageData
                                              }) => {

  console.log('pageData')
  console.log(pageData)

  return (
        <Meta title={'Контакты'}>
            <MainLayout>
                <ContactsContent pageData={pageData}/>
            </MainLayout>
        </Meta>
    );
};

export async function getStaticProps(context: any) {

  try {

    const pageData: any = await get(`wp-json/afisha-rest-api/v1/page/contacts`);
    console.log(pageData)

    return {
      props: {
        pageData: pageData,
      },
      revalidate: 60,
    }
  } catch (e: any) {
    return {
      props: {
        pageData: {},
      },
      revalidate: 60,
    }
  }
}

export default Contacts;
