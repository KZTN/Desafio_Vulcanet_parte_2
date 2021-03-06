import { call, put, takeLatest, all } from "redux-saga/effects";
import { CustomersActions } from "./types";
import api from "../../../services/api";
import { CustomersLoadFailure, CustomersLoadSucess } from "./actions";

function* request(): object {
  try {
    const response = yield call(api.get, "customers");
    yield put(CustomersLoadSucess(response.data));
  } catch (error) {
    yield put(CustomersLoadFailure(error));
  }
}

export default all([takeLatest(CustomersActions.LOAD_REQUEST, request)]);
