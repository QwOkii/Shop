import styled from "styled-components";

export const Input =styled.input`
    border-radius: 0.25rem;
    height:40px;
    width:375px;
    outline: 0;
    padding:0.5rem;
    color: #BFBFBF;
    border: 1px solid #BFBFBF;
    :focus,:hover{
        border-color: #60A5FA;
    }
`

export const InputSearch = styled.input`
    border-radius: 0.25rem;
    height:40px;
    transition: width 1s ease-in-out;
    width:120px;
    outline: 0;
    padding:0.5rem;
    color: #BFBFBF;
    border: 1px solid #BFBFBF;
    :focus,:hover{
        border-color: #60A5FA;

    };
    :focus{
        width:375px;
    };
    
`