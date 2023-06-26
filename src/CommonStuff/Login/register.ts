import { BASE_URL, HttpPOST } from "CommonStuff/requests.ts";

interface Register{
    username: string,
    name:string,
    password: string,

}
export function initRegister(payload:Register,include_cookie:boolean=false){
    return HttpPOST(BASE_URL,"register",payload,include_cookie)

}