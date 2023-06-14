
import React from "react";
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
            <h3 className="mb-5">Pagination</h3>
 
            <Pagination
              className="pagination pagination-info"
              listClassName="pagination-info"
            >
              <PaginationItem>
                <PaginationLink
                  aria-label="Previous"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span aria-hidden={true}>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-double-left"
                    />
                  </span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  aria-label="Next"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
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
