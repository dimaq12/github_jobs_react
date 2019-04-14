interface OkResult<T> {
    success: true;
    data: T;
}

interface ErrorResult {
    success: false;
    error: any;
}

type ApiResponse<T = {}> = OkResult<T> | ErrorResult;

interface JobData{
    company: string;
    company_logo: string;
    company_url: string;
    created_at: string;
    description: string;
    how_to_apply: string;
    id: string;
    location: string;
    title: string;
    type: string;
    url: string;
}