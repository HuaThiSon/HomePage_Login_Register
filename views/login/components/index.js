import { Modal, Alert } from 'react-bootstrap'
import React from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderWrapperH2,
  FormLogin,
  FormLoginName,
  FormLoginNameInput,
  FormLoginIcon,
  FormLoginPassword,
  FormLoginForgotPassword,
  FormLoginRegister,
  FormLoginPasswordInput,
  FormLoginSubmit,
  FormLoginButton,
  FormLoginemember,
} from "./styles";
const Login = ({ show, setShow, form, setFormValue, signIn, isLoading, error }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton >
      <Modal.Title>Login to Your Account</Modal.Title>
    </Modal.Header>
    <HeaderContainer>
    {error &&
      <Alert variant='danger'>
        {error}
      </Alert>
    }
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderWrapperH2>Login Now </HeaderWrapperH2>
        <FormLogin name="form">
          <FormLoginName>
            <FormLoginNameInput
              type="email"
              name="username"
              placeholder="USERNAME"
              onChange={(e) => setFormValue({ ...form, email: e.target.value})}
            />
            <FormLoginIcon aria-hidden="true"></FormLoginIcon>
          </FormLoginName>
          <FormLoginPassword>
            <FormLoginPasswordInput
              type="password"
              name="password"
              placeholder="PASSWORD"
              onChange={(e) => setFormValue({ ...form, password: e.target.value})}
            />
            <FormLoginIcon aria-hidden="true"></FormLoginIcon>
          </FormLoginPassword>
          <FormLoginSubmit>
            <FormLoginButton type="submit" onClick={() => signIn()}
            disabled={isLoading}>
            {isLoading ? '...loading' : 'Login'}</FormLoginButton>
          </FormLoginSubmit>
        </FormLogin>
      </HeaderWrapper>
    </HeaderContainer>
    </HeaderContainer>
    </Modal>
  );
};

export default Login;
