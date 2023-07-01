import cookie from 'react-cookie'
import { formatDiagnostic } from 'typescript';

export const BASE_URL = "http://localhost:8000"
export function HttpPOST(base_url:string, endpoint: string, payload:Object,include_cookie:boolean=true){
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



export function HttpGET(base_url:string, endpoint: string, payload: Object, include_cookie:boolean=true){

  let endpoint_extension = endpoint + '/?'

  Object.keys(payload).forEach((key,index) => {endpoint_extension=endpoint_extension + key+'='+ payload[key]; 
});

  
  return fetch(`${base_url}/${endpoint_extension}`, {
      method: 'GET',
      credentials: include_cookie?'include':'same-origin'
  }
  ).then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .catch((err)=>{return Promise.reject({"message":"Network request issue"})});
  }