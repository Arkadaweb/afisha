import React, {FC, PropsWithChildren} from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import AboutContent from "../../features/about/AboutContent";
import { get } from "../../api/request";

const About: FC<PropsWithChildren<any>> = ({
                                             pageData
                                           }) => {

    return (
        <Meta title={'О компании'} metaData={pageData}>
            <MainLayout>
                <AboutContent title={pageData?.title?.rendered ? pageData?.title?.rendered : 'О компании'}/>
            </MainLayout>
        </Meta>
    );
};

export async function getStaticProps(context: any){

  try {
    const pageData: any = await get(`wp-json/wp/v2/pages/44`);

    return {
      props: {
        pageData: pageData
      },
      revalidate: 60,
    }
  } catch (e: any) {
    return {
      props: {
        pageData: {}
      },
      revalidate: 60,
    }
  }
}

export default About;
