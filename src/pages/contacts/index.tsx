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
        <Meta title={'Контакты'} metaData={pageData}>
            <MainLayout>
                <ContactsContent
                  pageData={pageData?.page_fields}
                  title={pageData?.title?.rendered ? pageData?.title?.rendered : 'Направления деятельности'}
                />
            </MainLayout>
        </Meta>
    );
};

export async function getStaticProps(context: any) {

  try {

    const pageData: any = await get(`wp-json/wp/v2/pages/60`);

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
