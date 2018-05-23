import React, { Component } from 'react';
import Password from 'components/Password';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Body from 'components/Body';

class App extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <ThemeProvider theme={theme}>
        <Body>
          <Password {...data} />
        </Body>
      </ThemeProvider>
    )
  }
}

export default App;