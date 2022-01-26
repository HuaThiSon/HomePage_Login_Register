import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import {
  userSignUp,
  userSignIn,
  signOut,
  restore,
} from "../../../redux/actions/main";
import Register from "../../../views/register/components/index";
import SignIn from "../../../views/login/components/index";

function Header(props) {
  const [show, handleClose] = useState(false);
  const [showSignIn, handleCloseSignIn] = useState(false);
  const [form, setFormValue] = useState({});
  const { userInfo, restore } = props;

  const register = () => props.userSignUp(form);
  const signIn = () => props.userSignIn(form);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_info"));
    if (userData) {
      restore(userData);
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </Head>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link href="/">
            <a className="text-white">HS HOUSE</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/weather">
              <a className="text-white mr-2 mt-1">About</a>
            </Link>
            <Link href="/profile">
              <a className="text-white mr-2 mt-1">Profile</a>
            </Link>
          </Nav>
          {userInfo.token && (
            <Nav>
              <NavDropdown
                title={`Welcome ` + userInfo.name}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => props.signOut()}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
          {!userInfo.token && (
            <Nav>
              <Nav.Link onClick={() => handleCloseSignIn(true)}>
                Sign In
              </Nav.Link>
              <Nav.Link onClick={() => handleClose(true)}>Register</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>

      <Register
        show={show && !userInfo.token}
        setShow={handleClose}
        form={form}
        setFormValue={setFormValue}
        register={register}
        error={userInfo.error}
        isLoading={props.userInfo.loading}
      />

      <SignIn
        show={showSignIn && !userInfo.token}
        setShow={handleCloseSignIn}
        form={form}
        setFormValue={setFormValue}
        error={userInfo.error}
        signIn={signIn}
        isLoading={props.userInfo.loading}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {
  userSignUp,
  userSignIn,
  signOut,
  restore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
