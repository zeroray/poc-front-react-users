import React, { Component } from 'react';
import Users from './Users';
import styled from 'styled-components';
const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;
class App extends Component {
  render() {
    return (
      <Container>
        <h1>React User</h1>
        <h2>Users: </h2>
        <Users />
      </Container>
    );
  }
}
export default App;