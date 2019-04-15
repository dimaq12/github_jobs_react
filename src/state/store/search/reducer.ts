import { SearchAction,  SEARCH, SET_PAGE, GET_JOB_LIST_SUCCESS } from "./actions";

const defaultSearchState: SearchState = {
    page: 1,
    count: 0,
    data: [],
    markedLinks: {},
    loading: false,
    init: false,
};

export function searchReducer(state: SearchState = defaultSearchState, action: SearchAction): SearchState {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
            }
            
        case GET_JOB_LIST_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        
        case SET_PAGE:
            return {
                ...state,
                page: action.page,
                
            }

        default:
            return state;
    }
}