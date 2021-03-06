import React, { Component } from 'react';
import UserForm from './containers/UserForm';
import Users from './containers/Users';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <h1>PoC Front Users</h1>
        <h2>Create User: </h2>
        <UserForm />
        <h2>Users: </h2>
        <Users />
      </Container>
    );
  }
}

export default App;