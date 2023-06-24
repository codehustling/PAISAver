import cookie from 'react-cookie'

export const BASE_URL = "http://localhost:8000"
export async function HttpPOST(base_url:string, endpoint: string, payload:Object){
    var formdata = new FormData();
    
    Object.keys(payload).forEach(key => formdata.append(key, payload[key]));

    return fetch(`${base_url}/${endpoint}/`, {
        method: 'POST',
        body: formdata,
    }
    ).then((resp) => {return resp.json()})

}