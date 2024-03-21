import React, { FC, PropsWithChildren } from "react";
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import PolicyPrivacyContent from "../../features/policy-privacy/PolicyPrivacyContent";
import { get } from "../../api/request";

const Rules: FC<PropsWithChildren<any>> = ({
                                                     pageData
                                                   }) => {

  return (
    <Meta title={'Политика конфидецеальности'} metaData={pageData}>
      <MainLayout>
        <PolicyPrivacyContent pageData={pageData}/>
      </MainLayout>
    </Meta>
  );
};

export async function getStaticProps(context: any){

  try {
    const pageData: any = await get(`wp-json/wp/v2/pages?template=sales_rules`);

    return {
      props: {
        pageData: pageData && pageData?.length !== 0 && pageData[0]
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

export default Rules;
