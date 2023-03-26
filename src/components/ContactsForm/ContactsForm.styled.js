import styled from "styled-components";

export const Form = styled.form`
    border: 2px solid #fff;
    background-color: #FAE173;
    padding: 18px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Title = styled.h1`
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 600;
    color: #0070A0;    
`;

export const ContactFormLabel = styled.label`
    font-size: 12px;
    color: #0070A0;
`;

export const ContactInput = styled.input`
    margin-bottom: 16px;
    height: 28px
    border-radius: 30px;
    background-color: transparant;
    
`;

export const AddContactBtn = styled.button`
    // width: 150px;
    height: 26px;
    background-color: transparant;
    color: #0070A0;
    cursor: pointer;
    font-size: 12px;
    color: #0070A0;

    &:hover,
    &:focus {
        background-color: #0070A0;
        color: #fff;
    }
`