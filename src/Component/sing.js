import React from "react";
// import img1 from "./Images/googleimg.png";
import { FaTimesCircle } from "react-icons/fa";
import "./styles/sing.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img from "./Images/Logo.png";
// import img1 from './Images/Cover.png'
import img3 from "./Images/googleimg.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { RiCheckboxCircleFill } from 'react-icons/ri';

const Sing = () => {
  return (
    <div className="bg-img">
      <Navbar expand="lg" className="">
        <Container fluid>
          <Navbar className="nav-link-rj" href="#">
            {" "}
            <img src={img} alt="" className="img-fluid " />{" "}
          </Navbar>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3 gap-5 ">
              <Nav className="nav-link-rj" href="#">
                Home
              </Nav>
              <Nav className="nav-link-rj" href="#">
                Example
              </Nav>
              <Nav className="nav-link-rj" href="#">
                Updates
              </Nav>
              <Nav className="nav-link-rj" href="#">
                Career
              </Nav>
            </Nav>
            <Form className="d-flex gap-5">
              <Button
                style={{
                  width: "110px",
                  height: "38px",
                  color: "#fff",
                  borderRadius: "10px",
                }}
                className="btn-rj"
                variant=""
              >
                Login
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 left_signup">
              <h1 className="h-rj mt-5">
                Welcome to the Faculty Partner community!
              </h1>
              <p className="p-rj">
                We're excited to support you in your teaching journey and
                collaborate with you to create an exceptional learning
                experience for students.
              </p>
            </div>
            <div className="col-5 right_signup">
              <div>
                <FaTimesCircle className="close_icon" />
              </div>
              <h1 className="text3_login_right ">Sign up</h1>
              <p className="text4_login_right ">
                join Us as a Faculty Partner! Your expertise and passion will
                shape the minds of tomorrow. 🎓🤝
              </p>
              <div>
                <label className="text5_login_right">
                  {" "}
                  Email / Phone Number
                </label>
              </div>
              <Box
                sx={{
                  width:350,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  className="text6_login_right"
                  fullWidth
                  id="Password / OTP"
                />
              </Box>
              {/* <input type='text' className=' text6_login_right' /> */}

              <div>
                <label className="text7_login_right">Password / OTP</label>
              </div>

              <Box
                sx={{
                  width:350,
                  maxWidth: "100%",
                  
                }}
              >
                <TextField
                  className="text8_login_right"
                  fullWidth
                  id="Email / Phone Number"
                />
              </Box>

              {/* <input type="password" className=" text8_login_right" /> */}

              <div>
                <p className="text9_login_right">
                  Forgot password?    
                  <span className="text10_login_right">Reset password</span>{" "}
                </p>
              </div>
              <div className="d-grid gap-5">
              <Button className="btn2_login_right" variant="contained" disableElevation>
              Sign up
              </Button>
              {/* <button type="button" class="btn2_login_right">
                Sign up
              </button> */}
             
                <p className="text11_login_right">
                  By clicking on Sign up, you agree to our Terms of service and
                  Privacy policy.
                </p>
              </div>

             <div className="d-grid gap-4">
             <div className="hr_line">
                <hr className="line12_login_right" />
                <p className="text14_login_right">or</p>
                <hr className="line13_login_right" />
              </div>
              <button type="button" class="btn3_login_right">
                {" "}
                <p className="text13_login_right">
                  {" "}
                  <img src={img3} className="mx-2" /> Sign with Google
                </p>{" "}
              </button>
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sing;
