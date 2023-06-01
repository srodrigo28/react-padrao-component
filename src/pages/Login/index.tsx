import {    Container, LoginForm, Title, InputGroup, LabelInput, 
            LoginInput, ButtonGroup, Button 
        } 
from "./style";
export function Login(){
    return(
        <Container>
            <LoginForm>
            <Title>Login</Title>
                <InputGroup>
                    <LabelInput>E-mail:</LabelInput>
                    <LoginInput />
                </InputGroup>
                <InputGroup>
                    <LabelInput>Senha:</LabelInput>
                    <LoginInput />
                </InputGroup>
                <ButtonGroup>
                   <Button>Entrar</Button>
                   <Button>Cadastrar</Button>
                </ButtonGroup>
            </LoginForm>
        </Container>
    )
}