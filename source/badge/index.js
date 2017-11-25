import styled from 'styled-components';
import { prop } from 'styled-tools';
import defaultTheme from '../theme';

const Badge = styled.span`
  display: inline-block;
  padding: .2142857143em .5714285714em;
  line-height: 1.35;
  border-radius: 4px;
  color: ${prop('theme.primaryColorText')};
  background-color: ${prop('theme.primaryColor')};
`;

Badge.defaultProps = {
  theme: defaultTheme,
};

export default Badge;
