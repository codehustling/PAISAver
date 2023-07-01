import { getDetails } from "CommonStuff/Calculation/getDetails.ts";
import { useEffect, useState } from "react";
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


export default function Results() {

useEffect(()=>{getDetails({'run_id':'3'})},[])




}
