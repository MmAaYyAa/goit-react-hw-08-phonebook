import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
 display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #004445;
  &:active {
  color: #118a7e;
}`
