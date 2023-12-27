import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ContactsList} from '../../components/ContactsList/ContactsList';
import {ContactForm} from '../../components/ContactForm/ContactForm';
import {Filter} from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/api';
import {selectIsLoading} from '../../redux/selectors';
import {selectError} from '../../redux/selectors';
import {Container, ErrorMessage} from './Contacts.styled';
import Loader from 'components/Loader/Loader';

export default function Contacts () {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    return(
        <Container>
           <ContactForm />
           <Filter />
           {isLoading &&  <Loader />}
           {error && <ErrorMessage>Oops... Error: {error}</ErrorMessage>}
           <ContactsList />

        </Container>
    )
}