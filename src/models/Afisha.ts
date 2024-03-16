import { createEvent, createStore } from "effector";

export const $dateToSort = createStore<any>(null)

export const onsetDate = createEvent<any>();

$dateToSort.on(onsetDate, (_, e) => e)
