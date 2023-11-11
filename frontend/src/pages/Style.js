import styled from "styled-components";
// import { COLORS } from "../../constants/colors";
export const ContainerForm = styled.div`
    width: 100%;
    height: 50%;
    background-color: slateblue;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LabelForm = styled.h1`
    color: white;
`;

export const StyledInput = styled.input`
    padding: 4px;
    width: 150px;
`;

export const StyledButton = styled.button`
    width: 60px;
    padding: 4px 2px;
    background-color: green;
    color: white;
`;