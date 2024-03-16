import axios from 'axios';
import { apiUrl } from './environment'
import { useUnit } from "effector-react";
import { $currentCity } from "../models/City";

let transport: any;


export const configureTransport = (token = null) => {

  const options: any = token ?
    {
      baseURL: 'https://afisha.arkada-web-studio.ru',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    : { baseURL: 'https://afisha.arkada-web-studio.ru' };
  transport = axios.create(options);

  transport.interceptors.request.use((config: any) => {
    if ($currentCity?.getState()?.id) {
      const cityParam = `regions_taxonomy=${$currentCity?.getState()?.id}`;
      // Проверяем, есть ли уже другие параметры в URL
      if (config.url.includes('?')) {
        // Если есть, добавляем city с символом "&"
        config.url += `&${cityParam}`;
      } else {
        // Если нет, добавляем city с символом "?"
        config.url += `?${cityParam}`;
      }
    }
    return config;
  });

  return transport;
};

export const getTransport = () => transport || configureTransport();
