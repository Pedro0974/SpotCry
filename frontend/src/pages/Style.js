import styled from "styled-components";
// import { COLORS } from "../../constants/colors";

export const ImageLog = styled.img`
    width:50%;
    height:100%;
`;

export const ContainerForm = styled.div`
    flex-basis: 50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    height: 530px;
    background-color: #3D4364;

`;
export const ImageLogo = styled.img`
    width:60px;
`

export const Form = styled.form`
    width:350px;
    height:400px;
    background-color:#383A49;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
    border-radius:10px;
    border: 2px solid #3D4364;
    margin:auto;
    box-shadow: 0px 3.91px 3.9px rgba(0, 0, 0, 0.25);
`;

export const LabelForm = styled.h1`
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    font-size:20px;
`;

export const StyledInput = styled.input`
    padding: 4px;
    font-size: 15px;
    font-family:Arial, Helvetica, sans-serif;
    width: 250px;
    height:30px;
    border-radius:5px;
    box-shadow: 0px 3.91px 3.9px rgba(0, 0, 0, 0.25);
`;

export const StyledButton = styled.button`
    width:200px;
    height: 40px;
    border-radius:10px;
    border: 2px solid #3D4364;
    padding: 4px 2px;
    background-color: #5D5DE9;
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:bold;
    font-size:15px;
    box-shadow: 0px 3.91px 3.9px rgba(0, 0, 0, 0.25);
    &:hover{
        cursor: pointer;
        background-color: #7C7FFF;
    }
`;