import styled from 'styled-components';

export const ContactItem = styled.div` 
display: flex;
 justify-content: space-between;
align-items: center;
background-color: transparent;
font-size: 18px;
padding: 15px 0 15px 12px; 
margin-bottom: 5px;
margin-left: 12px;`
   
  export const LiItem = styled.li`

min-width: 300px;
color: #004445;
list-style: none;`

export const DeleteButton = styled.button`
    display: block;
    width: 80px;
    padding: 4px 10px;
    background-color : #3baea0;
    color: #475053;
    border-radius: 3px;
    border: 1px solid #ddeedf;
    &:hover {
      outline: none;
      border: 2px solid #61b390;
      cursor: pointer;
      background-color: #61d2b4;
      color: white;}`

