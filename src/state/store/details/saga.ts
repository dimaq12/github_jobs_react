import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";

import { getJobDetails } from "../../../api/requests";

import { DETAILS_GET, detailsSet } from "./actions";

function* getDetailsSaga(action: any) {
    let jobId: string = yield select((state: AppState) => state.details.jobId)

    const resp: ApiResponse<JobData> = yield call(getJobDetails, 
        jobId
    );

    if (resp.success) {
        yield put(detailsSet(resp.data))
    } else if (resp.success === false) {
        yield console.log('not ok', resp)
    }
}

export function* detailsSaga() {
    yield takeEvery(DETAILS_GET, getDetailsSaga);
}