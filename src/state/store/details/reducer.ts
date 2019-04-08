import { DetailsAction, DETAILS_SET } from "./actions";

const defaultDetailsState: DetailsState = {
    detailDescription: "",
    data: {}
};

export function detailsReducer(state: DetailsState = defaultDetailsState, action: DetailsAction): DetailsState {
    switch (action.type) {
        case DETAILS_SET:
            return {
                ...state,
                data:action.data 
            }       

        default:
            return state;
    }
}