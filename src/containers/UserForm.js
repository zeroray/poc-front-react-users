import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import { postUser } from '../axios/api';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
    }
  }
  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    postUser(this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }  
  render() {
    const { name, lastName } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="name"
          onChange={this.handleChange}
          placeholder="name"
          value={name}
        />
        <Input
          name="lastName"
          onChange={this.handleChange}
          placeholder="lastName"
          value={lastName}
        />
        <Button>Submit</Button>
      </Form>
    );
  }
}
export default UserForm;