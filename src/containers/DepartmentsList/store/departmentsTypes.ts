export const GET_HOMES_REQUESTED = 'GET_HOMES_REQUESTED';
export const SET_HOMES = 'SET_HOMES';
export const SET_SELECTED_ID = 'SET_SELECTED_ID';

interface GetHomes {
    type: typeof GET_HOMES_REQUESTED,
    payload: any
  }
interface SetHomes {
    type: typeof SET_HOMES | typeof SET_SELECTED_ID,
    payload: any
  }
  
export type HomesActionTypes = GetHomes;
export type SetHomesActionTypes = SetHomes;

export interface ILocation {
    "lat": number,
    "lng": number
};

export interface IHomes {
    "id": string,
    "abbr_address": string,
    "bathrooms": number,
    "bedrooms": number,
    "parkings": number,
    "sqare_mts": number,
    "location": ILocation,
    "name": string,
    "pet_friendly": boolean,
    "photos": string[],
    "price": number,
    "is_homie_exclusive": boolean
}

export interface HomesState {
    homes: IHomes[]
}