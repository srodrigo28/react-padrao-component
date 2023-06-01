import styled from "styled-components";

export const Container = styled.div`
    height: 72vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const LoginForm = styled.div`
    height: 50vh;
    width: 30vw;
    gap: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: darkviolet;
    border-radius: 0 20px;
`;
export const Title = styled.h1`
    color: #fff;
    font-size: 2.5em;
`;
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;
export const LabelInput = styled.label`
    font-weight: bold;
    color: #fff;
`;
export const LoginInput = styled.input`
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 7px;
`; 
export const ButtonGroup = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Button = styled.button`
        cursor: pointer;
        width: 95px;
        padding: 10px;
        font-weight: bold;
        border: none;
        border-radius: 7px;
        transition: 1s;
        color: #fff;
        background-color: #5b1d99;

        &:hover{
            background-color: violet;
        }
`;