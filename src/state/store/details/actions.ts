export const DETAILS_SET = "IDENTETY_GET";
export type DETAILS_SET = typeof DETAILS_SET;

export interface detailsSet {
    type: DETAILS_SET;
}

export const detailsSet = (): detailsSet => {
    return {
        type: DETAILS_SET
    }
}
export type DetailsAction = detailsSet;

