import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";

import { getJobsListRequest } from "../../../api/requests";

import { DETAILS_GET, detailsSet } from "./actions";

function* getDetailsSaga(action: any) {
    const resp: ApiResponse = yield call(getJobsListRequest, 
        action.description, 
        action.location, 
        action.isFoolTime);

    if (resp) {
        console.log('ok', resp)
        yield put(detailsSet(resp));
    } else if (!resp ) {
        console.log('not ok', resp)
    }
}

export function* detailsSaga() {
    yield takeEvery(DETAILS_GET, getDetailsSaga);
}