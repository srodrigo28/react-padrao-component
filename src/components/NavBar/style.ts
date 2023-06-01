import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: #fff;
    background-color: darkviolet;

    nav{
        ul{
            gap: 20px;
            display: flex;
            li{
                list-style: none;
                transition :  1s;
            }
            li:hover{
                cursor: pointer;
                border-radius: 10px;
                background-color: #5b1d99;
                padding: 20px;
            }
        }
    }
`;

