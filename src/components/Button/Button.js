import styled from 'styled-components';
import media from 'utils/media';

const Button = styled.button`
  padding: 0;
  background: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};
  border: ${props => `1px solid ${props.theme.colors.green}`};
  width: ${props => props.theme.values.formItemWidthMobile};

  ${media.tablet`
    width: ${props => props.theme.values.formItemWidth};
  `};

  &:hover {
    cursor: pointer;
  }
`;

export default Button;