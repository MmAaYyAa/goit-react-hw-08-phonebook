import React, {useEffect, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import {getContacts} from '../redux/selectors';
import { fetchContacts } from '../redux/api';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Registrer/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));

export const App =  () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <>
        <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<HomePage/>}/>
         <Route path="/register" element={<RegisterPage />}/>
         <Route path="/login" element={<LoginPage />}/>
        </Route>
      </Routes>
        </div>
      </>
    );
}

export default App;
{/* <ContactForm/>
<Filter />
{isLoading && <b>Loading contacts...</b>}
{error && <b>{error}</b>}
<ContactsList/> */}