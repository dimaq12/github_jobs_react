export const DETAILS_GET = "DETAILS_GET";

export type DETAILS_GET = typeof DETAILS_GET;

export interface DetailsGet {
    type: DETAILS_GET;
    id: string;
}

export const detailsGet = (id: string ): DetailsGet => {
    return {
        type: DETAILS_GET,
        id
    }
}


export const DETAILS_SET = "DETAILS_SET";

export type DETAILS_SET = typeof DETAILS_SET;

export interface DetailsSet {
    type: DETAILS_SET;
    data: JobData
}

export const detailsSet = (data:any ): DetailsSet => {
    return {
        type: DETAILS_SET,
        data: data
    }
}


export type DetailsAction = DetailsGet | DetailsSet;

