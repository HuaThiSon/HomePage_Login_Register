import React from "react";
import { Modal, Alert } from "react-bootstrap";
import {
  FormLogin,
  FormLoginName,
} from "../../login/components/styles";
import {
  HeaderRegister,
  FormRegisterNameInput,
  FormRegisterSubmit,
  FormRegisterButton,
  FormRegisterCancel,
  ContainerRegister,
} from "./styles";
const Register = ({
  show,
  setShow,
  form,
  setFormValue,
  register,
  isLoading,
  error,
}) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Create Your Account</Modal.Title>
      </Modal.Header>
      <ContainerRegister>
        {error && <Alert variant="danger">{error}</Alert>}
        <div>
          <HeaderRegister>
            <FormLogin>
              <FormLoginName>
                <FormRegisterNameInput
                  placeholder="USERNAME"
                  name="username"
                  type="text"
                  required=""
                  onChange={(e) => setFormValue({ ...form, name: e.target.value})}
                />
                <div>
                  <i aria-hidden="true"></i>
                </div>
              </FormLoginName>
              {/* <FormLoginName>
                <FormRegisterNameInput
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  // required=""
                />
                <div>
                  <i aria-hidden="true"></i>
                </div>
              </FormLoginName> */}
              <FormLoginName>
                <FormRegisterNameInput
                  placeholder="EMAIL"
                  name="email"
                  type="text"
                  required=""
                  onChange={(e) => setFormValue({ ...form, email: e.target.value})}
                />
                <div>
                  <i aria-hidden="true"></i>
                </div>
              </FormLoginName>
              <FormLoginName>
                <FormRegisterNameInput
                  placeholder="PASSWORD"
                  name="password"
                  type="password"
                  required=""
                  onChange={(e) => setFormValue({ ...form, password: e.target.value})}
                />
                <div>
                  <i aria-hidden="true"></i>
                </div>
              </FormLoginName>
              <div>
                <label style={{color:"#fff"}}>
                  <input  type="checkbox" name="checkbox" />I Accept Terms "&"
                  Conditions
                </label>
              </div>
              <FormRegisterSubmit>
                <FormRegisterButton
                  type="submit"
                  variant="primary"
                  onClick={() => register()}
                  disabled={isLoading}
                >
                  {isLoading ? "...loading" : "Register"}
                </FormRegisterButton>
                <FormRegisterCancel type="submit" variant="secondary" onClick={() => setShow(false)}>Cancel</FormRegisterCancel>
              </FormRegisterSubmit>
            </FormLogin>
          </HeaderRegister>
        </div>
      </ContainerRegister>
    </Modal>
  );
};

export default Register;
