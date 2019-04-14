import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";

import { getJobsListRequest } from "../../../api/requests";

import { DETAILS_GET, detailsSet } from "./actions";

function* getDetailsSaga(action: any) {
    yield console.log('waw')
}

export function* detailsSaga() {
    yield takeEvery(DETAILS_GET, getDetailsSaga);
}