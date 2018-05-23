import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from './Form';
import media from 'utils/media';

const Container = styled.div`
  width: calc(100% - (50px * 2));
  margin: 50px;

  ${media.tablet`
    margin: 50px auto;
    max-width: 700px;
  `};
`;

const Intro = styled.div`text-align: center;`;

const Title = styled.h1`margin: 20px 0;`;

const Description = styled.h4`margin: 20px 0;`;

const Divider = styled.span`
  width: 20px;
  height: 2px;
  display: block;
  background: ${props => props.theme.colors.green};
  margin: 0 auto;
`;

class Password extends Component {
  render() {
    const { title, description, inputFields } = this.props;

    return (
      <Container>
        <Intro>
          {title && <Title>{title}</Title>}
          <Divider />
          {description && <Description>{description}</Description>}
        </Intro>
        <Form {...inputFields} />
      </Container>
    );
  }
}

Password.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  inputFields: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
    buttonText: PropTypes.string
  })
};

export default Password;