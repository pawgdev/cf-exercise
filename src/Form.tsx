import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from 'styled-components';
import { Button, Container, Input } from "./components";

interface FormProps {
    onSubmit: (value: string) => void;
}

const Form = ({ onSubmit }: FormProps) => {
    const [ value, setValue ] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(value);
    }

    return (
        <Container>
            <Header>Search for a Public API</Header>
            <FormWrapper onSubmit={handleSubmit}>
                <InputWrapper>
                    <Input type="text" placeholder="Enter API name..." name="search" onChange={handleChange} value={value}/>
                </InputWrapper>
                <ButtonWrapper>
                    <Button type="submit">Search</Button>
                </ButtonWrapper>
            </FormWrapper>
        </Container>
    )
}

export default Form;

const FormWrapper = styled.form`
  display: flex;
  flex-flow: column wrap;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  flex-shrink: 1;
  margin-left: auto;
`;

const Header = styled.h1`
  font-size: 1.75rem;
  color: #3a3a3a;
  margin: 1rem 0;
`;
