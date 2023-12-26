import styled from 'styled-components';

export const FilterTitle = styled.h3` 
 color: #004445;
 font-size: 24px;
font-weight: 500px;
margin-left: 12px;`
 
  

export const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  width: 100%;
  min-width: 300px;
  gap: 10px;
  width: 300px;
  font-size: 12px;`

  export const Text = styled.label`
  font-size: 16px;
  color: #004445;`

  export const Input = styled.input`
   width: 300px;
  border-radius: 4px;
  border: 1px solid #b6cdbd;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 30px;
  color: #8787a3;
  &:focus {
      outline: none;
      border: 2px solid #61b390;
    }`



