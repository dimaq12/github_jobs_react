import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";

import { getJobsListRequest } from "../../../api/requests";

import { COUNTRY_SET, CountrySet, getJobsListSuccess} from "./actions";

function* getJobsListSaga(action: CountrySet) {
    const resp = yield call(getJobsListRequest, 'London', 'Rooby', true);
    yield put(getJobsListSuccess(resp.data));
    // if (resp.ok) {
    //     yield put(getJobsListSuccess(resp.data));

    // } else if (resp.ok === false) {
    //     yield put(getJobsListError(resp.error));
    // }
}