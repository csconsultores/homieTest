import { put, takeEvery } from 'redux-saga/effects'
import axios from "axios";
import * as actions from '../containers/DepartmentsList/store/departmentsActions';

function* fetchHomes(action) {

    let url ="/homes";

    try {
        const response = yield axios.get(url);
        yield put(actions.setHomes(response.data.homes))
      //const user = yield call(Api);
      //yield put(actions.checkAuthTimeout(response.data.expiresIn))
   } catch (e) {
      yield put({type: "GET_HOMES_FAILED", message: e.message});
   }
}


export default function* rootSaga() {
    yield takeEvery("GET_HOMES_REQUESTED", fetchHomes);
  }
