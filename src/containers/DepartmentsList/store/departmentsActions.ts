// src/store/system/types.ts

import { HomesActionTypes, SetHomesActionTypes, GET_HOMES_REQUESTED, SET_HOMES, SET_SELECTED_ID } from "./departmentsTypes";

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
export function selectId(payload: any): SetHomesActionTypes {
  return {
    type: SET_SELECTED_ID,
    payload: payload
  }
}