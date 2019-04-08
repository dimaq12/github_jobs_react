interface OkResult<T> {
    ok: true;
    data: T;
}

interface ErrorResult {
    ok: false;
    error: any;
}

type ApiResponse<T = {}> = OkResult<T> | ErrorResult;