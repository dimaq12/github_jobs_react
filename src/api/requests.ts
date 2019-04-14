const root = 'http://localhost:5000/positions.json'

async function convertResult<T>(resp: Response): Promise<ApiResponse<T>> {
    if (resp.ok) {
        return {
            success: true,
            data: await resp.json()
        };
    } else {
        return {
            success: false,
            error: await resp.json()
        };
    }
}

const fetchWrapper = (request: RequestInfo, init?: RequestInit) => {
    return fetch(request, init)
        .then(resp => {
            return resp;
        });
}

const headers = () =>
    new Headers({
        "Content-Type": "application/json",
    });


export const getJobsListRequest = async (
        desc: string,
        loc: string,
        isFullTiemeJob: boolean,
        pageNumber: number,
    ): Promise<ApiResponse<JobData[]>> => {
        const url = `${root}?page=${pageNumber}${desc 
            ? `&description=${desc}`:''}${loc 
                ? `&location=${loc}`:''}${`&full_time=${isFullTiemeJob}`}`

        const resp = await fetchWrapper(url, {
            method: "GET",
            headers: headers()
    });
    return convertResult(resp);
};