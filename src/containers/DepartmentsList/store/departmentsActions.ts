// src/store/system/types.ts

import { HomesActionTypes, SetHomesActionTypes, GET_HOMES_REQUESTED, SET_HOMES } from "./departmentsTypes";

export function getDepartments(): HomesActionTypes {
  return {
    type: GET_HOMES_REQUESTED,
    payload: []
  }
}
export function setHomes(payload: any): SetHomesActionTypes {
  return {
    type: SET_HOMES,
    payload: payload
  }
}