/* eslint-disable jsx-a11y/img-redundant-alt */
// pages/LoginView

import React from "react";
import { login } from "../services/users";
import {
    ContainerForm,
    Form,
    LabelForm,
    StyledInput,
    StyledButton,
    ImageLog,
    ImageLogo
  } from "./Style";
  import Logo from "../assets/Logo.svg"
  import imageLogin from "../assets/astro.png"
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const LoginView = () => {
  const [form, onChange] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    login(form, navigate);
  };

  return (
    <ContainerForm>
      <ImageLog src={imageLogin} alt="imageLogin"/>
        <Form>
          <ImageLogo src={Logo} alt="Logo" />
            <LabelForm>FAÇA SEU LOGIN</LabelForm>
            <div>
                <StyledInput type="email" name="email" onChange={onChange} required={true} value={form.email}/>
            </div>

            <div>
                <StyledInput type="password" name="password" onChange={onChange} required={true} value={form.password}/>
            </div>
            <StyledButton type={"submit"} value={"Entrar"} onClick={onSubmitLogin}>Login</StyledButton>

        </Form>

    </ContainerForm>
    
  );
};


