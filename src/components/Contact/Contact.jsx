import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/api';
import { LiItem, ContactItem, DeleteButton } from '../Contact/Contact.styled';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <ContactItem>
      <LiItem>
        {contact.name}: {contact.number}
      </LiItem>
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

export default Contact;
 // const deleteContacts = id => {
  //   setContacts(prev => prev.filter(el => el.id !== id),
  //   );
  // };