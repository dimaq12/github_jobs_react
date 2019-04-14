
export const SEARCH = "SEARCH";
export type SEARCH = typeof SEARCH;

export interface Search {
    type: SEARCH;
}

export const search = (): Search => {
    return {
        type: SEARCH
    };
};

export const SET_PAGE = "SET_PAGE";
export type SET_PAGE = typeof SET_PAGE;

export interface SetPage {
    type: SET_PAGE;
    page: number;
}

export const setPage = (page: number): SetPage => {
    return {
        type: SET_PAGE,
        page
    };
};

export const GET_JOB_LIST_SUCCESS = "GET_JOB_LIST_SUCCESS";
export type GET_JOB_LIST_SUCCESS = typeof GET_JOB_LIST_SUCCESS;

export interface GetJobsListSuccess {
    type: GET_JOB_LIST_SUCCESS;
    data: JobData[];
}

export const getJobsListSuccess = (data: JobData[]): GetJobsListSuccess => {
    return {
        type: GET_JOB_LIST_SUCCESS,
        data
    };
};
 export type SearchAction = Search | SetPage | GetJobsListSuccess;
