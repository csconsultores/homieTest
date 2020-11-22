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
    let loc=[];
    for (let i=0; i<12; i++){
      loc.push({"location":homes[i].location, "price":"$"+homes[i].price})
    }
  
    return loc
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