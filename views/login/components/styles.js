import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-image: url(https://wedo.vn/wp-content/uploads/2019/07/nha-vuon-cap-4-hien-dai-chu-l-3.jpg);
  height: 526px;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const FormLoginemember = styled.ul`
  display: none;
  width: 15px;
  height: 15px;
  display: inline-block;
  border: 2px solid #537b35;
  position: absolute;
  top: -1px;
  left: 20px;
  bottom: 4px;
`;

export const HeaderWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  padding: 50px;
  margin-top: 70px;
  height: auto;

  && {
    @media (max-width: 1024px) {
      width: 90%;
    }
  }
`;

export const HeaderWrapperH2 = styled.h2`
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 40px;
  letter-spacing: 2px;
  width: auto;
  margin: 0 auto;
`;

export const FormLogin = styled.form`
  margin: 0 auto;
  width: 100%;
`;

export const FormLoginName = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const FormLoginNameInput = styled.input`
  outline: none;
  font-size: 15px;
  color: #ffffff;
  padding: 15px 40px 15px 10px;
  letter-spacing: 2px;
  width: 100%;
  border: none;
  border: 1px solid #dccbcf;
  -webkit-appearance: none;
  margin-bottom: 10px;
  background: transparent;
  font-family: "Sirin Stencil", cursive;
`;

export const FormLoginIcon = styled.div`
  color: #fff;
`;

export const FormLoginPassword = styled.div``;

export const FormLoginForgotPassword = styled.p`
  font-size: 16px;
  color: #eee;
  margin-top: 0em;
  text-align: center;
  text-transform: none;
  float: left;
`;

export const FormLoginRegister = styled.p`
  font-size: 16px;
  margin-top: 0em;
  text-align: center;
  text-transform: none;
  color: #8bc34a;
  outline: none;
  text-decoration: none;
`;
export const FormLoginPasswordInput = styled(FormLoginNameInput)``;

export const FormLoginSubmit = styled.div``;

export const FormLoginButton = styled.button`
  font-size: 16px;
  background: #fff;
  border-radius: 20px;
  color: #000;
  outline: none;
  display: block;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  padding: 7px 35px;
  font-size: 16px;
  margin-top: 20px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Sirin Stencil", cursive;
  transition: 0.3s all;
  -webkit-transition: 0.3s all;
  -moz-transition: 0.3s all;
  -o-transition: 0.3s all;
  -ms-transition: 0.3s all;

  &:hover {
    background: #4caf50;
    color: #ffffff;
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
    -moz-transition: 0.3s all;
    -o-transition: 0.3s all;
    -ms-transition: 0.3s all;
  }
`;
