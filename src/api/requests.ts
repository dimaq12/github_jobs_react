const root = 'http://localhost:5000/positions.json'

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


export const getJobsListRequest = async (desc: string, location: string, fullTime: boolean) => {
    const resp = await fetchWrapper(`${root}?description=${desc}&full_time=${fullTime}&location=${location}`, {
        method: "GET",
        headers: headers()
    });
    return await resp.json();
};