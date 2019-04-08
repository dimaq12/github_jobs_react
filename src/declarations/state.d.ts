declare interface AppState {
    router: any;
    details: DetailsState;
    search: SearchState;
}

declare interface SearchState{
    jobDescription: string | undefined;
    data: [];
}

declare interface DetailsState{
    detailDescription: string | undefined;
}

declare interface Window {
    [key:string]: any; // Add index signature
}