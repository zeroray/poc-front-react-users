import React, { Component } from 'react';
import User from '../components/User';
import styled from 'styled-components';
import { getUsers } from '../axios/api';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: #eee;
`;

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }
componentDidMount() {
    getUsers()
      .then((res) => {
        this.setState({
          users: res.data,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

renderUsers = () => {
    const { users } = this.state.users;
    return users.map(user => {
      const { name, lastName, _id } = user;
      return (
        <User
          key={_id}
          name={name}
          lastName={lastName}
        />
      );
    });
  }
render() {
    const { loading } = this.state;
    return (
      <Container>
        {loading ? 'loading...' : this.renderUsers()}
      </Container>
    );
  }
}
export default Users;