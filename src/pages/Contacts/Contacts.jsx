import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ContactsList} from '../../components/ContactsList/ContactsList';
import {ContactForm} from '../../components/ContactForm/ContactForm';
import {Filter} from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/api';
import {selectIsLoading} from '../../redux/selectors';
import {selectError} from '../../redux/selectors';

export default function Contacts () {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    return(
        <div>
           <ContactForm />
           <Filter />
           <div>{isLoading && 'Request in progress...'}</div>
           <ContactsList />

        </div>
    )
}