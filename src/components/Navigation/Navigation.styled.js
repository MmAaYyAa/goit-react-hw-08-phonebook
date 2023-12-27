import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
 display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #004445;
  &.active {
  color: #118a7e;
  
}
  `
 