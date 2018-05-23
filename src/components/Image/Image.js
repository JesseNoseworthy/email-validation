import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img``;

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
};

export default Image;