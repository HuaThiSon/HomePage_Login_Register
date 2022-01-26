import styled from "styled-components";
import {
  FormLoginNameInput,
  FormLoginSubmit,
  HeaderWrapper,
  HeaderWrapperH2,
  FormLoginButton,
  HeaderContainer,
} from "../../login/components/styles";

export const ContainerRegister = styled(HeaderContainer)`
  height: 679px;
`;

export const HeaderRegister = styled(HeaderWrapper)`
  padding: 60px 40px;
  height: auto;
`;

export const HeaderRegisterH2 = styled(HeaderWrapperH2)`
  color: #fff;
  font-size: 35px;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 4px;
`;

export const FormRegisterNameInput = styled(FormLoginNameInput)`
  border: 2px solid #fff;
  width: 100%;
  color: #fff;
  background: linear-gradient(45deg, rgb(0 0 0 / 50%), transparent);
`;

export const FormRegisterSubmit = styled(FormLoginSubmit)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  && {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const FormRegisterButton = styled(FormLoginButton)`
  border-radius: 20px;
  margin: 20px;
`;

export const FormRegisterCancel = styled(FormRegisterButton)`

  &:hover {
    background: radial-gradient(rgb(253 9 59 / 71%), transparent);
    color: red;
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
    -moz-transition: 0.3s all;
    -o-transition: 0.3s all;
    -ms-transition: 0.3s all;
  }
`;
