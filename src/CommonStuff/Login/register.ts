import { BASE_URL, HttpPOST } from "CommonStuff/requests.ts";

interface Register{
    username: string,
    name:string,
    password: string,

}
export function initRegister(payload:Register){
    return HttpPOST(BASE_URL,"register",payload)

}