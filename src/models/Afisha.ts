import { createEvent, createStore } from "effector";
import { persist } from "@effector-storage/react-native-async-storage";
import { $cityList } from "./City";

export const $dateToSort = createStore<any>(null)

export const onsetDate = createEvent<any>();

$dateToSort.on(onsetDate, (_, e) => e)
