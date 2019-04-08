const root = 'https://jobs.github.com/positions.json'

async function convertResult (resp: any) {
    if (resp.ok) {
        return {
            ok: true,
            data: await resp.json()
        };
    } else {
        return {
            ok: false,
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
        Accept: "application/json",
        "Content-Type": "application/json"
    });


export const getJobsListRequest = async (desc: string, location: string, fullTime: boolean) => {
    const resp = await fetchWrapper(`${root}/?description=${desc}&location=${location}&full_time=${true}`, {
        method: "GET",
        headers: headers()
    });
    return convertResult(resp);
};