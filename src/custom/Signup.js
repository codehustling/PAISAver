
import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import Footer from "components/Footer/Footer";
let name,email,password;
export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  let navigate = useNavigate();

  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  function handleEmail(e){
    setEmailFocus(false);

    let emailText=e.target.value;
    const re=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(!re.test(emailText))
      setEmailError(true)
    else
      setEmailError(false)
  
  }
  function handleRegister(){
    if(!emailError)
    {
      console.log(name,email,password)
      if(password&&email&&name)
      {
        //TODO add code here to send request to backend with the registration details
        navigate("/home")
      }
    }
    

  }

  return (
    <div className="wrapper">

    <div className="main">

    <div className="section section-signup">
      <IndexNavbar />
      <Container>
      <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="5">
            <h3 className="display-3 text-white">
              Welcome to PAISAver :){" "}
              <span className="text-white"></span>
            </h3>
            <p className="text-white mb-3">
              <h3>Just a friendly neighbourhood paisa saver, sign up to SAVE MORE! </h3>
            </p>

          </Col>
          <Col className="mb-lg-auto" lg="6">
            <Card className="card-register">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require("assets/img/square-purple-1.png")}
                />
                <CardTitle tag="h4">Register</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      style={{"font-size": "18px","height": "50px"}}
                      placeholder="Full Name"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                      onChange={(e)=>name=e.target.value}
                    />
                    
                  </InputGroup>
                 {/* <div className="has-danger">
                  <Input
                  className=" has-danger form-control-danger"
                  type="email"
                />
                </div> */}
                  <InputGroup
                    className={!emailError?classnames({
                      "input-group-focus": emailFocus,
                    }):"has-danger"}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      style={{"font-size": "18px","height": "50px"}}
                      placeholder="Email"
                      type="email"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={handleEmail}
                      onChange={(e)=>email=e.target.value}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="tooltip1"
                      style={{"font-size": "18px","height": "50px"}}
                      placeholder="Password"
                      type="text"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                      onChange={(e)=>password=e.target.value}
                    />
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target="tooltip1"
                    >
                      Password should be alphanumeric
                    </UncontrolledTooltip>
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button 
                  className="btn-round" color="primary" size="lg"
                  onClick={handleRegister}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    <Footer />
  </div>
    </div>
  );
}
