import { BASE_URL, HttpPOST } from "CommonStuff/requests.ts";

interface Register{
    username: string,
    password: string,

}
export function initLogin(payload:Register){
    return HttpPOST(BASE_URL,"login",payload)

}

export function initLogout(){
    return HttpPOST(BASE_URL,"logout",{},true)

}