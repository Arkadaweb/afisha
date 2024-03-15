import React, { FC, PropsWithChildren, useEffect } from 'react';
import { get, post } from "../api/request";
import { setContacts } from "../models/Contacts";
import { setCityList } from "../models/City";

const FetchStartProvider: FC<PropsWithChildren<any>> = ({ children }) => {

  useEffect(() => {
    post('wp-json/afisha-rest-api/v1/footer_contact')
      .then((response: any) =>{
        setContacts(response)
      })
    get('wp-json/wp/v2/regions_taxonomy')
      .then((response: any) =>{
        setCityList(response)
      })

  }, [])

  return (
    <>
      {children}
    </>
  );
};

export default FetchStartProvider;
