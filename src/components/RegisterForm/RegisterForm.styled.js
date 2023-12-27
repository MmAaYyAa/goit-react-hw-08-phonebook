import styled from 'styled-components';

export const Form = styled.form`
 width: 320px;
 margin: 0 auto;
`
export const RegisterInput = styled.input`
border: 1px solid #b6cdbd;
border-radius: 4px;
color: #8787a3;
padding: 8px 16px;
&:focus {
 outline: none;
 border: 2px solid #61b390;
}
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 16px;
    font-weight: 400;
    color: #004445;
  `
  export const RegisterButton = styled.button`
  display: block;
  width: 100px;
  padding: 5px 4px;
  font-size: 14px;
  color: #475053;
  background-color: #3baea0;
  border: 1px solid #ddeedf;
  border-radius: 4px;
  &:hover {
    outline: none;
    border: 2px solid #61b390;
    cursor: pointer;
    background-color: #61d2b4;
    color: white;
  }`