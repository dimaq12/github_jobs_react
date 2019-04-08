import { SearchAction, COUNTRY_SET, GET_JOB_LIST_SUCCESS } from "./actions";

const defaultSearchState: SearchState = {
    jobDescription: "",
    data: []
};

export function searchReducer(state: SearchState = defaultSearchState, action: SearchAction): SearchState {
    switch (action.type) {
        case COUNTRY_SET:
            return {
                ...state,
                jobDescription: "description"
            };

        case GET_JOB_LIST_SUCCESS:
            return {
                ...state,
                data: action.data,
            }  

        default:
            return state;
    }
}