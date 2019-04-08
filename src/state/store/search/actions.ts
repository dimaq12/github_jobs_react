export const COUNTRY_SET = "COUNTRY_SET";
export type COUNTRY_SET = typeof COUNTRY_SET;

export interface CountrySet {
    type: COUNTRY_SET;
}

export const countrySet = (): CountrySet => {
    return {
        type: COUNTRY_SET
    }
}

export const GET_JOB_LIST_SUCCESS = "GET_JOB_LIST_SUCCESS";
export type GET_JOB_LIST_SUCCESS = typeof GET_JOB_LIST_SUCCESS;

export interface GetJobsListSuccess {
    type: GET_JOB_LIST_SUCCESS;
    data: ClientData;
}

export const getJobsListSuccess = (data: ClientData): GetJobsListSuccess => {
    return {
        type: GET_JOB_LIST_SUCCESS,
        data
    };
};
 export type SearchAction = CountrySet | GetJobsListSuccess;

