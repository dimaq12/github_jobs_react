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
    loading: false;
    init: false;
}

declare interface DetailsState{
    jobId: string;
    loading: false;
    data: JobData | null;
}

declare interface Window {
    [key:string]: any; // Add index signature
}