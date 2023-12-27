import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import {Form, Label,  LogInInput, LogInButton} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
    return (       
    <Form  onSubmit={handleSubmit} autoComplete="off" >
    < Label>
      Email
      < LogInInput type="email" name="email"  placeholder="Enter email" required />
    </ Label>
    < Label>
      Password
      < LogInInput type="password" name="password"  placeholder="Enter password" required/>
    </ Label>
    <LogInButton type="submit">Log In</LogInButton>
  </Form>)
}  