import styled from 'styled-components';
export const Form = styled('form')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    miWwidth: '100%',
    width: '300px',
    padding: '15px 0 15px 12px',
    marginBottom: '30px',
    marginLeft: '12px',
    fontSize: '18px',
    fontWeight: '500',
    color: '#004445',
  };
});

export const Input = styled('input')(() => {
  return {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 16px',
    marginTop: '8px',
    marginBottom: '24px', 
    border: '1px solid #b6cdbd',
    borderRadius: '4px',
    color: '#8787a3',
    '&:focus': {
      outline: 'none',
      border: '2px solid #61b390',
    },
  };
});

export const ContactFormButton = styled('button')(() => {
  return {
    display: 'block',
    width: '140px',
    padding: ' 8px 6px',
    fontSize: '14px',
    color: '#475053',
    backgroundColor: '#3baea0',
    border: '1px solid #ddeedf',
    borderRadius: '4px',
    '&:hover': {
      outline: 'none',
      border: '2px solid #61b390',
      cursor: 'pointer',
      backgroundColor: '#61d2b4',
      color: 'white',
    },
  };
});

export const ContactFormTitle = styled('h1')(() => {
  return {
    fontSize: '26px',
    marginLeft: '12px',
    color: '#004445',
  };
});
