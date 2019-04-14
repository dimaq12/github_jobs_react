declare interface AppState {
    router: any;
    details: DetailsState;
    search: SearchState;
    form: any;
}
declare interface FormState{
    description: string;
    location: string;
    isFullTime: boolean;
}
declare interface SearchState{
    page: number;
    count: number;
    data: JobData[];
    markedLinks: {};
}

declare interface DetailsState{
    detailDescription: string | undefined;
    data: {};
}

declare interface Window {
    [key:string]: any; // Add index signature
}