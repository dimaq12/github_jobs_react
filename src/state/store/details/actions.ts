export const DETAILS_GET = "DETAILS_GET";

export type DETAILS_GET = typeof DETAILS_GET;

export interface DetailsGet {
    type: DETAILS_GET;
    description: string;
    location: string;
    isFoolTime: boolean;
}

export const detailsGet = (description: string, location: string, isFoolTime: boolean ): DetailsGet => {
    return {
        type: DETAILS_GET,
        description,
        location,
        isFoolTime
    }
}


export const DETAILS_SET = "DETAILS_SET";

export type DETAILS_SET = typeof DETAILS_SET;

export interface DetailsSet {
    type: DETAILS_SET;
    data: {}
}

export const detailsSet = (data:any ): DetailsSet => {
    return {
        type: DETAILS_SET,
        data: data
    }
}


export type DetailsAction = DetailsGet | DetailsSet;

