import { useDispatch } from "react-redux";
import {logOut} from '../../redux/auth/operations';
import {useAuth} from '../../hooks/useAuth';
import {Wrapper, UserName, LogoutButton} from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();

    return(
        <Wrapper>
            <UserName>Welcome, {user.name}</UserName>
            <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogoutButton>
        </Wrapper>
    )
}





