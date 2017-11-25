import styled from 'styled-components';
import defaultTheme from '../theme';

const Badge = styled.span`
  display: inline-block;
  padding: .2142857143em .5714285714em;
  line-height: 1.35;
  border-radius: 4px;
  color: ${({ theme }) => theme.primaryColorText};
  background-color: ${({ theme }) => theme.primaryColor};
`;

Badge.defaultProps = {
  theme: defaultTheme,
};

export default Badge;
