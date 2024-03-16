import { createEvent, createStore } from "effector";
import { persist } from 'effector-storage/local'


export const $cityList = createStore<any>([])
export const $currentCity = createStore<any>('')
export const $isOpenCityModal = createStore<boolean>(false)

persist({
  key: "$cityList",
  store: $cityList,
});
persist({
  key: "$currentCity",
  store: $currentCity,
});

export const setCityList = createEvent();
export const setCurrentCity = createEvent();
export const changeOpenCityModal = createEvent<boolean>();

$cityList.on(setCityList, (_, e) => e)
$currentCity.on(setCurrentCity, (_, e) => e)
$isOpenCityModal.on(changeOpenCityModal, (_, e) => e)


