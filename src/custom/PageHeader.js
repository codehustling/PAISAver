import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";



//custom components
import PaginationSection from "./Pagination.js"
import Login from "./Login.js"
import { sendDetails } from "CommonStuff/Calculation/sendDetails.ts";

export default function PageHeader() {

  const questions_list = ['1. Salary:','2. Salary growth rate:','3. Return on investment(ROT) %:','4. Loan principal amount:','5. Loan tenure:','6. Loan interest rate:','7. Inflation rate:']

  const [answers_list, set_answers_list] = useState(["","","","","","",""])
  const [currentInput, setCurrentInput] = useState("")

  const [current_question_number,set_current_question_number] = useState(0)
  let navigate = useNavigate();

useEffect(()=>{
  setCurrentInput(answers_list[current_question_number])
},[current_question_number])

  function replace_to_answers(e){
    setCurrentInput(e.target.value)
    let temp = answers_list
    temp[current_question_number] = e.target.value
    console.log(answers_list)
    set_answers_list(temp)
  }
  function submitDetails(){
    console.log(answers_list)
    let flag=true;
    answers_list.forEach((v)=>{
      if(v==="")
        flag=false;
    })

    if(flag)
    {
      const payload={
          salary : answers_list[0],
          salary_growth_rate : answers_list[1],
          returns_on_investement : answers_list[2],
          loan_principal_amount : answers_list[3],
          loan_tenure : answers_list[4],
          loan_interest_rate : answers_list[5],
          inflation_rate : answers_list[6],
      }
      sendDetails(payload).then(()=>
      {console.log("request successssssssssssssssssss"); 
      navigate('/results')}
      ).catch((err)=>console.log(err.message))
    }
    else{alert("enter all fields")}
  }
    

  return (
    
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      
      <Container>

        <div style={{ position: "absolute", top: "20%", left: "35%" }}>
        <h1  style={{ fontSize: "35px", height: "5%", position: "relative", top: "1%", left: "40%" }}>PAISAver</h1>


          {/* <div className="main-center brand" style={{ position: "fixed", top: "20%", left: "50%" }}>
          <h6 className="h1-seo" style={{ fontSize: "20px", height: "5%", position: "relative", top: "1%", left: "50%" }}>PAISAver</h6> */}

        </div>
        
        <div style={{ position: "absolute", bottom: "2%", right: "10%" }}>
        
        <PaginationSection 
          questions_list={questions_list}
          current_question_number={current_question_number}
          set_current_question_number={set_current_question_number} 
          />
          </div>
        <h6  style={{ fontSize: "17px", position: "absolute", top: "25%", left: "36%" }}>
            Finance made easy for peasants
          </h6>
        <div className = "data-column-name" style = {{ fontSize: "2px", height: "50%", position: "absolute", top: "35%", left: "25%" }}>
            <h4>What to do?</h4>

        </div>
        <div className="data-column" style={{ fontSize: "2px", height: "50%", position: "absolute", top: "35%", right: "25%" }}>
            <h4>What to expect?</h4>
        </div>




        <div className="card" style={{ fontSize: "2px", height: "25%", width : "25%", position: "absolute", top: "40%", left: "15%" }}>
        <div className="card-body">
        <div >
          <h5>Explain quantum computing in simple terms</h5>
          <h5>Got any creative ideas for a 10 year old’s birthday?</h5>
          <h5>How do I make an HTTP request in Javascript?</h5>
        </div>
        </div>
      </div>

      <div className="card" style={{ fontSize: "2px", height: "25%", width : "25%", position: "absolute", top: "40%", right: "15%" }}>
        <div className="card-body">
        <div >
          <h5>Explain quantum computing in simple terms</h5>
          <h5>Got any creative ideas for a 10 year old’s birthday?</h5>
          <h5>How do I make an HTTP request in Javascript?</h5>
        </div>
        </div>
      </div>
      
      
      <div style={{ fontSize: "15px", height: "25%", width : "90%", position: "absolute", top: "75%", left: "10%" }}>{questions_list[current_question_number]}</div>

      <Col lg="10" sm="6" style={{ fontSize: "2px", height: "25%", width : "90%", position: "absolute", top: "80%", left: "10%" }} >
              
              <FormGroup>
                <Input autoFocus value={currentInput} placeholder="Type your question here and press enter" type="text"  onChange={replace_to_answers} />
                <Button onClick={submitDetails}>Submit</Button>
              </FormGroup>
            </Col>
      </Container>
    </div>
  );
}
