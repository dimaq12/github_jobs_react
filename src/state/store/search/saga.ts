import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";

import { getJobsListRequest } from "../../../api/requests";

import { COUNTRY_SET, CountrySet, getJobsListSuccess} from "./actions";

export function* searchSaga() {
    yield null
}