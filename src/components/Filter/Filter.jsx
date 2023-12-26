import {useSelector, useDispatch} from 'react-redux';
import {filterContacts} from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import { Text, Input ,Container, FilterTitle } from './Filter.styled';
//import { Input } from '../ContactForm/ContactForm.styled';

export const Filter = () => {
  const {filter} = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilter =  ({ target: { value } })  => {
    dispatch(filterContacts(value));
     };
  return (
    <>
      <FilterTitle>Contacts</FilterTitle>
      <Container>
        <Text>Find contacts by name</Text>
        <Input 
          type="text"
          onChange={handleFilter}
          value={filter}
          placeholder="Search contacts..."
        ></Input>
      </Container>
    </>
  );
};
export default Filter;
