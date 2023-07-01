import { BASE_URL, HttpPOST, HttpGET } from "CommonStuff/requests.ts";


export function initProfile(){
    return HttpGET(BASE_URL,"profile_page")

}

