import { DetailsAction, DETAILS_SET, DETAILS_GET } from "./actions";

const defaultDetailsState: DetailsState = {
    jobId: '',
    data: {},
    loading: false
};

export function detailsReducer(state: DetailsState = defaultDetailsState, action: DetailsAction): DetailsState {
    switch (action.type) {
        case DETAILS_GET:
            return {
                ...state,
                jobId: action.id 
            } 

        case DETAILS_SET:
            return {
                ...state,
                data:action.data 
            }       

        default:
            return state;
    }
}