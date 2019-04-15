import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";


import { getJobsListRequest } from "../../../api/requests";
import { SEARCH, SET_PAGE, getJobsListSuccess} from './actions'

function* getDetailsSaga() {
    let searchForm: FormState = yield select((state: AppState) => state.form.searchForm.values)
    const page: number = yield select((state: AppState) => state.search.page);
    searchForm = Object.assign({description:"",location:"", isFullTime: false}, searchForm)

    const resp: ApiResponse<JobData[]> = yield call(getJobsListRequest, 
        searchForm.description,
        searchForm.location, 
        searchForm.isFullTime,
        page
    );

    if (resp.success) {
        yield put(getJobsListSuccess(resp.data))
    } else if (resp.success === false) {
        yield console.log('not ok', resp)
    }
}

export function* searchSaga() {
    yield takeEvery(SEARCH, getDetailsSaga);
    yield takeEvery(SET_PAGE, getDetailsSaga);
}