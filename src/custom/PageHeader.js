import { useState } from "react";
import { Container } from "reactstrap";
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


export default function PageHeader() {

  const questions_list = ['1. what gives?','2. what gives?','3. what gives?','4. what gives?','5. what gives?','6. what gives?','7. what gives?','8. what gives?']

  

  const [current_question_number,set_current_question_number] = useState(0)



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
        <dive className = "data-column-name" style = {{ fontSize: "2px", height: "50%", position: "absolute", top: "35%", left: "25%" }}>
            <h4>What to do?</h4>

        </dive>
        <div className="data-column" style={{ fontSize: "2px", height: "50%", position: "absolute", top: "35%", right: "25%" }}>
            <h4>What to expect?</h4>
        </div>




        <div class="card" style={{ fontSize: "2px", height: "25%", width : "25%", position: "absolute", top: "40%", left: "15%" }}>
        <div class="card-body">
        <div >
          <h5>Explain quantum computing in simple terms</h5>
          <h5>Got any creative ideas for a 10 year old’s birthday?</h5>
          <h5>How do I make an HTTP request in Javascript?</h5>
        </div>
        </div>
      </div>

      <div class="card" style={{ fontSize: "2px", height: "25%", width : "25%", position: "absolute", top: "40%", right: "15%" }}>
        <div class="card-body">
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
                <Input defaultValue="" placeholder="Type your question here and press enter" type="text" />
              </FormGroup>
            </Col>
      </Container>
    </div>
  );
}
