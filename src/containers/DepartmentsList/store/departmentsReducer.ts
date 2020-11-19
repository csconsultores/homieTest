import {
    SetHomesActionTypes,
  } from './departmentsTypes'
  
  const initialState:any = {
    homes: [],
    totalHomes: 0,
    page: 1,
    rowsPerPage: 12,
    locations: []
  }

  const totalHomes=(homes:any)=>(
    homes.length
  )

  const setLocations=(homes:any) => {
    let locations = homes.map((home: any) => {
      return (home.location)
    })
    return locations
  }
  
  export function departmentsReducer(
    state = initialState,
    action: SetHomesActionTypes
  ){
    switch (action.type) {
      case "SET_HOMES":
        return {
          homes: action.payload,
          totalHomes: totalHomes(action.payload),
          locations: setLocations(action.payload)
        }
  
      default:
        return state
    }
  }