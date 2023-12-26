import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
  align-items: center;
  gap: 12px;
  `

  export const UserName = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #0e9577;`

  export const LogoutButton = styled.button`
    display: block;
    width: 80px;
    padding: 4px 10px;
    background-color : #3baea0;
    color: #f8fcfb;
    border-radius: 3px;
    border: 1px solid #ddeedf;
    &:hover {
      outline: none;
      border: 2px solid #61b390;
      cursor: pointer;
      background-color: #61d2b4;
      color: white;}`
