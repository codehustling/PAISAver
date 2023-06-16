
import React from "react";
import { useState } from "react";
import classnames from "classnames";
// reactstrap components
import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";







export default function PaginationSection() {

    const page_number_list = [1,2,3,4,5,6,7,8]

    const [current_page,set_current_page] = useState(0)

    const [center_page,set_center_page] = useState(1)

    function RightArrow(){
    if(current_page+1===page_number_list[page_number_list.length-1]){

      set_current_page(current_page) 
      set_center_page(center_page) 

    }
    else if(current_page+1===page_number_list[page_number_list.length-3]){
      
      set_current_page(current_page+1) 
      set_center_page(page_number_list.length-2)} 
    else if(current_page+1!==page_number_list[center_page+1]){set_current_page(current_page+1)}  
    else{
      set_current_page(current_page+1)
      set_center_page(center_page+3)
    
    }         

    }
    function LeftArrow(){
      if(current_page-1< page_number_list[0]){
        set_current_page(0)
        set_center_page(1) 
      }
      else if((current_page+1===page_number_list[2]) || (current_page===page_number_list[2] ) ){
        set_current_page(current_page-1)
        set_center_page(1)  
      }
      else if(current_page+1!==page_number_list[center_page-1]){set_current_page(current_page-1)}
      else{
        set_current_page(current_page-1)
        set_center_page(center_page-3)
      }



      
           

    }

    function Active_onclick(){

    }
  const [pills, setPills] = React.useState(1);
  return (
    <div className="section section-pagination">
      <img alt="..." className="path" src={require("assets/img/path4.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      <Container>
        <Row>

          <Col md="6">
         
 
            <Pagination
              className="pagination pagination-info"
              listClassName="pagination-info"
            >
              <PaginationItem>
                <PaginationLink
                  aria-label="Previous"
                  href="#pablo"
                  onClick={(e) => {e.preventDefault(); LeftArrow()}  }
                >
                  <span aria-hidden={true}>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-double-left"
                    />
                  </span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className={current_page+1===page_number_list[center_page-1]?"active":""}>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                 {page_number_list[center_page-1]}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className={current_page+1===page_number_list[center_page]?"active":""}>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  {page_number_list[center_page]}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className={current_page+1===page_number_list[center_page+1]?"active":""}>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  {page_number_list[center_page+1]}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  aria-label="Next"
                  href="#pablo"
                  onClick={(e) => {e.preventDefault(); RightArrow()}  }
                >
                  <span aria-hidden={true}>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-double-right"
                    />
                  </span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <br />
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
