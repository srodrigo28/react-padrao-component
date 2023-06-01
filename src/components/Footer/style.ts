import styled from "styled-components";

export const Container = styled.div`
    
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: #fff;
    background-color: darkviolet;

    span{
        transition: 1s;
    }
    span:hover{
        cursor: pointer;
        margin-left: 10px;
        font-size: 1.8rem;
    }
`;
