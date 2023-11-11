// pages/LoginView

import React from "react";
import { login } from "../services/users";
import {
    ContainerForm,
    Form,
    LabelForm,
    StyledInput,
    StyledButton

  } from "./Style";
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
        <Form>
            <LabelForm>Login</LabelForm>
            <div>
                <StyledInput type="email" name="email" onChange={onChange} required={true} value={form.email}/>
            </div>

            <div>
                <StyledInput type="password" name="password" onChange={onChange} required={true} value={form.password}/>
            </div>
            <StyledButton type={"submit"} value={"Entrar"} onClick={onSubmitLogin}/>

        </Form>

    </ContainerForm>
    
  );
};


// <FormContainer>
//       <StyledForm>
//         <LoginTitle>Sinta a música, viva a emoção</LoginTitle>
//         <div>
//           <StyledInput type="email" name="email" onChange={onChange} required={true} value={form.email} />
//         </div>
//         <div>
//           <StyledInput type="password" name="password" onChange={onChange} required={true} value={form.password} />
//         </div>
//         <StyledButton type={"submit"} value={"Entrar"} onClick={onSubmitLogin}/>
//       </StyledForm>
//     </FormContainer>