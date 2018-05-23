import styled from 'styled-components';
import media from 'utils/media';

const Body = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.black};

  ${media.desktop`height: 100vh;`};
`;

export default Body;
