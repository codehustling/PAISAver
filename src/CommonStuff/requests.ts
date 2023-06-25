import cookie from 'react-cookie'

export const BASE_URL = "http://localhost:8000"
export function HttpPOST(base_url:string, endpoint: string, payload:Object,include_cookie:boolean=false){
    let formdata = new FormData();

    Object.keys(payload).forEach(key => formdata.append(key, payload[key]));

    return fetch(`${base_url}/${endpoint}/`, {
        method: 'POST',
        body: formdata,
        credentials: include_cookie?'include':'same-origin'
    }
    ).then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .catch((err)=>{return Promise.reject({"message":"Network request issue"})});
    }