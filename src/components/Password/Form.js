import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/Button';
import media from 'utils/media';

const Container = styled.form`
  width: 100%;

  input,
  button {
    height: 50px;
    margin: 10px 0;
    border-radius: 5px;
  }

  ${media.tablet`
    input {
      border-radius: 5px 0 0 5px;
    }

    button {
      border-radius: 0 5px 5px 0;
    }
  `};

`;

const Label = styled.label``;

const Input = styled.input`
  padding-left: 20px;
  border: ${props => `1px solid ${props.theme.colors.grey}`};
  width: ${props => props.theme.values.formItemWidthMobile};

  ${media.tablet`
    width: ${props => `calc(100% - ${props.theme.values.formItemWidth})`};
    border-right: none;
  `};
`;

const Message = styled.span`
  color: ${props => props.isValid ? props.theme.colors.green : props.theme.colors.red};
`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitted: false,
      hasError: false,
    }

    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(e) {
    e.preventDefault();

    fetch("https://fed-pairing.shopifycloud.com/emails.json", {
      method: "POST",
      body: new FormData(document.getElementById('form'))
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        hasError: Object.keys(data.errors).length > 0,
        isSubmitted: true
      })
    })
  }

  render() {
    const { label, placeholder, buttonText, messages } = this.props;
    const { isSubmitted, hasError } = this.state;

    return (
      <Container id='form'>
        <Label>{label}</Label>
        <Input type="text" placeholder={placeholder} name='email' id='emailInput' />
        <Button onClick={e => this.validateEmail(e)}>{buttonText}</Button>
        {isSubmitted && <Message isValid={!hasError}>{messages[!hasError ? 'success' : 'error']}</Message>}
      </Container>
    );
  }
}

Form.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string
};

export default Form;