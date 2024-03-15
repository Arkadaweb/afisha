import { createEvent, createStore } from "effector";
import { persist } from "@effector-storage/react-native-async-storage";
import { $cityList } from "./City";

export const $contacts = createStore<any>({})
persist({
  key: "$contacts",
  store: $contacts,
});
export const setContacts = createEvent();

$contacts.on(setContacts, (_, e) => e)
