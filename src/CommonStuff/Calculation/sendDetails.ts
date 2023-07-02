import { HttpPOST,BASE_URL } from "CommonStuff/requests.ts";

interface Details{
    salary : string,
    salary_growth_rate : string,
    returns_on_investement : string,
    loan_principal_amount : string,
    loan_tenure : string,
    loan_interest_rate : string,
    inflation_rate : string,
}
export function sendDetails(payload:Details,include_cookie=true){
    return HttpPOST(BASE_URL,"user_inputs",payload,include_cookie)
}